import { Button } from "@/components/ui/button";
import { CheckCircle2, MapPin, Phone } from "lucide-react";
import { motion } from "motion/react";

export default function HomeServiceSection() {
  return (
    <section className="py-20 bg-brand-panel">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl overflow-hidden shadow-card"
          >
            <div className="bg-brand-blue p-4 flex items-center gap-3">
              <MapPin className="w-5 h-5 text-brand-orange" />
              <span className="font-semibold text-white text-sm">
                Our Location — Chunabhatti, Mumbai
              </span>
            </div>
            <div className="relative bg-gradient-to-br from-red-50 to-red-100 flex flex-col items-center justify-center text-center p-12 min-h-[300px]">
              <div className="relative mb-4">
                <div className="w-20 h-20 rounded-full bg-brand-blue flex items-center justify-center shadow-lg">
                  <MapPin className="w-10 h-10 text-brand-orange" />
                </div>
              </div>
              <h3 className="font-display font-bold text-brand-blue text-2xl">
                Chunabhatti
              </h3>
              <p className="text-brand-blue/70 font-medium mt-1">
                Mumbai, Maharashtra
              </p>
              <p className="text-sm text-muted-foreground mt-3 max-w-xs">
                Centrally located to serve all areas of Mumbai quickly.
              </p>
              <div className="mt-6 grid grid-cols-3 gap-2 w-full max-w-xs">
                {[
                  "Sion",
                  "Kurla",
                  "Chembur",
                  "Ghatkopar",
                  "Dharavi",
                  "Antop Hill",
                ].map((area) => (
                  <span
                    key={area}
                    className="bg-white text-brand-blue text-xs font-medium px-2 py-1.5 rounded-full shadow-xs text-center"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-brand-orange font-semibold text-sm uppercase tracking-widest">
              Doorstep Repair
            </span>
            <h2 className="font-display font-bold text-brand-blue text-3xl sm:text-4xl mt-2 mb-4">
              We Come To You!
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Don't worry about transporting your heavy gas stove. Our expert
              mechanic will come to your home anywhere in Mumbai. A small
              convenience charge of{" "}
              <strong className="text-brand-blue">Rs. 200 extra</strong> applies
              for home visits.
            </p>
            <ul className="space-y-3 mb-8">
              {[
                "Available 7 days a week, 9 AM – 7 PM",
                "Same-day service in most areas",
                "Only Rs. 200 extra for home visits",
                "Experienced mechanic with all tools",
                "Transparent pricing — no surprises",
              ].map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-brand-orange flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-foreground">{point}</span>
                </li>
              ))}
            </ul>
            <a href="tel:+919004178235" data-ocid="homeservice.primary_button">
              <Button
                size="lg"
                className="bg-brand-orange hover:bg-brand-orange/90 text-white font-bold rounded-full px-8 gap-2"
              >
                <Phone className="w-5 h-5" /> Call for Home Service
              </Button>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
