"use client";

import { useState, useEffect, useRef } from "react";
import { personalInfo } from "@/data/portfolio";

const commands: Record<string, string> = {
  whoami: `${personalInfo.name} — ${personalInfo.title}`,
  skills: personalInfo.techStack.join(", "),
  contact: `${personalInfo.email}`,
  resume: `Opening resume... (simulated)`,
  help: `Available commands: whoami, skills, contact, resume, help`,
};

export default function TerminalSection() {
  const [input, setInput] = useState("");
  const [logs, setLogs] = useState<string[]>([
    "visitor@portfolio:~$ _",
    'Type "help" to see available commands.',
  ]);
  const [cursor, setCursor] = useState(true);
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [logs]);

  useEffect(() => {
    const blink = setInterval(() => setCursor((c) => !c), 500);
    return () => clearInterval(blink);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = input.trim().toLowerCase();
    const response = commands[trimmed] || `Command not found: ${trimmed}. Type "help" for available commands.`;
    setLogs((prev) => [
      ...prev,
      `visitor@portfolio:~$ ${input}`,
      response,
    ]);
    setInput("");
  };

  return (
    <section id="terminal" className="relative z-10 py-20 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-sm uppercase tracking-widest text-[var(--accent)] font-medium mb-3">
            Interactive
          </p>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-semibold text-[var(--text-primary)]">
            Terminal
          </h2>
        </div>

        <div className="neu-card overflow-hidden">
          <div className="flex items-center gap-2 px-5 py-3 border-b border-[var(--dark-shadow)]/20">
            <span className="w-3 h-3 rounded-full bg-red-400" />
            <span className="w-3 h-3 rounded-full bg-yellow-400" />
            <span className="w-3 h-3 rounded-full bg-green-400" />
            <span className="text-xs text-[var(--text-secondary)] ml-2 font-mono">terminal — portfolio</span>
          </div>
          <div className="p-5 font-mono text-sm leading-relaxed">
            {logs.map((log, i) => (
              <p
                key={i}
                className={log.startsWith("visitor") ? "text-[var(--accent)]" : "text-[var(--text-secondary)]"}
              >
                {log}
              </p>
            ))}
            <form onSubmit={handleSubmit} className="flex items-center mt-1">
              <span className="text-[var(--accent)] shrink-0">visitor@portfolio:~$ </span>
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="bg-transparent border-none outline-none text-[var(--text-primary)] font-mono text-sm flex-1 ml-2"
                autoFocus
              />
              {cursor && <span className="w-2 h-4 bg-[var(--accent)] animate-pulse" />}
            </form>
            <div ref={endRef} />
          </div>
        </div>
      </div>
    </section>
  );
}
