import { Button } from "@/components/ui/button";
import { ChevronDown, Phone } from "lucide-react";
import { motion } from "motion/react";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-[92vh] flex items-center"
      style={{
        backgroundImage:
          "url('/assets/generated/hero-gas-mechanic.dim_1400x700.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/55 to-transparent" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-block bg-brand-orange text-white text-xs font-semibold px-3 py-1 rounded-full mb-4 uppercase tracking-wide">
              Mumbai's Trusted Gas Stove Expert
            </span>
            <h1 className="font-display font-extrabold text-white text-4xl sm:text-5xl lg:text-6xl leading-tight uppercase mb-4">
              Expert Gas Stove
              <span className="text-brand-orange"> Repair</span>
              <br />
              in Mumbai
            </h1>
            <p className="text-gray-200 text-lg mb-8 leading-relaxed">
              Fast, reliable, and affordable gas stove repair at your doorstep.
              Serving Chunabhatti and all across Mumbai.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="tel:+919004178235" data-ocid="hero.primary_button">
                <Button
                  size="lg"
                  className="bg-brand-orange hover:bg-brand-orange/90 text-white font-bold rounded-full px-8 gap-2 shadow-lg"
                >
                  <Phone className="w-5 h-5" /> BOOK HOME SERVICE
                </Button>
              </a>
              <a href="#services" data-ocid="hero.secondary_button">
                <Button
                  size="lg"
                  variant="outline"
                  className="text-white border-white hover:bg-white hover:text-brand-blue font-bold rounded-full px-8"
                >
                  OUR SERVICES
                </Button>
              </a>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="flex flex-wrap gap-3 mt-10"
          >
            {[
              "10+ Years Experience",
              "Home Service Available",
              "Genuine Parts",
              "Same Day Repair",
            ].map((badge) => (
              <span
                key={badge}
                className="bg-white/20 backdrop-blur-sm text-white text-xs font-medium px-3 py-1.5 rounded-full border border-white/30"
              >
                ✓ {badge}
              </span>
            ))}
          </motion.div>
        </div>
      </div>
      <motion.div
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/60"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
      >
        <ChevronDown className="w-6 h-6" />
      </motion.div>
    </section>
  );
}
