import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { services } from "@/lib/data";

export default function Services() {
  return (
    <section className="py-16 md:py-20 container mx-auto px-6">
      <div className="text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col items-center"
        >
          <span className="text-primary font-bold text-xs uppercase tracking-[0.3em] mb-4">Services</span>
          <h2 className="text-4xl md:text-6xl font-heading font-bold mb-4">
            Creative <span className="text-gradient">Solutions</span>.
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg md:text-xl font-light leading-relaxed">
            I help companies and startups build digital products that stand out from the crowd with modern aesthetics and top-tier performance.
          </p>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
          >
            <Card className="h-full bg-card/40 backdrop-blur-md border-border/40 hover:border-primary/40 transition-all duration-500 hover:-translate-y-4 hover:shadow-2xl hover:shadow-primary/5 group relative overflow-hidden rounded-3xl">
              {/* Animated gradient background */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-purple-500/5 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              
              {/* Corner accent */}
              <div className="absolute -top-10 -right-10 w-24 h-24 bg-primary/10 rounded-full blur-2xl group-hover:bg-primary/20 transition-all duration-700" />

              <CardHeader className="relative z-10 p-8 pb-0">
                <motion.div
                  className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/15 to-purple-500/15 flex items-center justify-center mb-6 text-primary group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-sm"
                >
                  <service.icon className="h-8 w-8" />
                </motion.div>
                <CardTitle className="text-2xl font-bold group-hover:text-primary transition-colors duration-300 font-heading tracking-tight">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="relative z-10 p-8 pt-4">
                <p className="text-muted-foreground leading-relaxed font-light group-hover:text-foreground/80 transition-colors duration-500">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
