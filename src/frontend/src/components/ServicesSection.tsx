import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Flame, Home, Settings } from "lucide-react";
import { motion } from "motion/react";

const services = [
  {
    icon: Flame,
    title: "Gas Stove Repairing",
    description:
      "Complete repair of all gas stove brands. Burner cleaning, flame adjustment, ignition fixing, and valve replacement for smooth cooking every day.",
    features: [
      "All brands serviced",
      "Burner cleaning",
      "Ignition repair",
      "Flame adjustment",
    ],
  },
  {
    icon: Settings,
    title: "Spare Parts & Repairs",
    description:
      "Genuine replacement parts for all gas stove models. Burners, valves, knobs, pipes, regulators, and rubber seals — we stock and fit them all.",
    features: [
      "Genuine parts",
      "Burners & valves",
      "Knobs & pipes",
      "Rubber seals",
    ],
  },
  {
    icon: Home,
    title: "Home Service",
    description:
      "Don't worry about transporting your stove. Our expert mechanic comes to you anywhere in Mumbai. Only Rs. 200 extra for home visits.",
    features: [
      "Doorstep service",
      "All Mumbai areas",
      "Only Rs. 200 extra",
      "Same day available",
    ],
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-brand-panel">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-brand-orange font-semibold text-sm uppercase tracking-widest">
            What We Do
          </span>
          <h2 className="font-display font-bold text-brand-blue text-3xl sm:text-4xl mt-2">
            Our Core Services
          </h2>
          <p className="text-muted-foreground mt-3 max-w-lg mx-auto">
            Professional gas stove repair and maintenance by experienced
            mechanics in Mumbai.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6" id="spare-parts">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              data-ocid={`services.item.${i + 1}`}
            >
              <Card className="h-full shadow-card border-0 hover:shadow-lg transition-shadow">
                <CardHeader className="pb-3">
                  <div className="w-12 h-12 rounded-xl bg-brand-blue flex items-center justify-center mb-3">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="font-display text-brand-blue text-xl">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {service.description}
                  </p>
                  <ul className="space-y-1.5">
                    {service.features.map((f) => (
                      <li
                        key={f}
                        className="flex items-center gap-2 text-sm text-foreground"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-orange flex-shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
