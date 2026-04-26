import { useEffect, useState } from "react";

export function LoadingScreen({ onFinished }: { onFinished: () => void }) {
  const [progress, setProgress] = useState(0);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    // Increase progress over time
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsExiting(true);
            setTimeout(onFinished, 800); // Wait for fade-out animation
          }, 500);
          return 100;
        }
        
        // Randomly increase progress to make it look "natural"
        const increment = Math.floor(Math.random() * 8) + 1;
        return Math.min(prev + increment, 100);
      });
    }, 100);

    return () => clearInterval(interval);
  }, [onFinished]);

  return (
    <div
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background transition-opacity duration-700 ease-in-out ${
        isExiting ? "opacity-0" : "opacity-100"
      }`}
    >
      <div className="relative flex flex-col items-center">
        {/* Text */}
        <div className="text-center">
          <h2 className="font-display text-2xl font-bold tracking-tight sm:text-3xl">
            <span className="text-gradient">Ram.dev</span>
          </h2>
          <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.4em] text-muted-foreground">
            Loading Portfolio
          </p>
        </div>

        {/* Counter */}
        <div className="mt-12 flex flex-col items-center">
          <span className="font-mono text-4xl font-light text-foreground/80 sm:text-5xl">
            {progress}<span className="text-sm opacity-50 ml-1">%</span>
          </span>
          
          {/* Progress bar */}
          <div className="mt-6 h-1 w-48 overflow-hidden rounded-full bg-secondary sm:w-64">
            <div
              className="h-full bg-gradient-to-r from-[color:var(--brand-cyan)] via-[color:var(--brand-violet)] to-[color:var(--brand-pink)] transition-all duration-300 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </div>

      {/* Background patterns */}
      <div className="grid-bg pointer-events-none absolute inset-0 -z-10 opacity-30" />
    </div>
  );
}
