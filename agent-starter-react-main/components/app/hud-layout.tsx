'use client';

import { ReactNode, useEffect, useState } from 'react';
import { DigitalClock } from './digital-clock';
import { SystemMonitor } from './system-monitor';

interface HudLayoutProps {
  children: ReactNode;
}

export function HudLayout({ children }: HudLayoutProps) {
  const [particles, setParticles] = useState<
    { id: number; left: string; size: string; duration: string; delay: string }[]
  >([]);

  useEffect(() => {
    // Generate static particles for the session
    const newParticles = Array.from({ length: 30 }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      size: `${Math.random() * 3 + 1}px`,
      duration: `${Math.random() * 10 + 5}s`,
      delay: `${Math.random() * 10}s`,
    }));
    setParticles(newParticles);
  }, []);

  return (
    <div className="bg-background text-foreground selection:bg-primary/30 relative min-h-screen w-full overflow-hidden antialiased">
      {/* Background Particles System (CSS-only animations) */}
      <div className="particles-container">
        {particles.map((p) => (
          <div
            key={p.id}
            className="particle"
            style={{
              left: p.left,
              width: p.size,
              height: p.size,
              animationDuration: p.duration,
              animationDelay: p.delay,
            }}
          />
        ))}
      </div>

      {/* Background scanline effect */}
      <div className="scanline" />

      {/* Vignette effect */}
      <div className="pointer-events-none absolute inset-0 z-10 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.5)_100%)]" />

      {/* HUD Header */}
      <div className="absolute top-0 left-0 z-50 flex w-full items-start justify-between p-6">
        <div className="w-64">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <div className="bg-primary h-2 w-2 animate-pulse rounded-full shadow-[0_0_10px_var(--primary)]" />
              <span className="text-primary/60 font-mono text-[10px] tracking-widest uppercase italic">
                System Authenticated
              </span>
            </div>
            <div className="flex flex-col">
              <div className="hud-glow text-primary font-mono text-lg font-bold tracking-tighter">
                ANTIGRAVITY v2.6.5
              </div>
              <div className="from-primary/60 via-primary/20 h-[2px] w-full bg-gradient-to-r to-transparent" />
            </div>
          </div>
        </div>

        <div className="absolute left-1/2 mt-2 flex -translate-x-1/2 flex-col items-center gap-2">
          <DigitalClock />
          <div className="flex gap-4">
            <div className="flex items-center gap-1">
              <div className="bg-primary/40 h-1 w-1 rounded-full" />
              <span className="text-primary/40 font-mono text-[8px] tracking-[0.2em] uppercase">
                Neural Node: 071-X
              </span>
            </div>
            <div className="flex items-center gap-1">
              <div className="bg-primary/40 h-1 w-1 rounded-full" />
              <span className="text-primary/40 font-mono text-[8px] tracking-[0.2em] uppercase">
                Sync: Optimal
              </span>
            </div>
          </div>
        </div>

        <div className="w-64 text-right">
          <div className="flex flex-col gap-1">
            <div className="text-primary/60 flex items-center justify-end gap-2 font-mono text-[10px] tracking-widest uppercase">
              <span>Connectivity Protocol</span>
              <div className="flex h-3 items-end gap-1">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="bg-primary/60 w-1 rounded-sm"
                    style={{ height: `${i * 30}%` }}
                  />
                ))}
              </div>
            </div>
            <div className="hud-glow font-mono text-sm font-bold tracking-tighter text-green-400">
              ENCRYPTED L3 - STEALTH
            </div>
          </div>
        </div>
      </div>

      {/* Left Monitoring Panel */}
      <div className="absolute top-32 left-6 z-40 hidden opacity-80 transition-opacity hover:opacity-100 md:block">
        <SystemMonitor />
      </div>

      {/* Right Data Stream Status */}
      <div className="text-primary/40 absolute top-32 right-6 z-40 flex hidden w-48 flex-col gap-6 p-4 font-mono text-[10px] opacity-70 transition-opacity hover:opacity-100 md:block">
        <div className="border-primary/30 space-y-4 border-l-2 pl-3">
          <div>
            <div className="text-primary/60 mb-2 tracking-widest uppercase">Process Matrix</div>
            <div className="grid grid-cols-4 gap-1">
              {Array.from({ length: 12 }).map((_, i) => (
                <div key={i} className="bg-primary/20 h-1 overflow-hidden rounded-full">
                  <div
                    className="bg-primary h-full animate-pulse"
                    style={{ animationDelay: `${i * 0.1}s`, width: `${Math.random() * 100}%` }}
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-1">
            <div className="text-primary/60 tracking-widest uppercase">Stream Activity</div>
            <div className="animate-pulse overflow-hidden text-[9px] whitespace-nowrap">
              {'> '}GATEWAY_ACTIVE_1101
            </div>
            <div className="overflow-hidden text-[9px] whitespace-nowrap opacity-50">
              {'> '}NODE_SECURE_AUTH
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <main className="relative z-30 h-screen w-full">{children}</main>

      {/* HUD Corner Accents (Improved) */}
      <div className="border-primary/40 pointer-events-none absolute top-0 left-0 z-20 m-2 h-24 w-24 rounded-tl-3xl border-t border-l" />
      <div className="border-primary/40 pointer-events-none absolute top-0 right-0 z-20 m-2 h-24 w-24 rounded-tr-3xl border-t border-r" />
      <div className="border-primary/40 pointer-events-none absolute bottom-0 left-0 z-20 m-2 h-24 w-24 rounded-bl-3xl border-b border-l" />
      <div className="border-primary/40 pointer-events-none absolute right-0 bottom-0 z-20 m-2 h-24 w-24 rounded-br-3xl border-r border-b" />

      {/* Subtle Grid overlay */}
      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-[0.03]"
        style={{
          backgroundImage: 'radial-gradient(var(--primary) 1px, transparent 1px)',
          backgroundSize: '30px 30px',
        }}
      />
    </div>
  );
}
