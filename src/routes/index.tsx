import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { Toaster } from "@/components/ui/sonner";
import { AnimatedBackground } from "@/components/portfolio/AnimatedBackground";
import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Skills } from "@/components/portfolio/Skills";
import { CodingPlatforms } from "@/components/portfolio/CodingPlatforms";
import { Projects } from "@/components/portfolio/Projects";
import { Experience } from "@/components/portfolio/Experience";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";
import { BackToTop } from "@/components/portfolio/BackToTop";
import { useReveal } from "@/components/portfolio/useReveal";
import { LoadingScreen } from "@/components/portfolio/LoadingScreen";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ram Krishna — Backend & Full Stack Developer" },
      {
        name: "description",
        content:
          "Portfolio of Ram Krishna, a backend and full stack developer building scalable APIs, real-time apps, and end-to-end products with Node.js, React, and Flutter.",
      },
      { property: "og:title", content: "Ram Krishna — Backend & Full Stack Developer" },
      {
        property: "og:description",
        content: "Backend-leaning full stack developer crafting scalable systems and elegant interfaces.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      {
        rel: "preconnect",
        href: "https://fonts.googleapis.com",
      },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap",
      },
    ],
  }),
  component: Index,
});

function Index() {
  const [loading, setLoading] = useState(true);
  useReveal();

  useEffect(() => {
    // Force scroll to top on refresh
    window.scrollTo(0, 0);
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }
  }, []);

  return (
    <div className="relative min-h-screen">
      {loading && <LoadingScreen onFinished={() => setLoading(false)} />}
      <AnimatedBackground />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <CodingPlatforms />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
      <Toaster />
    </div>
  );
}
