import { Link } from "react-router-dom";
import { getBestSellers } from "../../data/products";
import ProductCard from "../ui/ProductCard";

export default function BestSellers() {
  const bestSellers = getBestSellers();

  return (
    <section className="bg-cream">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-14 lg:py-20">
        <div className="flex items-center justify-between mb-8">
          <h2 className="font-display text-3xl text-brown-900">Best Sellers</h2>
          <Link
            to="/shop"
            className="font-body text-sm font-semibold text-brown-700 hover:text-brown-900 transition-colors"
          >
            View All →
          </Link>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {bestSellers.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}