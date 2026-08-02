import { PiRanking, PiHeartFill, PiUsersThreeFill } from "react-icons/pi";

const VALUES = [
  {
    icon: PiRanking,
    title: "Quality Ingredients",
    text: "We source the best ingredients for our baked goods.",
  },
  {
    icon: PiHeartFill,
    title: "Made with Love",
    text: "Every treat is baked with passion and attention to detail.",
  },
  {
    icon: PiUsersThreeFill,
    title: "Community First",
    text: "We are proud to be part of the community we serve.",
  },
];

export default function OurValues() {
  return (
    <section className="bg-cream">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-14 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Image */}
          <div className="relative flex justify-center lg:justify-start">
            <img
              src="/images/gallery/about2.jfif"
              alt="Baker piping icing onto a cake"
              className="w-full max-w-md aspect-[4/5] object-cover rounded-3xl shadow-2xl shadow-brown-900/20"
            />
          </div>

          {/* Values list */}
          <div>
            <h2 className="font-display text-3xl text-brown-900 mb-8">
              Our Values
            </h2>

            <div className="flex flex-col gap-7">
              {VALUES.map(({ icon: Icon, title, text }) => (
                <div key={title} className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gold/15 text-gold text-xl">
                    <Icon />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-semibold text-brown-900">
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
        </div>
      </div>
    </section>
  );
}