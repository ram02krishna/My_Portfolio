import { useState } from "react";
import { z } from "zod";
import { Github, Linkedin, Mail, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

const schema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Enter a valid email").max(255),
  message: z.string().trim().min(5, "Message is too short").max(1000),
});

export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const result = schema.safeParse(form);
    if (!result.success) {
      toast.error(result.error.issues[0].message);
      return;
    }
    setLoading(true);
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      
      const data = await response.json();
      
      if (data.success) {
        toast.success("Message sent! I'll get back to you soon.");
        setForm({ name: "", email: "", message: "" });
      } else {
        toast.error("Failed to send message. Please try again.");
      }
    } catch (error) {
      toast.error("An error occurred. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="relative px-4 py-24 sm:py-32">
      <div className="mx-auto max-w-5xl">
        <div className="reveal mb-12 text-center">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-[color:var(--brand-cyan)]">// contact</p>
          <h2 className="mt-2 text-4xl font-bold sm:text-5xl">
            Let's <span className="text-gradient">build something</span>
          </h2>
          <p className="mt-3 text-muted-foreground">Open to freelance, full-time, and interesting collabs.</p>
        </div>

        <div className="grid gap-6 md:grid-cols-[1fr_1.3fr]">
          <div className="reveal glass gradient-border flex flex-col justify-between rounded-3xl p-6">
            <div>
              <h3 className="font-display text-xl font-semibold">Get in touch</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Drop a message or reach out on any of these — I usually reply within a day.
              </p>
            </div>
            <div className="mt-8 space-y-3">
              {[
                { icon: Mail, label: "Connect via Email", href: "mailto:krishnarammhd@gmail.com" },
                { icon: Github, label: "Connect on GitHub", href: "https://github.com/ram02krishna" },
                { icon: Linkedin, label: "Connect on LinkedIn", href: "https://www.linkedin.com/in/ram-krishna-419528287/" },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  className="group flex items-center gap-3 rounded-xl border border-border bg-secondary/30 p-3 text-sm transition-all hover:border-[color:var(--brand-cyan)]/40"
                >
                  <span className="flex h-9 w-9 items-center justify-center rounded-lg" style={{ background: "var(--gradient-brand)" }}>
                    <s.icon className="h-4 w-4 text-background" />
                  </span>
                  <span className="text-muted-foreground group-hover:text-foreground">{s.label}</span>
                </a>
              ))}
            </div>
          </div>

          <form onSubmit={onSubmit} className="reveal glass gradient-border space-y-4 rounded-3xl p-6">
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="mb-1.5 block text-xs font-medium text-muted-foreground">Name</label>
                <Input
                  id="name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Your name"
                  maxLength={100}
                  className="bg-secondary/40"
                />
              </div>
              <div>
                <label htmlFor="email" className="mb-1.5 block text-xs font-medium text-muted-foreground">Email</label>
                <Input
                  id="email"
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="you@domain.com"
                  maxLength={255}
                  className="bg-secondary/40"
                />
              </div>
            </div>
            <div>
              <label htmlFor="message" className="mb-1.5 block text-xs font-medium text-muted-foreground">Message</label>
              <Textarea
                id="message"
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="Tell me about your project..."
                rows={6}
                maxLength={1000}
                className="bg-secondary/40"
              />
            </div>
            <Button
              type="submit"
              disabled={loading}
              size="lg"
              className="w-full rounded-full text-base shadow-[var(--shadow-glow)]"
              style={{ background: "var(--gradient-brand)", color: "var(--primary-foreground)" }}
            >
              {loading ? "Sending..." : (<><Send className="mr-2 h-4 w-4" /> Send Message</>)}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
