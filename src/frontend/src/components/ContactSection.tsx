import { Button } from "@/components/ui/button";
import { Clock, MapPin, Phone } from "lucide-react";
import { motion } from "motion/react";

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-brand-blue">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-brand-orange font-semibold text-sm uppercase tracking-widest">
            Get In Touch
          </span>
          <h2 className="font-display font-bold text-white text-3xl sm:text-5xl mt-2 mb-4">
            Contact Us Today
          </h2>
          <p className="text-red-200 mb-10 text-lg">
            Ready to fix your gas stove? Call us now or save our number for
            future use.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
            <div className="bg-white/10 rounded-2xl p-6 text-center">
              <Phone className="w-8 h-8 text-brand-orange mx-auto mb-3" />
              <p className="text-white font-semibold text-sm mb-1">Phone</p>
              <p className="text-red-200 text-sm">+91 9004178235</p>
            </div>
            <div className="bg-white/10 rounded-2xl p-6 text-center">
              <MapPin className="w-8 h-8 text-brand-orange mx-auto mb-3" />
              <p className="text-white font-semibold text-sm mb-1">Location</p>
              <p className="text-red-200 text-sm">Chunabhatti, Mumbai</p>
            </div>
            <div className="bg-white/10 rounded-2xl p-6 text-center">
              <Clock className="w-8 h-8 text-brand-orange mx-auto mb-3" />
              <p className="text-white font-semibold text-sm mb-1">
                Working Hours
              </p>
              <p className="text-red-200 text-sm">Mon–Sun, 9 AM – 7 PM</p>
            </div>
          </div>
          <a href="tel:+919004178235" data-ocid="contact.primary_button">
            <Button
              size="lg"
              className="bg-brand-orange hover:bg-brand-orange/90 text-white font-bold rounded-full px-12 py-6 text-xl gap-3 shadow-lg"
            >
              <Phone className="w-6 h-6" /> +91 9004178235 — CALL NOW
            </Button>
          </a>
          <p className="text-red-300 text-sm mt-4">
            Home service available · Rs. 200 extra charge applies
          </p>
        </motion.div>
      </div>
    </section>
  );
}
