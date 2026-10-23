'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useCallback, useEffect, useRef, useState } from 'react';

// A working miniature of the E-ELECTIONS ledger. Every block's hash is a real
// SHA-256 of (sequence | vote | previous hash), computed in the browser, and the
// chain is re-verified after every change, exactly like the production audit.

type Block = { seq: number; receipt: string; vote: string; prev: string; hash: string };
type Status = 'ok' | 'tampered' | 'broken';

const CANDIDATES = ['A', 'B', 'C'];
const VISIBLE = 4;
const GENESIS = '0'.repeat(64);

async function sha256(text: string) {
  const bytes = new TextEncoder().encode(text);
  const digest = await crypto.subtle.digest('SHA-256', bytes);
  return Array.from(new Uint8Array(digest), (b) => b.toString(16).padStart(2, '0')).join('');
}

function receiptCode() {
  const alphabet = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
  const pick = () => alphabet[Math.floor(Math.random() * alphabet.length)];
  const part = () => Array.from({ length: 4 }, pick).join('');
  return `KE-2027-${part()}-${part()}`;
}

async function makeBlock(seq: number, prev: string): Promise<Block> {
  const receipt = receiptCode();
  const vote = CANDIDATES[Math.floor(Math.random() * CANDIDATES.length)];
  const hash = await sha256(`${seq}|${receipt}|${vote}|${prev}`);
  return { seq, receipt, vote, prev, hash };
}

async function verify(blocks: Block[]): Promise<Status[]> {
  const statuses: Status[] = [];
  let broken = false;
  for (let i = 0; i < blocks.length; i++) {
    const b = blocks[i];
    const recomputed = await sha256(`${b.seq}|${b.receipt}|${b.vote}|${b.prev}`);
    const linkOk = i === 0 || b.prev === blocks[i - 1].hash;
    if (recomputed !== b.hash) {
      statuses.push('tampered');
      broken = true;
    } else if (broken || !linkOk) {
      statuses.push('broken');
    } else {
      statuses.push('ok');
    }
  }
  return statuses;
}

const short = (h: string) => `${h.slice(0, 6)}…${h.slice(-4)}`;

export default function HashChain() {
  const [blocks, setBlocks] = useState<Block[]>([]);
  const [statuses, setStatuses] = useState<Status[]>([]);
  const [tampered, setTampered] = useState(false);
  const busy = useRef(false);

  // Seed the chain once.
  useEffect(() => {
    // Web Crypto needs a secure context (HTTPS or localhost); without it the demo stays empty.
    if (!globalThis.crypto?.subtle) return;
    let cancelled = false;
    (async () => {
      const seed: Block[] = [];
      let prev = GENESIS;
      for (let seq = 1068; seq < 1068 + VISIBLE; seq++) {
        const b = await makeBlock(seq, prev);
        seed.push(b);
        prev = b.hash;
      }
      if (!cancelled) {
        setBlocks(seed);
        setStatuses(seed.map(() => 'ok'));
      }
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  const append = useCallback(async () => {
    if (busy.current) return;
    busy.current = true;
    const last = blocks[blocks.length - 1];
    if (last) {
      const next = await makeBlock(last.seq + 1, last.hash);
      const updated = [...blocks, next].slice(-VISIBLE);
      setBlocks(updated);
      setStatuses(updated.map(() => 'ok'));
    }
    busy.current = false;
  }, [blocks]);

  // A new ballot is sealed every few seconds, unless the visitor is mid-experiment.
  useEffect(() => {
    if (tampered || blocks.length === 0) return;
    const id = window.setTimeout(append, 3200);
    return () => window.clearTimeout(id);
  }, [append, tampered, blocks.length]);

  async function tamper() {
    const target = 1;
    const changed = blocks.map((b, i) =>
      i === target ? { ...b, vote: CANDIDATES[(CANDIDATES.indexOf(b.vote) + 1) % CANDIDATES.length] } : b,
    );
    setBlocks(changed);
    setStatuses(await verify(changed));
    setTampered(true);
  }

  async function restore() {
    const fresh: Block[] = [];
    let prev = blocks[0]?.prev ?? GENESIS;
    for (const b of blocks) {
      const nb = await makeBlock(b.seq, prev);
      fresh.push(nb);
      prev = nb.hash;
    }
    setBlocks(fresh);
    setStatuses(fresh.map(() => 'ok'));
    setTampered(false);
  }

  const intact = statuses.every((s) => s === 'ok');

  return (
    <div className="relative">
      <div className="mb-4 flex flex-wrap items-center justify-between gap-3 font-mono text-[10.5px] uppercase tracking-[0.16em]">
        <span className="flex items-center gap-2 text-bone/60">
          <span className={`h-1.5 w-1.5 rounded-full ${intact ? 'bg-[#8fc79a]' : 'bg-[#ff8a5c]'}`} />
          {intact ? 'Ledger intact · live' : 'Tampering detected'}
        </span>
        <button
          type="button"
          onClick={tampered ? restore : tamper}
          disabled={blocks.length < VISIBLE}
          className="border-2 border-bone px-3.5 py-1.5 font-mono text-[12px] font-bold uppercase tracking-[0.06em] text-bone transition-colors hover:border-bone hover:bg-bone hover:text-night disabled:opacity-40"
        >
          {tampered ? 'Reset the ledger' : 'Try changing a vote'}
        </button>
      </div>

      <ol className="grid gap-2 sm:grid-cols-2 xl:grid-cols-4" aria-live="polite">
        <AnimatePresence mode="popLayout" initial={false}>
          {blocks.map((b, i) => {
            const status = statuses[i] ?? 'ok';
            const bad = status !== 'ok';
            return (
              <motion.li
                key={b.seq}
                layout
                initial={{ opacity: 0, x: 24 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -24 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className={`relative border p-4 font-mono text-[11px] leading-relaxed transition-colors duration-500 ${
                  bad ? 'border-[#ff8a5c]/60 bg-[#ff8a5c]/[0.07]' : 'border-bone/12 bg-night-2'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-bone">Block #{b.seq}</span>
                  <span className={bad ? 'text-[#ff8a5c]' : 'text-[#8fc79a]'}>
                    {status === 'ok' ? 'sealed' : status === 'tampered' ? 'hash mismatch' : 'link broken'}
                  </span>
                </div>
                <dl className="mt-3 space-y-1 text-bone/55">
                  <div className="flex justify-between gap-2">
                    <dt>receipt</dt>
                    <dd className="text-bone/80">{b.receipt.slice(8)}</dd>
                  </div>
                  <div className="flex justify-between gap-2">
                    <dt>vote</dt>
                    <dd className={status === 'tampered' ? 'text-[#ff8a5c]' : 'text-bone/80'}>Candidate {b.vote}</dd>
                  </div>
                  <div className="flex justify-between gap-2">
                    <dt>prev</dt>
                    <dd className="tabular">{short(b.prev)}</dd>
                  </div>
                  <div className="flex justify-between gap-2">
                    <dt>hash</dt>
                    <dd className="tabular text-bone/80">{short(b.hash)}</dd>
                  </div>
                </dl>
              </motion.li>
            );
          })}
        </AnimatePresence>
      </ol>

      <p className="mt-4 min-h-[2.5em] max-w-xl text-[13px] leading-relaxed text-bone/55">
        {tampered
          ? 'One vote in block #' +
            (blocks[1]?.seq ?? '') +
            ' was changed. Its hash no longer matches, and every block after it now points at a broken link. The audit flags it instantly.'
          : 'Each ballot stores the hash of the one before it, like links in a chain. Change one vote and the chain snaps from that point on.'}
      </p>
    </div>
  );
}
