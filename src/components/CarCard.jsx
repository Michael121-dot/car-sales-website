import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Heart, Zap, Gauge, ShoppingCart } from "lucide-react";
import { useApp } from "../context/AppContext";

export default function CarCard({ car, index = 0 }) {
  const { toggleWishlist, isInWishlist, addToCart, isInCart } = useApp();
  const inWishlist = isInWishlist(car.id);
  const inCart = isInCart(car.id);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -6 }}
      className="group relative bg-white dark:bg-charcoal-900 rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl hover:shadow-accent-500/10 transition-all duration-500 border border-charcoal-100 dark:border-charcoal-800"
    >
      {/* Image */}
      <div className="relative overflow-hidden h-52">
        <motion.img
          src={car.images[0]}
          alt={`${car.brand} ${car.model}`}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Badges */}
        <div className="absolute top-3 left-3 flex gap-2">
          {car.isNew && (
            <span className="px-2.5 py-1 bg-accent-600 text-white text-xs font-semibold rounded-full">NEW</span>
          )}
          {car.discount > 0 && (
            <span className="px-2.5 py-1 bg-emerald-500 text-white text-xs font-semibold rounded-full">-{car.discount}%</span>
          )}
        </div>

        {/* Wishlist Button */}
        <button
          onClick={(e) => { e.preventDefault(); toggleWishlist(car); }}
          className={`absolute top-3 right-3 p-2.5 rounded-full backdrop-blur-sm transition-all duration-200 ${
            inWishlist ? "bg-red-500 text-white" : "bg-white/20 text-white hover:bg-white/40"
          }`}
        >
          <Heart size={16} fill={inWishlist ? "currentColor" : "none"} />
        </button>
      </div>

      {/* Content */}
      <div className="p-5">
        <div className="flex items-start justify-between mb-2">
          <div>
            <p className="text-xs font-semibold text-accent-500 uppercase tracking-wider">{car.brand}</p>
            <h3 className="font-display text-xl font-semibold text-charcoal-900 dark:text-white mt-0.5">{car.model}</h3>
          </div>
          <div className="text-right">
            {car.discount > 0 ? (
              <>
                <p className="text-xs text-charcoal-400 line-through">${car.price.toLocaleString()}</p>
                <p className="text-lg font-bold text-emerald-500">${Math.round(car.price * (1 - car.discount / 100)).toLocaleString()}</p>
              </>
            ) : (
              <p className="text-lg font-bold text-accent-600">${car.price.toLocaleString()}</p>
            )}
          </div>
        </div>

        {/* Specs */}
        <div className="flex gap-4 mt-3 mb-4">
          <div className="flex items-center gap-1.5 text-xs text-charcoal-500 dark:text-charcoal-400">
            <Zap size={13} className="text-accent-500" />
            <span>{car.horsepower} hp</span>
          </div>
          <div className="flex items-center gap-1.5 text-xs text-charcoal-500 dark:text-charcoal-400">
            <Gauge size={13} className="text-accent-500" />
            <span>{car.topSpeed} mph</span>
          </div>
          <div className="text-xs text-charcoal-500 dark:text-charcoal-400">
            <span>{car.year}</span>
          </div>
        </div>

        {/* Stars */}
        <div className="flex items-center gap-1.5 mb-4">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className={`w-3.5 h-3.5 ${i < Math.round(car.rating) ? "text-amber-400" : "text-charcoal-200 dark:text-charcoal-700"}`} fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <span className="text-xs text-charcoal-500">({car.reviews})</span>
        </div>

        {/* Actions */}
        <div className="flex gap-2">
          <Link to={`/cars/${car.id}`} className="flex-1">
            <button className="w-full py-2.5 border border-accent-500 text-accent-600 dark:text-accent-400 rounded-xl text-sm font-semibold hover:bg-accent-50 dark:hover:bg-accent-900/20 transition-colors">
              View Details
            </button>
          </Link>
          <button
            onClick={() => addToCart(car)}
            className={`px-3 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 ${
              inCart ? "bg-emerald-500 text-white" : "bg-accent-600 hover:bg-accent-700 text-white"
            }`}
          >
            <ShoppingCart size={16} />
          </button>
        </div>
      </div>
    </motion.div>
  );
}
