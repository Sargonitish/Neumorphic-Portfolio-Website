"use client";

import { useMousePosition } from "@/hooks/useMousePosition";

export default function MouseBackground() {
  const pos = useMousePosition();

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      <div
        className="absolute w-[600px] h-[600px] rounded-full bg-[var(--accent)]/3 blur-3xl"
        style={{
          left: `${pos.x * 40}%`,
          top: `${pos.y * 40}%`,
          transform: "translate(-50%, -50%)",
          transition: "left 0.8s ease-out, top 0.8s ease-out",
        }}
      />
      <div
        className="absolute w-[400px] h-[400px] rounded-full bg-[var(--accent-secondary)]/2 blur-3xl"
        style={{
          left: `${100 - pos.x * 30}%`,
          top: `${100 - pos.y * 30}%`,
          transform: "translate(-50%, -50%)",
          transition: "left 1.2s ease-out, top 1.2s ease-out",
        }}
      />
      <div
        className="absolute w-[300px] h-[300px] rounded-full bg-[var(--light-shadow)]/40 blur-3xl"
        style={{
          left: `${pos.x * 60}%`,
          top: `${pos.y * 60}%`,
          transform: "translate(-50%, -50%)",
          transition: "left 1.6s ease-out, top 1.6s ease-out",
        }}
      />
    </div>
  );
}
