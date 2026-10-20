'use client';

import { useSyncExternalStore } from 'react';

const format = new Intl.DateTimeFormat('en-GB', {
  hour: '2-digit',
  minute: '2-digit',
  timeZone: 'Africa/Nairobi',
});

function subscribe(onTick: () => void) {
  const id = window.setInterval(onTick, 15_000);
  return () => window.clearInterval(id);
}

// Live time in Kenya (EAT), so visitors abroad know when I'll reply.
export default function LocalTime() {
  const time = useSyncExternalStore(subscribe, () => format.format(new Date()), () => '--:--');
  return (
    <span className="tabular" suppressHydrationWarning>
      {time} EAT
    </span>
  );
}
