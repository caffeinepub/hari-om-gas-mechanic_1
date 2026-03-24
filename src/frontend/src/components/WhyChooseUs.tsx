import { Award, IndianRupee, Package, Zap } from "lucide-react";
import { motion } from "motion/react";

const reasons = [
  {
    icon: Award,
    title: "Experienced Mechanic",
    desc: "Over 10 years of hands-on gas stove repair expertise",
  },
  {
    icon: Package,
    title: "Genuine Parts",
    desc: "Only authentic replacement parts used for every repair",
  },
  {
    icon: Zap,
    title: "Fast Service",
    desc: "Quick diagnosis and same-day repair in most cases",
  },
  {
    icon: IndianRupee,
    title: "Affordable Rates",
    desc: "Fair and transparent pricing with no hidden charges",
  },
];

export default function WhyChooseUs() {
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
            Our Strengths
          </span>
          <h2 className="font-display font-bold text-brand-blue text-3xl sm:text-4xl mt-2">
            Why Choose Us?
          </h2>
        </motion.div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {reasons.map((r, i) => (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex flex-col items-center text-center p-6 rounded-2xl bg-brand-panel hover:shadow-card transition-shadow"
            >
              <div className="w-14 h-14 rounded-full bg-brand-orange flex items-center justify-center mb-4">
                <r.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="font-display font-semibold text-brand-blue text-base mb-2">
                {r.title}
              </h3>
              <p className="text-muted-foreground text-sm">{r.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
