'use client';

import { useState } from 'react';

const needs = ['Web app', 'Mobile app', 'Payments', 'Portfolio site', 'Something else'];

type Status = 'idle' | 'sending' | 'success' | 'error';

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [need, setNeed] = useState('');
  const [status, setStatus] = useState<Status>('idle');
  const [error, setError] = useState('');

  const update = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setStatus('sending');
    setError('');
    try {
      const message = need ? `${form.message}\n\nLooking for: ${need}` : form.message;
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, message }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Failed to send message');
      setStatus('success');
      setForm({ name: '', email: '', subject: '', message: '' });
      setNeed('');
    } catch (err) {
      setStatus('error');
      setError(err instanceof Error ? err.message : 'Something went wrong.');
    }
  }

  if (status === 'success') {
    return (
      <div className="border-t border-rule pt-10" role="status">
        <p className="font-serif text-display-sm">
          Thank you. <span className="italic text-ink-3">Your message is on its way.</span>
        </p>
        <p className="mt-4 text-[16px] text-ink-2">I usually reply within a day, from Kenya (EAT).</p>
        <button type="button" onClick={() => setStatus('idle')} className="btn-line mt-8">
          Send another
        </button>
      </div>
    );
  }

  const field =
    'peer w-full border-0 border-b border-rule bg-transparent px-0 pb-3 pt-7 text-[18px] text-ink placeholder-transparent transition-colors focus:border-ink focus:outline-none focus:ring-0';
  const label =
    'pointer-events-none absolute left-0 top-7 origin-left font-mono text-[11px] uppercase tracking-[0.14em] text-ink-3 transition-all duration-300 peer-focus:top-0 peer-[:not(:placeholder-shown)]:top-0';

  return (
    <form onSubmit={submit} className="space-y-6" noValidate={false}>
      <div className="grid gap-6 sm:grid-cols-2">
        <div className="relative">
          <input id="name" name="name" required maxLength={100} value={form.name} onChange={update} placeholder="Name" className={field} autoComplete="name" />
          <label htmlFor="name" className={label}>Your name</label>
        </div>
        <div className="relative">
          <input id="email" name="email" type="email" required maxLength={200} value={form.email} onChange={update} placeholder="Email" className={field} autoComplete="email" />
          <label htmlFor="email" className={label}>Email</label>
        </div>
      </div>
      <div className="relative">
        <input id="subject" name="subject" required maxLength={150} value={form.subject} onChange={update} placeholder="Subject" className={field} />
        <label htmlFor="subject" className={label}>What are we building?</label>
      </div>
      <div className="relative">
        <textarea id="message" name="message" required maxLength={5000} rows={5} value={form.message} onChange={update} placeholder="Message" className={`${field} resize-none`} />
        <label htmlFor="message" className={label}>Tell me about it</label>
      </div>

      <fieldset>
        <legend className="font-mono text-[11px] uppercase tracking-[0.14em] text-ink-3">What do you need? (optional)</legend>
        <div className="mt-4 flex flex-wrap gap-2">
          {needs.map((b) => (
            <button
              key={b}
              type="button"
              onClick={() => setNeed(need === b ? '' : b)}
              aria-pressed={need === b}
              className={`rounded-full border px-4 py-2 text-[14px] transition-colors ${
                need === b ? 'border-ink bg-ink text-paper' : 'border-rule text-ink-2 hover:border-ink/40'
              }`}
            >
              {b}
            </button>
          ))}
        </div>
      </fieldset>

      <div className="flex flex-wrap items-center gap-5 pt-4">
        <button type="submit" disabled={status === 'sending'} className="btn-ink disabled:opacity-60">
          {status === 'sending' ? 'Sending…' : 'Send message'} <span aria-hidden>→</span>
        </button>
        {status === 'error' && (
          <p role="alert" className="text-[14px] text-kiln">
            {error} You can also email me directly.
          </p>
        )}
      </div>
    </form>
  );
}
