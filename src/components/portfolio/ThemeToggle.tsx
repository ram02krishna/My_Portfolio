import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

export function ThemeToggle() {
  const [light, setLight] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("theme");
    const isLight = stored === "light";
    setLight(isLight);
    document.documentElement.classList.toggle("light", isLight);
  }, []);

  const toggle = (event: React.MouseEvent) => {
    const next = !light;

    // Fallback for browsers that don't support View Transitions
    if (!document.startViewTransition) {
      applyTheme(next);
      return;
    }

    // Modern View Transitions API for smooth, synchronous-feeling animation
    const transition = document.startViewTransition(() => {
      applyTheme(next);
    });

    // Circular reveal animation
    const x = event.clientX;
    const y = event.clientY;
    const endRadius = Math.hypot(
      Math.max(x, innerWidth - x),
      Math.max(y, innerHeight - y)
    );

    transition.ready.then(() => {
      document.documentElement.animate(
        {
          clipPath: [
            `circle(0px at ${x}px ${y}px)`,
            `circle(${endRadius}px at ${x}px ${y}px)`,
          ],
        },
        {
          duration: 600,
          easing: "cubic-bezier(0.4, 0, 0.2, 1)",
          pseudoElement: "::view-transition-new(root)",
        }
      );
    });
  };

  const applyTheme = (isLight: boolean) => {
    setLight(isLight);
    document.documentElement.classList.toggle("light", isLight);
    localStorage.setItem("theme", isLight ? "light" : "dark");
  };

  return (
    <button
      onClick={toggle}
      aria-label="Toggle theme"
      className="glass inline-flex h-10 w-10 items-center justify-center rounded-full transition-transform hover:scale-110 active:scale-95"
    >
      <div className="relative h-4 w-4">
        <Sun className={`absolute inset-0 h-4 w-4 transition-all duration-500 ${light ? "rotate-0 scale-100 opacity-100" : "-rotate-90 scale-0 opacity-0"}`} />
        <Moon className={`absolute inset-0 h-4 w-4 transition-all duration-500 ${light ? "rotate-90 scale-0 opacity-0" : "rotate-0 scale-100 opacity-100"}`} />
      </div>
    </button>
  );
}
