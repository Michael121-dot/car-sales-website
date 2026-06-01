import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Sun, Moon, Menu, X, ShoppingCart, Heart, User, LogOut, ChevronDown } from "lucide-react";
import { useApp } from "../context/AppContext";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "Cars", path: "/cars" },
  { label: "Collections", path: "#collections", dropdown: ["Ferrari", "Lamborghini", "McLaren", "Tesla", "Porsche"] },
  { label: "Contact", path: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const { darkMode, toggleDark, user, logout, cart, wishlist } = useApp();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  const isActive = (path) => location.pathname === path;

  return (
    <>
      <motion.nav
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-white/95 dark:bg-charcoal-950/95 backdrop-blur-xl shadow-lg shadow-black/10"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 group">
              <div className="w-9 h-9 bg-gradient-to-br from-accent-400 to-accent-700 rounded-lg flex items-center justify-center shadow-lg shadow-accent-500/30">
                <span className="text-white font-display font-bold text-lg">L</span>
              </div>
              <span className="font-display text-2xl font-semibold tracking-wide text-charcoal-900 dark:text-white">
                Luxe<span className="text-gradient">Drive</span>
              </span>
            </Link>

            {/* Center Nav Links */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) =>
                link.dropdown ? (
                  <div key={link.label} className="relative" onMouseEnter={() => setDropdownOpen(true)} onMouseLeave={() => setDropdownOpen(false)}>
                    <button className={`flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                      scrolled ? "text-charcoal-700 dark:text-charcoal-200 hover:text-accent-500" : "text-white/90 hover:text-white"
                    }`}>
                      {link.label} <ChevronDown size={14} className={`transition-transform ${dropdownOpen ? "rotate-180" : ""}`} />
                    </button>
                    <AnimatePresence>
                      {dropdownOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 8 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full left-0 mt-1 w-48 bg-white dark:bg-charcoal-900 rounded-xl shadow-2xl border border-charcoal-100 dark:border-charcoal-800 overflow-hidden"
                        >
                          {link.dropdown.map((brand) => (
                            <button
                              key={brand}
                              onClick={() => { navigate(`/brand/${brand.toLowerCase()}`); setDropdownOpen(false); }}
                              className="w-full text-left px-4 py-2.5 text-sm text-charcoal-700 dark:text-charcoal-200 hover:bg-accent-50 dark:hover:bg-charcoal-800 hover:text-accent-600 transition-colors"
                            >
                              {brand} Collection
                            </button>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    key={link.label}
                    to={link.path}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 relative ${
                      isActive(link.path)
                        ? "text-accent-500"
                        : scrolled
                        ? "text-charcoal-700 dark:text-charcoal-200 hover:text-accent-500"
                        : "text-white/90 hover:text-white"
                    }`}
                  >
                    {link.label}
                    {isActive(link.path) && (
                      <motion.div layoutId="nav-underline" className="absolute bottom-0 left-3 right-3 h-0.5 bg-accent-500 rounded-full" />
                    )}
                  </Link>
                )
              )}
            </div>

            {/* Right Actions */}
            <div className="hidden lg:flex items-center gap-2">
              {/* Dark Toggle */}
              <button
                onClick={toggleDark}
                className={`p-2.5 rounded-xl transition-all duration-200 ${
                  scrolled
                    ? "text-charcoal-600 dark:text-charcoal-300 hover:bg-charcoal-100 dark:hover:bg-charcoal-800"
                    : "text-white/80 hover:text-white hover:bg-white/10"
                }`}
              >
                {darkMode ? <Sun size={18} /> : <Moon size={18} />}
              </button>

              {/* Wishlist */}
              <Link to="/cars" className="relative">
                <button className={`p-2.5 rounded-xl transition-all duration-200 ${
                  scrolled ? "text-charcoal-600 dark:text-charcoal-300 hover:bg-charcoal-100 dark:hover:bg-charcoal-800" : "text-white/80 hover:bg-white/10"
                }`}>
                  <Heart size={18} />
                  {wishlist.length > 0 && (
                    <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
                      {wishlist.length}
                    </span>
                  )}
                </button>
              </Link>

              {/* Cart */}
              <button
                onClick={() => window.dispatchEvent(new CustomEvent("toggle-cart"))}
                className={`relative p-2.5 rounded-xl transition-all duration-200 ${
                  scrolled ? "text-charcoal-600 dark:text-charcoal-300 hover:bg-charcoal-100 dark:hover:bg-charcoal-800" : "text-white/80 hover:bg-white/10"
                }`}
              >
                <ShoppingCart size={18} />
                {cart.length > 0 && (
                  <span className="absolute -top-1 -right-1 w-4 h-4 bg-accent-500 text-white text-xs rounded-full flex items-center justify-center">
                    {cart.length}
                  </span>
                )}
              </button>

              {user ? (
                <div className="flex items-center gap-2">
                  <div className="px-3 py-1.5 rounded-lg bg-accent-500/10 text-accent-600 dark:text-accent-400 text-sm font-medium">
                    {user.name?.split(" ")[0]}
                  </div>
                  <button onClick={logout} className="p-2.5 rounded-xl text-charcoal-500 hover:text-red-500 transition-colors">
                    <LogOut size={16} />
                  </button>
                </div>
              ) : (
                <>
                  <Link to="/login">
                    <button className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
                      scrolled ? "text-charcoal-700 dark:text-charcoal-200 hover:text-accent-500" : "text-white/90 hover:text-white"
                    }`}>
                      Login
                    </button>
                  </Link>
                  <Link to="/login?mode=signup">
                    <button className="px-4 py-2 bg-accent-600 hover:bg-accent-700 text-white rounded-xl text-sm font-medium transition-all duration-200 shadow-lg shadow-accent-500/30">
                      Sign Up
                    </button>
                  </Link>
                </>
              )}
            </div>

            {/* Mobile Menu Button */}
            <div className="flex lg:hidden items-center gap-2">
              <button onClick={toggleDark} className="p-2 text-white/90">
                {darkMode ? <Sun size={18} /> : <Moon size={18} />}
              </button>
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className={`p-2 rounded-lg ${scrolled ? "text-charcoal-700 dark:text-white" : "text-white"}`}
              >
                {mobileOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-white dark:bg-charcoal-950 border-t border-charcoal-100 dark:border-charcoal-800"
            >
              <div className="px-4 py-4 space-y-1">
                {navLinks.map((link) =>
                  link.dropdown ? (
                    <div key={link.label}>
                      <p className="px-3 py-2 text-xs font-semibold text-charcoal-400 uppercase tracking-wider">{link.label}</p>
                      {link.dropdown.map((brand) => (
                        <Link key={brand} to={`/brand/${brand.toLowerCase()}`} className="block px-4 py-2 text-sm text-charcoal-600 dark:text-charcoal-300 hover:text-accent-500 rounded-lg">
                          {brand}
                        </Link>
                      ))}
                    </div>
                  ) : (
                    <Link
                      key={link.label}
                      to={link.path}
                      className={`block px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                        isActive(link.path) ? "bg-accent-50 dark:bg-accent-900/20 text-accent-600" : "text-charcoal-700 dark:text-charcoal-200 hover:bg-charcoal-50 dark:hover:bg-charcoal-800"
                      }`}
                    >
                      {link.label}
                    </Link>
                  )
                )}
                <div className="flex gap-2 pt-2">
                  <Link to="/login" className="flex-1">
                    <button className="w-full py-2.5 border border-accent-500 text-accent-600 rounded-xl text-sm font-medium">Login</button>
                  </Link>
                  <Link to="/login?mode=signup" className="flex-1">
                    <button className="w-full py-2.5 bg-accent-600 text-white rounded-xl text-sm font-medium">Sign Up</button>
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
}
