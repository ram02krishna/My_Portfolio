import { memo, useCallback } from 'react';
import { Link } from 'wouter';
import { Github, Linkedin, Twitter, Mail, ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

const navLinks = ['Projects', 'About', 'Contact'];
const socialLinks = [
  { icon: Github, href: "https://github.com/ByteOps02", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/ram-krishna-419528287/", label: "LinkedIn" },
  { icon: Twitter, href: "https://x.com/krishnarammhd", label: "Twitter" },
  { icon: Mail, href: "mailto:krishnarammhd@gmail.com", label: "Email" },
];

function Footer() {
  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <footer className="relative mt-20 border-t border-border/40 bg-background/30 backdrop-blur-md overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-primary/5 rounded-full blur-[100px]" />
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-purple-500/5 rounded-full blur-[100px]" />

      <div className="container mx-auto px-6 pt-20 pb-10 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20">
          {/* Brand Column */}
          <div className="lg:col-span-5">
            <Link href="/" className="text-3xl font-heading font-bold tracking-tighter mb-6 block hover:opacity-80 transition-opacity">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-foreground via-primary to-purple-500">
                Portfolio
              </span>
              <span className="text-primary">.</span>
            </Link>
            <p className="text-muted-foreground text-lg leading-relaxed max-w-md mb-8 font-light">
              Designing and developing high-performance web applications with a focus on user experience and modern aesthetics.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-2xl bg-secondary/30 backdrop-blur-sm border border-white/5 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-500 hover:-translate-y-2 group shadow-lg"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5 group-hover:scale-110 transition-transform" />
                </a>
              ))}
            </div>
          </div>

          {/* Links Column */}
          <div className="lg:col-span-2 lg:ml-auto">
            <h4 className="font-bold mb-6 text-foreground font-heading uppercase tracking-widest text-xs">Explore</h4>
            <ul className="space-y-4">
              {['Home', ...navLinks].map((item) => (
                <li key={item}>
                  <Link
                    href={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                    className="text-muted-foreground hover:text-primary transition-colors duration-300 flex items-center group text-base"
                  >
                    <span className="w-0 group-hover:w-4 h-px bg-primary mr-0 group-hover:mr-2 transition-all duration-300" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter/Contact Column */}
          <div className="lg:col-span-4 lg:ml-auto">
            <h4 className="font-bold mb-6 text-foreground font-heading uppercase tracking-widest text-xs">Stay in Touch</h4>
            <p className="text-muted-foreground mb-6 font-light">
              Interested in working together or just want to say hi? My inbox is always open.
            </p>
            <Link href="/contact">
              <Button size="lg" className="w-full rounded-2xl bg-primary hover:bg-primary/90 text-primary-foreground shadow-xl shadow-primary/20 h-14 text-lg font-medium group overflow-hidden relative">
                <span className="relative z-10 flex items-center justify-center">
                  Start a Conversation
                  <Mail className="ml-2 h-5 w-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </span>
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0"
                  animate={{ x: ['100%', '-100%'] }}
                  transition={{ repeat: Infinity, duration: 2, ease: 'linear' }}
                />
              </Button>
            </Link>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-10 border-t border-white/5 gap-6">
          <div className="text-sm text-muted-foreground font-light text-center md:text-left order-2 md:order-1">
            © {new Date().getFullYear()} <span className="text-foreground font-semibold">Ram Krishna</span>. All rights reserved.
          </div>
          
          <div className="flex items-center gap-8 order-1 md:order-2">
            <button className="text-xs uppercase tracking-widest font-bold text-muted-foreground hover:text-primary transition-colors">Privacy Policy</button>
            <button className="text-xs uppercase tracking-widest font-bold text-muted-foreground hover:text-primary transition-colors">Terms of Service</button>
            <Button
              size="icon"
              variant="outline"
              className="rounded-2xl h-12 w-12 border-white/5 bg-secondary/20 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-500 shadow-xl"
              onClick={scrollToTop}
              aria-label="Scroll to top"
            >
              <ArrowUp className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default memo(Footer);
