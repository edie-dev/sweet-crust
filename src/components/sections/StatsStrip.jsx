import { PiCakeFill, PiSmileyFill, PiPackageFill, PiCheckCircleFill } from "react-icons/pi";

const STATS = [
  { icon: PiCakeFill, value: "5+", label: "Years of Baking" },
  { icon: PiSmileyFill, value: "500+", label: "Happy Customers" },
  { icon: PiPackageFill, value: "50+", label: "Products" },
  { icon: PiCheckCircleFill, value: "100%", label: "Satisfaction" },
];

export default function StatsStrip() {
  return (
    <section className="bg-cream">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 pb-14 lg:pb-20">
        <div className="rounded-3xl bg-gold/10 px-6 py-10 lg:px-12 lg:py-12 shadow-sm">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
            {STATS.map(({ icon: Icon, value, label }) => (
              <div key={label} className="flex items-center gap-3 justify-center lg:justify-start">
                <Icon className="text-3xl text-gold shrink-0" />
                <div>
                  <p className="font-display text-2xl font-bold text-brown-900">
                    {value}
                  </p>
                  <p className="font-body text-sm text-brown-900/70">{label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}