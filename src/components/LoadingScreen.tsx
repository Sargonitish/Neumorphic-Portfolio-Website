"use client";

import { useState, useEffect } from "react";

export default function LoadingScreen() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), 800);
    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-[var(--bg)] transition-opacity duration-500">
      <div className="flex flex-col items-center gap-6">
        <div className="neu-circle w-20 h-20 flex items-center justify-center animate-float">
          <div className="w-10 h-10 rounded-full border-4 border-[var(--accent)] border-t-transparent animate-spin" />
        </div>
        <p className="text-sm text-[var(--text-secondary)] font-medium tracking-widest uppercase">
          Loading
        </p>
      </div>
    </div>
  );
}
