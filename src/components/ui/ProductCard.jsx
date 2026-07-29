import { Link } from "react-router-dom";

// Simple Naira formatter, e.g. 12000 -> ₦12,000
const formatPrice = (price) => `₦${price.toLocaleString("en-NG")}`;

export default function ProductCard({ product }) {
  const { id, name, price, image } = product;

  return (
    <div className="group">
      <Link to={`/shop/${id}`} className="block overflow-hidden rounded-2xl bg-white">
        <img
          src={image}
          alt={name}
          className="w-full aspect-square object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </Link>

      <div className="mt-3">
        <Link to={`/shop/${id}`}>
          <h3 className="font-body font-medium text-brown-900 hover:text-brown-700 transition-colors">
            {name}
          </h3>
        </Link>
        <p className="font-body text-sm text-brown-700 font-semibold mt-1">
          {formatPrice(price)}
        </p>

        <button
          className="mt-3 w-full rounded-lg bg-brown-700 py-2.5 font-body text-sm font-semibold text-cream hover:bg-brown-900 transition-colors"
          onClick={() => {
            // wire up to real cart state later
            console.log(`Added ${name} to cart`);
          }}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}