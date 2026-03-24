import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import { motion } from "motion/react";

const testimonials = [
  {
    name: "Priya Sharma",
    location: "Sion, Mumbai",
    text: "My 4-burner stove was not working for days. Hari Om Gas Mechanic came within 2 hours and fixed it completely. Very professional and charges were reasonable!",
    rating: 5,
  },
  {
    name: "Ramesh Patil",
    location: "Kurla, Mumbai",
    text: "The ignition on my stove was broken. They replaced the part with a genuine piece and it works perfectly now. Home service was very convenient, only Rs. 200 extra.",
    rating: 5,
  },
  {
    name: "Sunita Mehta",
    location: "Chembur, Mumbai",
    text: "I have been using Hari Om for the past 3 years. They always provide quality service. The flame was uneven and they fixed it the same day. Highly recommended!",
    rating: 5,
  },
];

const STARS = [1, 2, 3, 4, 5];

export default function TestimonialsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-brand-orange font-semibold text-sm uppercase tracking-widest">
            Reviews
          </span>
          <h2 className="font-display font-bold text-brand-blue text-3xl sm:text-4xl mt-2">
            Happy Customers Speak
          </h2>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              data-ocid={`testimonials.item.${i + 1}`}
            >
              <Card className="h-full shadow-card border-0 bg-brand-panel">
                <CardContent className="pt-6">
                  <div className="flex gap-1 mb-3">
                    {STARS.filter((s) => s <= t.rating).map((s) => (
                      <Star
                        key={s}
                        className="w-4 h-4 fill-brand-orange text-brand-orange"
                      />
                    ))}
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-5">
                    "{t.text}"
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-brand-blue flex items-center justify-center text-white font-bold text-sm">
                      {t.name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-semibold text-brand-blue text-sm">
                        {t.name}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {t.location}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
