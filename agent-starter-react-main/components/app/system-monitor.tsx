"use client";

import { useEffect, useState } from "react";

export function SystemMonitor() {
  const [metrics, setMetrics] = useState({
    cpu: 0,
    ram: 0,
    signal: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setMetrics({
        cpu: Math.floor(Math.random() * 20) + 10,
        ram: Math.floor(Math.random() * 15) + 40,
        signal: Math.floor(Math.random() * 5) + 95,
      });
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col gap-6 p-4 font-mono text-xs text-primary/80 bg-black/20 hud-border rounded-lg backdrop-blur-md w-48">
      <div className="flex flex-col gap-2">
        <div className="flex justify-between items-center">
          <span>CPU LOAD</span>
          <span className="text-primary">{metrics.cpu}%</span>
        </div>
        <div className="w-full h-1 bg-primary/10 rounded-full overflow-hidden">
          <div 
            className="h-full bg-primary transition-all duration-1000" 
            style={{ width: `${metrics.cpu}%` }} 
          />
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <div className="flex justify-between items-center">
          <span>MEMORY</span>
          <span className="text-primary">{metrics.ram}%</span>
        </div>
        <div className="w-full h-1 bg-primary/10 rounded-full overflow-hidden">
          <div 
            className="h-full bg-primary transition-all duration-1000" 
            style={{ width: `${metrics.ram}%` }} 
          />
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <div className="flex justify-between items-center">
          <span>SIGNAL</span>
          <span className="text-primary">{metrics.signal}%</span>
        </div>
        <div className="flex gap-1 h-3 items-end">
          {[1, 2, 3, 4, 5].map((i) => (
            <div 
              key={i} 
              className={`w-2 rounded-t-sm transition-all duration-500 ${
                i <= 4 ? 'bg-primary' : 'bg-primary/20'
              }`}
              style={{ height: `${i * 20}%` }}
            />
          ))}
        </div>
      </div>

      <div className="pt-2 border-t border-primary/20 flex flex-col gap-1 text-[10px] opacity-60">
        <div className="flex justify-between">
          <span>LATENCY</span>
          <span>24ms</span>
        </div>
        <div className="flex justify-between">
          <span>ENCRYPTION</span>
          <span className="text-green-400">AES-256</span>
        </div>
      </div>
    </div>
  );
}
