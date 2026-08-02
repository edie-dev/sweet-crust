import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaTwitter, FaTiktok } from "react-icons/fa";
import { GiCupcake } from "react-icons/gi";

const QUICK_LINKS = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Shop", to: "/shop" },
  { label: "Custom Order", to: "/custom-order" },
  { label: "Contact", to: "/contact" },
];

const SHOP_LINKS = [
  { label: "Cakes", to: "/shop?category=Cakes" },
  { label: "Pastries", to: "/shop?category=Pastries" },
  { label: "Cookies", to: "/shop?category=Cookies" },
  { label: "Breads", to: "/shop?category=Breads" },
];

const HELP_LINKS = ["FAQ", "Shipping", "Returns", "Privacy Policy"];

const SOCIALS = [
  { icon: FaFacebookF, label: "Facebook", href: "#" },
  { icon: FaInstagram, label: "Instagram", href: "#" },
  { icon: FaTwitter, label: "Twitter", href: "#" },
  { icon: FaTiktok, label: "TikTok", href: "#" },
];

export default function Footer() {
  return (
    <footer className="bg-brown-900 text-cream pt-14 pb-6 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Logo + tagline */}
        <div className="mb-12 flex flex-col items-center lg:items-start gap-2">
          <Link to="/" className="flex items-center gap-2">
            <GiCupcake className="text-2xl text-gold" />
            <span className="font-display text-2xl font-semibold">SweetCrust</span>
          </Link>
          <p className="font-body text-sm text-cream/70 text-center lg:text-left">
            Made with love, baked for joy.
          </p>
        </div>

        {/* Link columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-8 lg:gap-12 text-left sm:text-left">
          <div>
            <h2 className="font-display text-base font-semibold mb-5">Quick Links</h2>
            <ul className="flex flex-col gap-3">
              {QUICK_LINKS.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="font-body text-sm text-cream/70 hover:text-gold transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="font-display text-base font-semibold mb-5">Shop</h2>
            <ul className="flex flex-col gap-3">
              {SHOP_LINKS.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.to}
                    className="font-body text-sm text-cream/70 hover:text-gold transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="font-display text-base font-semibold mb-5">Help</h2>
            <ul className="flex flex-col gap-3">
              {HELP_LINKS.map((label) => (
                <li key={label}>
                  <button className="font-body text-sm text-cream/70 hover:text-gold transition-colors text-left">
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="font-display text-base font-semibold mb-5">Follow Us</h2>
            <div className="flex gap-3 justify-lefyt sm:justify-start">
              {SOCIALS.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-cream/10 text-cream hover:bg-gold hover:text-brown-900 transition-colors"
                >
                  <Icon className="text-sm" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright bar */}
        <div className="mt-12 pt-6 border-t border-cream/10 text-center">
          <p className="font-body text-xs text-cream/60">
            © 2026 SweetCrust Bakery. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}