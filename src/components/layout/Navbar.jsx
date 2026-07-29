import { useState } from "react";
import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FiSearch, FiUser, FiShoppingBag, FiMenu, FiX } from "react-icons/fi";
import { GiCupcake } from "react-icons/gi";

const NAV_LINKS = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Shop", to: "/shop" },
  { label: "Custom Order", to: "/custom-order" },
  { label: "Contact", to: "/contact" },
];

// Swap this out for real cart state (context/redux/zustand) later.
const CART_COUNT = 2;

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-cream/95 backdrop-blur-sm border-b border-brown-900/5">
      <nav className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <NavLink
            to="/"
            className="flex items-center gap-2 shrink-0"
            onClick={() => setMobileOpen(false)}
          >
            <GiCupcake className="text-3xl text-gold" />
            <span className="font-display text-2xl font-semibold text-brown-900">
              SweetCrust
            </span>
          </NavLink>

          {/* Desktop nav links */}
          <ul className="hidden lg:flex items-center gap-9">
            {NAV_LINKS.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  className={({ isActive }) =>
                    `relative py-2 font-body text-sm font-medium transition-colors ${
                      isActive
                        ? "text-brown-700"
                        : "text-brown-900/70 hover:text-brown-700"
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      {link.label}
                      {isActive && (
                        <motion.span
                          layoutId="nav-underline"
                          className="absolute left-0 right-0 -bottom-0.5 h-0.5 bg-gold rounded-full"
                          transition={{ type: "spring", stiffness: 380, damping: 30 }}
                        />
                      )}
                    </>
                  )}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Icon cluster */}
          <div className="hidden lg:flex items-center gap-5">
            <button
              aria-label="Search"
              className="text-brown-900/70 hover:text-brown-700 transition-colors text-lg"
            >
              <FiSearch />
            </button>
            <button
              aria-label="Account"
              className="text-brown-900/70 hover:text-brown-700 transition-colors text-lg"
            >
              <FiUser />
            </button>
            <button
              aria-label="Cart"
              className="relative text-brown-900/70 hover:text-brown-700 transition-colors text-lg"
            >
              <FiShoppingBag />
              {CART_COUNT > 0 && (
                <span className="absolute -top-2 -right-2 flex h-4 w-4 items-center justify-center rounded-full bg-brown-700 text-[10px] font-semibold text-cream">
                  {CART_COUNT}
                </span>
              )}
            </button>
          </div>

          {/* Mobile menu toggle */}
          <button
            className="lg:hidden text-2xl text-brown-900"
            aria-label="Toggle menu"
            onClick={() => setMobileOpen((v) => !v)}
          >
            {mobileOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </nav>

      {/* Mobile menu panel */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="lg:hidden overflow-hidden border-t border-brown-900/5 bg-cream"
          >
            <ul className="flex flex-col px-6 py-4 gap-1">
              {NAV_LINKS.map((link) => (
                <li key={link.to}>
                  <NavLink
                    to={link.to}
                    onClick={() => setMobileOpen(false)}
                    className={({ isActive }) =>
                      `block rounded-lg px-3 py-2.5 font-body text-sm font-medium ${
                        isActive
                          ? "bg-brown-900/5 text-brown-700"
                          : "text-brown-900/70"
                      }`
                    }
                  >
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>
            <div className="flex items-center gap-6 px-6 pb-5 pt-1 border-t border-brown-900/5">
              <button aria-label="Search" className="text-lg text-brown-900/70">
                <FiSearch />
              </button>
              <button aria-label="Account" className="text-lg text-brown-900/70">
                <FiUser />
              </button>
              <button aria-label="Cart" className="relative text-lg text-brown-900/70">
                <FiShoppingBag />
                {CART_COUNT > 0 && (
                  <span className="absolute -top-2 -right-2 flex h-4 w-4 items-center justify-center rounded-full bg-brown-700 text-[10px] font-semibold text-cream">
                    {CART_COUNT}
                  </span>
                )}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}