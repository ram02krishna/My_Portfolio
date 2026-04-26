import { Sparkles } from "lucide-react";

export function Experience() {
  return (
    <section id="experience" className="relative px-4 py-24 sm:py-32">
      <div className="mx-auto max-w-4xl">
        <div className="reveal mb-12 text-center">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-[color:var(--brand-cyan)]">// journey</p>
          <h2 className="mt-2 text-4xl font-bold sm:text-5xl">
            Where I am <span className="text-gradient">right now</span>
          </h2>
        </div>

        <div className="relative">
          {/* timeline line */}
          <div
            className="absolute left-4 top-2 h-full w-px"
            style={{ background: "linear-gradient(to bottom, var(--brand-violet), transparent)" }}
          />

          <div className="reveal relative pl-12">
            {/* dot */}
            <div
              className="absolute left-4 top-2 flex h-4 w-4 -translate-x-1/2 items-center justify-center rounded-full ring-4 ring-background"
              style={{ background: "transparent", border: "2px solid var(--brand-violet)" }}
            />

            <span
              className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/40 px-3 py-1 font-mono text-[11px] font-semibold uppercase tracking-[0.18em]"
              style={{ color: "var(--brand-violet)" }}
            >
              <Sparkles className="h-3 w-3" /> Present
            </span>

            <h3 className="mt-5 text-2xl font-bold sm:text-3xl">Open to SDE, Backend & Full Stack Roles</h3>

            <p className="mt-5 max-w-3xl text-base leading-relaxed text-muted-foreground">
              I’ve dedicated the past year to building end-to-end applications that solve real engineering challenges. My focus has been on architecting secure, scalable systems—everything from robust REST APIs and authentication layers to responsive, high-performance interfaces. 
            </p>
            <p className="mt-4 max-w-3xl text-base leading-relaxed text-muted-foreground">
              I’m now looking to join a collaborative engineering team where I can contribute to meaningful projects, learn from experienced mentors, and build software that makes a genuine impact.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
