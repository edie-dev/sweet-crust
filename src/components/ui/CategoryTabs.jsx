const CATEGORIES = ["All", "Cakes", "Pastries", "Breads", "Cookies"];

export default function CategoryTabs({ active, onChange }) {
  return (
    <div className="flex flex-wrap justify-center gap-3">
      {CATEGORIES.map((category) => {
        const isActive = category === active;
        return (
          <button
            key={category}
            onClick={() => onChange(category)}
            className={`rounded-full px-5 py-2 font-body text-sm font-medium transition-colors ${
              isActive
                ? "bg-brown-700 text-cream"
                : "bg-white text-brown-900/70 hover:bg-brown-700/10"
            }`}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
}