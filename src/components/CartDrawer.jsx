import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ShoppingCart, Trash2 } from "lucide-react";
import { useApp } from "../context/AppContext";
import { Link } from "react-router-dom";

export default function CartDrawer() {
  const [open, setOpen] = useState(false);
  const { cart, removeFromCart } = useApp();

  useEffect(() => {
    const handler = () => setOpen(o => !o);
    window.addEventListener("toggle-cart", handler);
    return () => window.removeEventListener("toggle-cart", handler);
  }, []);

  const total = cart.reduce((sum, c) => sum + c.price, 0);

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 z-[60]"
            onClick={() => setOpen(false)}
          />
          <motion.aside
            initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25 }}
            className="fixed right-0 top-0 h-full w-full sm:w-96 bg-white dark:bg-charcoal-900 z-[70] shadow-2xl flex flex-col"
          >
            <div className="flex items-center justify-between p-6 border-b border-charcoal-100 dark:border-charcoal-800">
              <div className="flex items-center gap-3">
                <ShoppingCart size={20} className="text-accent-500" />
                <h2 className="font-display text-xl font-semibold">Your Garage</h2>
              </div>
              <button onClick={() => setOpen(false)} className="p-2 rounded-lg hover:bg-charcoal-100 dark:hover:bg-charcoal-800">
                <X size={18} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6 space-y-4">
              {cart.length === 0 ? (
                <div className="text-center py-16">
                  <ShoppingCart size={48} className="mx-auto text-charcoal-300 dark:text-charcoal-600 mb-4" />
                  <p className="text-charcoal-500 dark:text-charcoal-400">Your garage is empty</p>
                  <Link to="/cars" onClick={() => setOpen(false)}>
                    <button className="mt-4 px-6 py-2.5 bg-accent-600 text-white rounded-xl text-sm font-medium">Browse Cars</button>
                  </Link>
                </div>
              ) : (
                cart.map((car) => (
                  <motion.div key={car.id} layout initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                    className="flex gap-4 p-4 rounded-2xl bg-charcoal-50 dark:bg-charcoal-800">
                    <img src={car.images[0]} alt={car.model} className="w-24 h-16 object-cover rounded-xl" />
                    <div className="flex-1 min-w-0">
                      <p className="text-xs text-accent-500 font-medium">{car.brand}</p>
                      <p className="font-medium text-sm truncate">{car.model}</p>
                      <p className="text-accent-600 font-bold text-sm">${car.price.toLocaleString()}</p>
                    </div>
                    <button onClick={() => removeFromCart(car.id)} className="p-1.5 text-charcoal-400 hover:text-red-500 transition-colors">
                      <Trash2 size={16} />
                    </button>
                  </motion.div>
                ))
              )}
            </div>

            {cart.length > 0 && (
              <div className="p-6 border-t border-charcoal-100 dark:border-charcoal-800 space-y-4">
                <div className="flex justify-between font-semibold">
                  <span>Total</span>
                  <span className="text-accent-600">${total.toLocaleString()}</span>
                </div>
                <button className="w-full py-3.5 bg-accent-600 hover:bg-accent-700 text-white rounded-xl font-semibold transition-colors">
                  Proceed to Checkout
                </button>
              </div>
            )}
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
