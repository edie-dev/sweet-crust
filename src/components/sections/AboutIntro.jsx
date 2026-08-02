import { GiHeartStake } from "react-icons/gi";

export default function AboutIntro() {
  return (
    <div className="mx-auto max-w-7xl px-6 lg:px-10 py-14 lg:py-20">
      <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        {/* Text content */}
        <div>
          <p className="font-body font-semibold text-sm tracking-widest text-brown-700 uppercase">
            About Us
          </p>
          <h1 className="font-display text-3xl lg:text-4xl font-bold text-brown-900 mt-3 leading-snug">
            Baking happiness into
            <br />
            every bite. 
              <GiHeartStake  className="inline-block text-3xl text-gold" />
          </h1>
          <p className="font-body text-brown-900/70 mt-4 leading-relaxed">
            SweetCrust was founded with a simple mission, to bring people
            together through good food made with love and the finest
            ingredients.
          </p>
          <button className="rounded-lg bg-brown-700 hover:bg-brown-900 text-cream font-body font-semibold text-sm py-3 px-7 mt-6 transition-colors">
            Learn More
          </button>
        </div>

        {/* Image */}
        <div className="relative flex justify-center lg:justify-end">
          <img
            src="/images/gallery/aboutintroimg.jfif"
            alt="Baking ingredients laid out on a wooden table"
            className="w-full max-w-sm aspect-[4/5] object-cover rounded-3xl shadow-2xl shadow-brown-900/20"
          />
        </div>
      </div>
    </div>
  );
}