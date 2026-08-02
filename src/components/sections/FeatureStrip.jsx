import { FaLeaf, FaPhoneVolume, FaMotorcycle } from "react-icons/fa";
import { PiOven } from "react-icons/pi";

const FEATURES = [
  {
    icon: FaLeaf,
    title: "Fresh Ingredients",
    text: "We use the finest ingredients sourced locally.",
  },
  {
    icon: PiOven,
    title: "Baked Daily",
    text: "Made fresh everyday just for you.",
  },
  {
    icon: FaPhoneVolume,
    title: "Custom Orders",
    text: "We bake for your special moments.",
  },
  {
    icon: FaMotorcycle,
    title: "Delivery Available",
    text: "We deliver to your doorstep.",
  },
];

export default function FeatureStrip() {
  return (
    <section className="bg-gold/10">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-10">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {FEATURES.map(({ icon: Icon, title, text }) => (
            <div key={title} className="flex items-start gap-3">
              <Icon className="text-2xl text-gold shrink-0 mt-1" />
              <div>
                <h3 className="font-display text-base font-semibold text-brown-900">
                  {title}
                </h3>
                <p className="font-body text-sm text-brown-900/70 mt-1">
                  {text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}