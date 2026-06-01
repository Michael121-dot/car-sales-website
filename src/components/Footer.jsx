import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Youtube, ArrowRight } from "lucide-react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) { setSubscribed(true); setEmail(""); }
  };

  return (
    <footer className="bg-charcoal-950 text-charcoal-300">
      {/* Main */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-accent-400 to-accent-700 rounded-lg flex items-center justify-center">
                <span className="text-white font-display font-bold">L</span>
              </div>
              <span className="font-display text-xl text-white">Luxe<span className="text-accent-400">Drive</span></span>
            </div>
            <p className="text-sm leading-relaxed mb-6">
              The premier destination for luxury and exotic automobiles. Curated collections from the world's finest automotive brands.
            </p>
            <div className="flex gap-3">
              {[Facebook, Twitter, Instagram, Youtube].map((Icon, i) => (
                <motion.a key={i} href="#" whileHover={{ y: -2 }}
                  className="w-9 h-9 rounded-lg bg-charcoal-800 hover:bg-accent-600 flex items-center justify-center transition-colors">
                  <Icon size={16} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-2.5">
              {[["Home", "/"], ["Cars", "/cars"], ["Contact", "/contact"], ["Login", "/login"]].map(([label, path]) => (
                <li key={label}>
                  <Link to={path} className="text-sm hover:text-accent-400 transition-colors flex items-center gap-1.5 group">
                    <ArrowRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity -ml-3 group-hover:ml-0" />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Collections */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Collections</h4>
            <ul className="space-y-2.5">
              {["Ferrari", "Lamborghini", "McLaren", "Porsche", "Tesla", "Bugatti"].map((brand) => (
                <li key={brand}>
                  <Link to={`/brand/${brand.toLowerCase()}`} className="text-sm hover:text-accent-400 transition-colors flex items-center gap-1.5 group">
                    <ArrowRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity -ml-3 group-hover:ml-0" />
                    {brand}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Contact Us</h4>
            <ul className="space-y-3 mb-6">
              <li className="flex items-center gap-2.5 text-sm">
                <Phone size={14} className="text-accent-500 shrink-0" />
                <span>+229 0144 090 743</span>
              </li>
              <li className="flex items-center gap-2.5 text-sm">
                <Mail size={14} className="text-accent-500 shrink-0" />
                <span>contact@luxedrive.com</span>
              </li>
              <li className="flex items-start gap-2.5 text-sm">
                <MapPin size={14} className="text-accent-500 shrink-0 mt-0.5" />
                <span>Cotonou, Benin Republic</span>
              </li>
            </ul>

            <h4 className="text-white font-semibold mb-3 text-sm uppercase tracking-wider">Newsletter</h4>
            {subscribed ? (
              <p className="text-emerald-400 text-sm">Thank you for subscribing!</p>
            ) : (
              <form onSubmit={handleSubscribe} className="flex gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email"
                  className="flex-1 px-3 py-2 bg-charcoal-800 border border-charcoal-700 rounded-lg text-sm text-white placeholder-charcoal-500 focus:outline-none focus:border-accent-500 transition-colors"
                />
                <button type="submit" className="px-3 py-2 bg-accent-600 hover:bg-accent-700 text-white rounded-lg transition-colors">
                  <ArrowRight size={16} />
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-charcoal-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-charcoal-500">© 2024 LuxeDrive. All rights reserved.</p>
          <div className="flex gap-6 text-xs">
            <a href="#" className="hover:text-accent-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-accent-400 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-accent-400 transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
