import { Link } from "react-router-dom";
import { GiHeartStake } from "react-icons/gi";

export default function Hero() {
  return (
    <section className="bg-cream">
        <>
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-14 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          {/* Text content */}
          <div>
           <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl leading-tight text-brown-900">
  Made with love,{" "}
  <span className="text-brown-700 italic">baked for joy.</span>{" "}
  <GiHeartStake  className="inline-block text-3xl text-gold" />
</h1>
            <p className="mt-5 font-body text-brown-900/70 text-base sm:text-lg max-w-md">
              Delicious breads, pastries and cakes made fresh everyday.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/shop"
                className="rounded-lg bg-brown-700 px-7 py-3 font-body text-sm font-semibold text-cream hover:bg-brown-900 transition-colors"
              >
                Shop Now
              </Link>
              <Link
                to="/custom-order"
                className="rounded-lg border border-brown-700 px-7 py-3 font-body text-sm font-semibold text-brown-700 hover:bg-brown-700 hover:text-cream transition-colors"
              >
                Custom Order
              </Link>
            </div>
          </div>

          {/* Hero image */}
         <div className="relative flex justify-center lg:justify-end">
  <img
    src="/images/gallery/hero-cake.png"
    alt="Chocolate drip cake topped with fresh berries"
    className="w-full max-w-md aspect-[4/5] object-cover object-top"
  />
</div>
        </div>
      </div>
      </>
      <>    
      
      </>
    </section>

  );
}