import { memo } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown, Sparkles } from 'lucide-react';
import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import TextReveal from '@/components/ui/TextReveal';
import TypewriterLoop from '@/components/ui/TypewriterLoop';
import ParticleBackground from '@/components/ui/ParticleBackground';
import GradientOrb from '@/components/ui/GradientOrb';
import MagneticButton from '@/components/ui/MagneticButton';

function Hero() {
  return (
    <section className="relative min-h-[100dvh] flex flex-col overflow-hidden bg-background">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)]
          bg-[size:24px_24px]
          [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"
        />

        <img
          src="/images/abstract_dark_premium_fluid_background_for_hero_section.png"
          alt=""
          loading="eager"
          fetchPriority="high"
          className="w-full h-full object-cover opacity-50"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/70 to-background" />

        {/* Particle Background */}
        <ParticleBackground particleCount={60} className="opacity-40" />

        {/* Floating Gradient Orbs */}
        <GradientOrb color="primary" size="lg" className="top-20 -left-32" delay={0} />
        <GradientOrb color="purple" size="md" className="top-40 right-20" delay={1} />
        <GradientOrb color="blue" size="md" className="bottom-40 left-20" delay={2} />
        <GradientOrb color="pink" size="sm" className="bottom-20 right-40" delay={1.5} />
      </div>

      {/* Content */}
      <div className="container relative z-10 px-6 text-center flex-1 flex flex-col items-center justify-center py-20">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-flex items-center gap-2 py-2 px-4 rounded-full bg-primary/10 text-primary text-sm font-medium mb-8 border border-primary/20 backdrop-blur-sm pulse-glow">
            <Sparkles className="h-4 w-4" />
            Open to New Opportunities
          </span>
        </motion.div>

        {/* Headline */}
        <div className="mb-8 flex flex-col items-center w-full">
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-heading font-extrabold tracking-tight leading-[1] w-full flex flex-col items-center">
            <TextReveal text="Crafting Digital" className="justify-center" delay={0.2} />
            <span className="relative">
              <TextReveal text="Masterpieces" className="justify-center text-gradient py-2 px-4" delay={0.4} />
              <motion.div 
                className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-primary via-purple-500 to-blue-500 rounded-full"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 1, duration: 0.8 }}
              />
            </span>
          </h1>
        </div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-lg md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed font-light"
        >
          Transforming complex ideas into <TypewriterLoop
            words={[
              'elegant web solutions',
              'robust backend systems',
              'interactive user journeys',
              'high-performance apps'
            ]}
            className="font-semibold text-primary"
          /> with precision and passion.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
        >
          <Link href="/projects">
            <MagneticButton
              size="lg"
              className="rounded-full px-10 text-lg h-14 sm:h-16 bg-primary hover:bg-primary/90 text-primary-foreground shadow-2xl hover:shadow-primary/40 transition-all duration-300 group overflow-hidden relative"
            >
              <span className="relative z-10 flex items-center">
                Explore Work
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </span>
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0"
                animate={{ x: ['100%', '-100%'] }}
                transition={{ repeat: Infinity, duration: 2, ease: 'linear' }}
              />
            </MagneticButton>
          </Link>

          <Link href="/contact">
            <MagneticButton
              variant="outline"
              size="lg"
              className="rounded-full px-10 text-lg h-14 sm:h-16 backdrop-blur-md bg-background/20 border-primary/20 hover:border-primary/50 hover:bg-background/40 transition-all duration-300"
            >
              Get in Touch
            </MagneticButton>
          </Link>
        </motion.div>

        {/* Metadata Pills */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.4 }}
          className="mt-16 flex flex-wrap justify-center gap-4 text-sm"
        >
          <div className="flex items-center gap-2 px-4 py-2 rounded-full glass-card border-green-500/20">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse shadow-[0_0_10px_rgba(34,197,94,0.5)]"></div>
            <span className="text-muted-foreground font-medium">Available for Hire</span>
          </div>

          <div className="flex items-center gap-2 px-4 py-2 rounded-full glass-card border-primary/20">
            <div className="w-2 h-2 rounded-full bg-primary shadow-[0_0_10px_rgba(var(--primary),0.5)]"></div>
            <span className="text-muted-foreground font-medium">Self-Taught Developer</span>
          </div>

          <div className="flex items-center gap-2 px-4 py-2 rounded-full glass-card border-blue-500/20">
            <div className="w-2 h-2 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)]"></div>
            <span className="text-muted-foreground font-medium">Remote Enthusiast</span>
          </div>
        </motion.div>
      </div>

      {/* Scroll-down arrow */}
      <motion.button
        onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{
          opacity: { delay: 1 },
          y: { repeat: Infinity, duration: 2, ease: 'easeInOut' },
        }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 text-muted-foreground/60 hover:text-primary transition-colors cursor-pointer p-2"
        aria-label="Scroll down to see more"
      >
        <ChevronDown className="h-6 w-6" />
      </motion.button>
    </section>
  );
}

export default memo(Hero);
