import { useState, useMemo, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { getProductsByCategory } from "../data/products";
import ProductCard from "../components/ui/ProductCard";
import CategoryTabs from "../components/ui/CategoryTabs";
import { MdOutlineBakeryDining } from "react-icons/md";

const VALID_CATEGORIES = ["All", "Cakes", "Pastries", "Breads", "Cookies"];

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();

  // Read ?category= from the URL on load, fall back to "All" if missing/invalid
  const categoryFromUrl = searchParams.get("category");
  const initialCategory = VALID_CATEGORIES.includes(categoryFromUrl)
    ? categoryFromUrl
    : "All";

  const [activeCategory, setActiveCategory] = useState(initialCategory);

  // Keep state in sync if the URL changes while already on the Shop page
  // (e.g. clicking a different footer link without a full page reload)
  useEffect(() => {
    const urlCategory = searchParams.get("category");
    if (VALID_CATEGORIES.includes(urlCategory) && urlCategory !== activeCategory) {
      setActiveCategory(urlCategory);
    }
  }, [searchParams]);

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    setSearchParams(category === "All" ? {} : { category });
  };

  const filteredProducts = useMemo(
    () => getProductsByCategory(activeCategory),
    [activeCategory]
  );

  return (
    <section className="bg-cream">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-14 lg:py-20">
        {/* Heading */}
        <div className="text-center mb-8">
          <h1 className="font-display text-4xl text-brown-900">
            <MdOutlineBakeryDining className="inline-block text-5xl text-gold" />Our Shop
          </h1>
          <p className="font-body text-brown-900/70 mt-2">
            Explore our wide range of breads, pastries and cakes.
          </p>
        </div>

        {/* Category filter */}
        <div className="mb-10">
          <CategoryTabs active={activeCategory} onChange={handleCategoryChange} />
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