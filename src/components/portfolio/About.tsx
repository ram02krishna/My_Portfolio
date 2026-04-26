import { Github, Linkedin, Twitter, Mail, Download, User } from "lucide-react";

export function About() {
  return (
    <section id="about" className="relative px-4 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="reveal mb-12 text-center">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-[color:var(--brand-cyan)]">// about</p>
          <h2 className="mt-2 text-4xl font-bold sm:text-5xl">
            Solving problems <span className="text-gradient">through code.</span>
          </h2>
        </div>

        <div className="grid items-center gap-12 md:grid-cols-2">
          {/* Portrait card */}
          <div className="reveal relative mx-auto w-full max-w-md md:order-last">
            <div
              className="absolute -inset-4 rounded-[2rem] opacity-40 blur-2xl"
              style={{ background: "var(--gradient-brand)" }}
            />
            <div
              className="glass gradient-border relative aspect-square overflow-hidden rounded-[2rem]"
              style={{
                background:
                  "radial-gradient(circle at 50% 40%, oklch(0.32 0.05 280 / 0.9), oklch(0.16 0.025 265))",
              }}
            >
              {/* Profile Image */}
              <div className="flex h-full w-full items-center justify-center">
                <img 
                  src="/profile.png" 
                  alt="Ram Krishna" 
                  className="h-full w-full object-cover opacity-90 transition-all duration-700 ease-out scale-100 hover:scale-105 hover:opacity-100"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.nextElementSibling?.classList.remove('hidden');
                  }}
                />
                <User className="hidden h-40 w-40 text-foreground/15" strokeWidth={1} />
              </div>
            </div>
          </div>

          {/* Copy */}
          <div className="reveal">
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-foreground sm:text-3xl">Open to SDE, Backend & Full Stack Roles</h3>
            </div>

            <div className="space-y-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
              <p>
                I’m a developer driven by the challenge of architecting systems that are as resilient as they are efficient. Over the past year, I’ve focused on building end-to-end solutions—everything from secure authentication and scalable REST APIs to responsive interfaces and optimized database schemas.
              </p>
              <p>
                I find my flow in the complexity of backend logic, always aiming to ensure the systems behind the scenes run perfectly so the user experience feels effortless. I’m now looking for a collaborative team where I can tackle meaningful engineering problems, grow alongside mentors, and ship products that truly matter.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full px-6 py-3 font-medium text-background shadow-[var(--shadow-glow-violet)] transition-transform hover:-translate-y-0.5"
                style={{ background: "var(--gradient-brand)" }}
              >
                <Download className="h-4 w-4" />
                Download Resume
              </a>

              <div className="flex items-center gap-2">
                {[
                  { icon: Github, href: "https://github.com/ram02krishna", label: "GitHub" },
                  { icon: Linkedin, href: "https://www.linkedin.com/in/ram-krishna-419528287/", label: "LinkedIn" },
                  { icon: Twitter, href: "https://x.com/krishnarammhd", label: "Twitter" },
                  { icon: Mail, href: "mailto:krishnarammhd@gmail.com", label: "Email" },
                ].map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    aria-label={s.label}
                    className="wave-icon flex h-10 w-10 items-center justify-center rounded-full border border-border bg-secondary/50 text-foreground transition-colors hover:text-[color:var(--brand-violet)] hover:border-[color:var(--brand-violet)]/50"
                  >
                    <s.icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
