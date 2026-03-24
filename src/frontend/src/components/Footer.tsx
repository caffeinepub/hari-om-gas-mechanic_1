import { Flame, MapPin, Phone } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();
  const hostname =
    typeof window !== "undefined" ? window.location.hostname : "";
  return (
    <footer className="bg-brand-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-full bg-brand-orange flex items-center justify-center">
                <Flame className="w-4 h-4 text-white" />
              </div>
              <div>
                <div className="font-display font-bold text-white text-sm leading-none">
                  HARI OM
                </div>
                <div className="font-display font-semibold text-brand-orange text-xs">
                  GAS MECHANIC
                </div>
              </div>
            </div>
            <p className="text-red-300 text-sm leading-relaxed">
              Your trusted gas stove repair specialist in Chunabhatti, Mumbai.
              Quality service with genuine parts.
            </p>
          </div>
          <div>
            <h4 className="font-display font-bold text-white mb-4">Services</h4>
            <ul className="space-y-2">
              {[
                "Gas Stove Repairing",
                "Burner Cleaning",
                "Ignition Repair",
                "Valve Replacement",
                "Spare Parts Supply",
                "Home Service (+ Rs. 200)",
              ].map((s) => (
                <li
                  key={s}
                  className="text-red-300 text-sm flex items-center gap-2"
                >
                  <span className="w-1 h-1 rounded-full bg-brand-orange flex-shrink-0" />
                  {s}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-display font-bold text-white mb-4">
              Contact Us
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-brand-orange flex-shrink-0 mt-0.5" />
                <a
                  href="tel:+919004178235"
                  className="text-red-300 text-sm hover:text-white transition-colors"
                >
                  +91 9004178235
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-brand-orange flex-shrink-0 mt-0.5" />
                <span className="text-red-300 text-sm">
                  Chunabhatti, Mumbai, Maharashtra
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-red-400 text-xs">
            © {year} Hari Om Gas Mechanic. All rights reserved.
          </p>
          <p className="text-red-400 text-xs">
            Built with ❤️ using{" "}
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(hostname)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
