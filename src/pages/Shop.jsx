import { useState, useMemo } from "react";
import { getProductsByCategory } from "../data/products";
import ProductCard from "../components/ui/ProductCard";
import CategoryTabs from "../components/ui/CategoryTabs";

export default function Shop() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProducts = useMemo(
    () => getProductsByCategory(activeCategory),
    [activeCategory]
  );

  return (
    <section className="bg-cream">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-14 lg:py-20">
        {/* Heading */}
        <div className="text-center mb-8">
          <h1 className="font-bold font-display text-4xl text-brown-900">
           Our Shop
          </h1>
          <p className="font-body text-brown-900/70 mt-2">
            Explore our wide range of breads, pastries and cakes.
          </p>
        </div>

        {/* Category filter */}
        <div className="mb-10">
          <CategoryTabs active={activeCategory} onChange={setActiveCategory} />
        </div>

        {/* Product grid */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <p className="text-center font-body text-brown-900/60 mt-10">
            No products found in this category yet.
          </p>
        )}
      </div>
    </section>
  );
}