import React, { useState, FormEvent } from "react";
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, MapPin, Send, CheckCircle2 } from 'lucide-react';
import { profile } from '../../data/profile';
import SectionHeading from '../ui/SectionHeading';
import emailjs from "@emailjs/browser";

interface FormState {
  name: string;
  email: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

const contactCards = [
  { icon: Mail, label: 'Email', value: profile.email, href: `mailto:${profile.email}` },
  { icon: Linkedin, label: 'LinkedIn', value: '/in/poojahegde14', href: profile.linkedin },
  { icon: Github, label: 'GitHub', value: '@poojahegde880', href: profile.github },
  { icon: MapPin, label: 'Location', value: profile.location, href: undefined },
];

const Contact: React.FC = () => {
  const [form, setForm] = useState<FormState>({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = (): boolean => {
    const next: FormErrors = {};
    if (!form.name.trim()) next.name = 'Please enter your name.';
    if (!form.email.trim()) {
      next.email = 'Please enter your email.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      next.email = 'Please enter a valid email address.';
    }
    if (!form.message.trim()) next.message = 'Please add a short message.';
    setErrors(next);
    return Object.keys(next).length === 0;
  };

 const handleSubmit = async (e: FormEvent) => {
  e.preventDefault();

  if (!validate()) return;

  try {
    await emailjs.send(
  "service_igeyt4v",
      "template_tcl9o51",
      {
        name: form.name,
        email: form.email,
        message: form.message,
      },
      "pYCfIwqqiNQhsobl-"
    );

    setSubmitted(true);
    setForm({
      name: "",
      email: "",
      message: "",
    });

    setTimeout(() => setSubmitted(false), 4000);
  } catch (error) {
    console.error(error);
    alert("Failed to send message. Please try again.");
  }
};

  return (
    <section id="contact" className="relative py-24">
      <div className="mx-auto max-w-5xl px-6">
        <SectionHeading
  eyebrow="· CONTACT ·"
  title="Let's Connect"
  description="I'm open to software engineering opportunities, internships, and freelance collaborations. Feel free to get in touch."
/>

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {contactCards.map((c, i) => {
              const Icon = c.icon;
              const content = (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.45, delay: i * 0.08 }}
                  className="glass rounded-2xl p-6 min-h-[170px] transition-all duration-300 hover:-translate-y-2 hover:border hover:border-signal"
                >
                  <Icon
  size={24}
  className="text-signal-dim dark:text-signal"
/>
                  <p className="mt-3 font-mono text-[10px] uppercase tracking-wide text-slate-deep/50 dark:text-ink/40">
                    {c.label}
                  </p>
                  <p className="mt-1 break-words font-body text-sm font-medium text-slate-deep dark:text-ink">
                    {c.value}
                  </p>
                </motion.div>
              );
              return c.href ? (
                <a
                  key={c.label}
                  href={c.href}
                  target={c.href.startsWith('http') ? '_blank' : undefined}
                  rel={c.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                >
                  {content}
                </a>
              ) : (
                <div key={c.label}>{content}</div>
              );
            })}
          </div>

          <motion.form
            onSubmit={handleSubmit}
            noValidate
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            className="glass rounded-2xl p-6 sm:p-8"
          >
            <div className="mb-4">
              <label htmlFor="name" className="mb-1.5 block font-body text-xs font-medium text-slate-deep/70 dark:text-ink/60">
                Your name
              </label>
              <input
                id="name"
                type="text"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full rounded-xl border border-slate-deep/15 bg-transparent px-4 py-2.5 font-body text-sm text-slate-deep outline-none transition-colors focus:border-signal focus:ring-2 focus:ring-signal/20 dark:border-white/10 dark:text-ink"
                placeholder="Your Name"
              />
              {errors.name && <p className="mt-1 font-body text-xs text-red-500">{errors.name}</p>}
            </div>

            <div className="mb-4">
              <label htmlFor="email" className="mb-1.5 block font-body text-xs font-medium text-slate-deep/70 dark:text-ink/60">
                Your email
              </label>
              <input
                id="email"
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full rounded-xl border border-slate-deep/15 bg-transparent px-4 py-2.5 font-body text-sm text-slate-deep outline-none transition-colors focus:border-signal focus:ring-2 focus:ring-signal/20 dark:border-white/10 dark:text-ink"
                placeholder="your.email@example.com"
              />
              {errors.email && <p className="mt-1 font-body text-xs text-red-500">{errors.email}</p>}
            </div>

            <div className="mb-6">
              <label htmlFor="message" className="mb-1.5 block font-body text-xs font-medium text-slate-deep/70 dark:text-ink/60">
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full resize-none rounded-xl border border-slate-deep/15 bg-transparent px-4 py-2.5 font-body text-sm text-slate-deep outline-none transition-colors focus:border-signal focus:ring-2 focus:ring-signal/20 dark:border-white/10 dark:text-ink"
                placeholder="Tell me about your opportunity or project..."
              />
              {errors.message && <p className="mt-1 font-body text-xs text-red-500">{errors.message}</p>}
            </div>

            <button
              type="submit"
              className="flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-signal to-amber px-6 py-3 font-body text-sm font-semibold text-void shadow-glow transition-transform hover:scale-[1.02]"
            >
              {submitted ? (
                <>
                  <CheckCircle2 size={16} /> Message sent successfully!
                </>
              ) : (
                <>
                  <Send size={16} /> Send message
                </>
              )}
            </button>
            <p className="mt-3 text-center text-xs text-slate-deep/50 dark:text-ink/50">
  I'll get back to you as soon as possible.
</p>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
