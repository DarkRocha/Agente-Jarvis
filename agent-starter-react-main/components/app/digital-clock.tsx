'use client';

import { useEffect, useState } from 'react';

export function DigitalClock() {
  const [time, setTime] = useState<string>('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString('pt-BR', {
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: false,
        })
      );
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center font-mono tracking-tighter">
      <div className="text-primary/40 mb-1 text-xs tracking-widest uppercase">System Time</div>
      <div className="hud-glow text-primary text-4xl font-bold">{time}</div>
      <div className="via-primary/50 mt-1 h-[1px] w-full bg-gradient-to-r from-transparent to-transparent" />
    </div>
  );
}
