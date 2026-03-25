'use client';

import { useEffect, useState } from 'react';

interface CentralAnimationProps {
  isSpeaking?: boolean;
  isActive?: boolean;
}

export function CentralAnimation({ isSpeaking = false, isActive = true }: CentralAnimationProps) {
  return (
    <div className="animate-float relative flex h-80 w-80 items-center justify-center">
      {/* Dynamic Background Glow */}
      <div
        className={`bg-primary/5 absolute inset-0 rounded-full blur-[50px] transition-all duration-1000 ${isSpeaking ? 'scale-150 opacity-100' : 'scale-100 opacity-50'}`}
      />

      {/* Main Outer Energy Ring */}
      <div
        className={`border-primary/20 absolute inset-0 rounded-full border-2 shadow-[0_0_30px_rgba(34,211,238,0.2)] transition-all duration-700 ${isActive ? 'scale-100 opacity-100' : 'scale-90 opacity-0'}`}
      />

      {/* Rotating Tech Rings */}
      <div
        className="border-primary/40 absolute inset-4 animate-[spin_10s_linear_infinite] rounded-full border"
        style={{ borderStyle: 'dashed', borderDasharray: '30 15' }}
      />
      <div
        className="border-primary/30 absolute inset-8 animate-[spin_15s_linear_infinite_reverse] rounded-full border"
        style={{ borderStyle: 'dotted', borderDasharray: '4 8' }}
      />

      {/* Pulsing Audio/Energy Waves (Visible when speaking) */}
      {isSpeaking &&
        [1, 2, 3].map((i) => (
          <div
            key={i}
            className="border-primary absolute inset-0 animate-ping rounded-full border opacity-20"
            style={{ animationDuration: `${1 + i * 0.5}s` }}
          />
        ))}

      {/* Core Energy Sphere */}
      <div
        className={`relative flex h-48 w-48 items-center justify-center rounded-full transition-all duration-500 ${isSpeaking ? 'scale-110' : 'scale-100'}`}
      >
        {/* Glow Core */}
        <div className="bg-primary/20 animate-pulse-cyan absolute inset-0 rounded-full blur-md" />

        {/* Geometric Core Detail */}
        <div className="border-primary/60 absolute inset-6 flex items-center justify-center rounded-full border-2">
          <div
            className="border-primary/40 absolute inset-2 animate-spin rounded-full border"
            style={{ borderStyle: 'dashed', borderDasharray: '10 5' }}
          />
        </div>

        {/* Central Neural Orb */}
        <div
          className={`bg-primary/30 border-primary z-10 flex h-20 w-20 items-center justify-center rounded-full border-2 shadow-[0_0_40px_rgba(34,211,238,0.6)] transition-all duration-300 ${isSpeaking ? 'scale-125 shadow-[0_0_60px_rgba(34,211,238,0.9)]' : ''}`}
        >
          {/* Inner Pulse */}
          <div
            className={`bg-primary/60 h-8 w-8 animate-pulse rounded-full transition-all duration-300 ${isSpeaking ? 'scale-150' : 'scale-100'}`}
          />
        </div>
      </div>

      {/* Orbital Particles (Static CSS representation) */}
      {[0, 1, 2, 3].map((i) => (
        <div
          key={i}
          className="bg-primary/60 absolute h-2 w-2 rounded-full"
          style={{
            top: `${50 + 40 * Math.sin((i * Math.PI) / 2)}%`,
            left: `${50 + 40 * Math.cos((i * Math.PI) / 2)}%`,
            boxShadow: '0 0 10px var(--primary)',
            animation: `spin ${5 + i}s linear infinite`,
          }}
        />
      ))}

      {/* HUD Telemetry Labels */}
      <div className="text-primary/40 absolute -top-12 left-1/2 flex -translate-x-1/2 flex-col items-center gap-1 font-mono text-[9px] tracking-[0.4em] uppercase">
        <span className="animate-pulse">Active Neural Processing</span>
        <div className="via-primary/40 h-[1px] w-32 bg-gradient-to-r from-transparent to-transparent" />
      </div>

      <div className="text-primary/40 absolute -bottom-12 left-1/2 flex -translate-x-1/2 flex-col items-center gap-1 font-mono text-[9px] tracking-[0.4em] uppercase">
        <div className="via-primary/40 h-[1px] w-32 bg-gradient-to-r from-transparent to-transparent" />
        <span className="hud-glow text-primary/60">
          {isSpeaking ? 'Vocal Stream: Decrypting' : 'Awaiting Input'}
        </span>
      </div>
    </div>
  );
}
