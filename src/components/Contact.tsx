"use client";

import { useState } from "react";
import { personalInfo } from "@/data/portfolio";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  };

  const socialLinks = [
    { href: personalInfo.social.email, label: "Email", icon: "✉" },
    { href: personalInfo.social.linkedin, label: "LinkedIn", icon: "💼" },
    { href: personalInfo.social.github, label: "GitHub", icon: "🐙" },
    { href: personalInfo.social.twitter, label: "Twitter", icon: "🐦" },
  ];

  return (
    <section id="contact" className="relative z-10 py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-widest text-[var(--accent)] font-medium mb-3">
            Contact
          </p>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-semibold text-[var(--text-primary)]">
            Get in Touch
          </h2>
        </div>

        <div className="neu-card p-8 sm:p-10">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="name" className="text-sm font-medium text-[var(--text-primary)] block mb-2">
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="neu-input w-full px-4 py-3 text-sm text-[var(--text-primary)]"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="text-sm font-medium text-[var(--text-primary)] block mb-2">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="neu-input w-full px-4 py-3 text-sm text-[var(--text-primary)]"
                  placeholder="your@email.com"
                />
              </div>
            </div>

            <div>
              <label htmlFor="subject" className="text-sm font-medium text-[var(--text-primary)] block mb-2">
                Subject
              </label>
              <input
                id="subject"
                type="text"
                required
                value={form.subject}
                onChange={(e) => setForm({ ...form, subject: e.target.value })}
                className="neu-input w-full px-4 py-3 text-sm text-[var(--text-primary)]"
                placeholder="What's this about?"
              />
            </div>

            <div>
              <label htmlFor="message" className="text-sm font-medium text-[var(--text-primary)] block mb-2">
                Message
              </label>
              <textarea
                id="message"
                required
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="neu-input w-full px-4 py-3 text-sm text-[var(--text-primary)] resize-none"
                placeholder="Your message..."
              />
            </div>

            <button
              type="submit"
              className="neu-btn w-full py-3.5 rounded-xl font-medium text-[var(--accent)] text-sm"
            >
              {sent ? "✓ Message Sent!" : "Send Message"}
            </button>
          </form>

          <div className="flex justify-center gap-4 mt-10">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="neu-circle w-12 h-12 flex items-center justify-center text-lg hover:text-[var(--accent)] transition-colors"
                aria-label={link.label}
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
