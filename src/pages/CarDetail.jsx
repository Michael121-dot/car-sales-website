import React, { useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, ShoppingCart, Zap, Gauge, Calendar, Fuel, Settings, ChevronLeft, ChevronRight, Star, ArrowLeft } from "lucide-react";
import { carsData, getSimilarCars } from "../data/cars";
import { useApp } from "../context/AppContext";
import CarCard from "../components/CarCard";

export default function CarDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const car = carsData.find(c => c.id === Number(id));
  const { user, toggleWishlist, isInWishlist, addToCart, isInCart } = useApp();
  const [imgIdx, setImgIdx] = useState(0);
  const [selectedColor, setSelectedColor] = useState(0);
  const [showLoginPrompt, setShowLoginPrompt] = useState(false);

  if (!car) return (
    <div className="min-h-screen pt-32 flex items-center justify-center">
      <div className="text-center">
        <p className="text-2xl font-display text-charcoal-500">Car not found</p>
        <Link to="/cars"><button className="mt-4 px-6 py-2.5 bg-accent-600 text-white rounded-xl">Browse Cars</button></Link>
      </div>
    </div>
  );

  const similar = getSimilarCars(car);
  const inWishlist = isInWishlist(car.id);
  const inCart = isInCart(car.id);

  const handlePurchase = () => {
    if (!user) { setShowLoginPrompt(true); return; }
    addToCart(car);
  };

  const specs = [
    { icon: Zap, label: "Horsepower", value: `${car.horsepower} hp` },
    { icon: Gauge, label: "Top Speed", value: `${car.topSpeed} mph` },
    { icon: Calendar, label: "Year", value: car.year },
    { icon: Fuel, label: "Fuel Type", value: car.fuelType },
    { icon: Settings, label: "Transmission", value: car.transmission },
    { icon: Settings, label: "Category", value: car.category },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Back */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <button onClick={() => navigate(-1)} className="flex items-center gap-2 text-sm text-charcoal-500 hover:text-accent-500 transition-colors">
          <ArrowLeft size={16} /> Back
        </button>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Images */}
          <div>
            <div className="relative rounded-3xl overflow-hidden aspect-[4/3] mb-3">
              <AnimatePresence mode="wait">
                <motion.img
                  key={imgIdx}
                  src={car.images[imgIdx]}
                  alt={car.model}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className="w-full h-full object-cover"
                />
              </AnimatePresence>
              {car.images.length > 1 && (
                <>
                  <button onClick={() => setImgIdx((i) => (i - 1 + car.images.length) % car.images.length)}
                    className="absolute left-4 top-1/2 -translate-y-1/2 p-2.5 bg-black/30 hover:bg-black/50 text-white rounded-full backdrop-blur-sm transition-colors">
                    <ChevronLeft size={18} />
                  </button>
                  <button onClick={() => setImgIdx((i) => (i + 1) % car.images.length)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 p-2.5 bg-black/30 hover:bg-black/50 text-white rounded-full backdrop-blur-sm transition-colors">
                    <ChevronRight size={18} />
                  </button>
                </>
              )}
              {car.isNew && (
                <span className="absolute top-4 left-4 px-3 py-1 bg-accent-600 text-white text-xs font-bold rounded-full">NEW</span>
              )}
            </div>
            {/* Thumbnails */}
            <div className="flex gap-2">
              {car.images.map((img, i) => (
                <button key={i} onClick={() => setImgIdx(i)}
                  className={`flex-1 aspect-[4/3] rounded-xl overflow-hidden border-2 transition-colors ${i === imgIdx ? "border-accent-500" : "border-transparent"}`}>
                  <img src={img} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Info */}
          <div>
            <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-accent-500 font-mono text-sm uppercase tracking-wider font-medium">{car.brand}</span>
                <span className="text-charcoal-300 dark:text-charcoal-600">•</span>
                <span className="text-charcoal-500 text-sm">{car.category}</span>
              </div>
              <h1 className="font-display text-4xl sm:text-5xl font-bold text-charcoal-900 dark:text-white mb-3">{car.model}</h1>

              {/* Rating */}
              <div className="flex items-center gap-2 mb-6">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} className={i < Math.round(car.rating) ? "text-amber-400 fill-current" : "text-charcoal-200"} />
                  ))}
                </div>
                <span className="text-sm text-charcoal-500">{car.rating} ({car.reviews} reviews)</span>
              </div>

              {/* Price */}
              <div className="mb-6">
                {car.discount > 0 ? (
                  <div className="flex items-baseline gap-3">
                    <span className="font-display text-4xl font-bold text-charcoal-900 dark:text-white">
                      ${Math.round(car.price * (1 - car.discount / 100)).toLocaleString()}
                    </span>
                    <span className="text-charcoal-400 line-through text-xl">${car.price.toLocaleString()}</span>
                    <span className="px-2.5 py-1 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 text-sm font-bold rounded-lg">-{car.discount}%</span>
                  </div>
                ) : (
                  <span className="font-display text-4xl font-bold text-charcoal-900 dark:text-white">${car.price.toLocaleString()}</span>
                )}
              </div>

              {/* Description */}
              <p className="text-charcoal-600 dark:text-charcoal-400 leading-relaxed mb-6">{car.description}</p>

              {/* Colors */}
              <div className="mb-6">
                <p className="text-sm font-semibold text-charcoal-700 dark:text-charcoal-200 mb-3">Color Options</p>
                <div className="flex gap-3">
                  {car.colors.map((color, i) => (
                    <button
                      key={i}
                      onClick={() => setSelectedColor(i)}
                      className={`w-8 h-8 rounded-full border-2 transition-all ${selectedColor === i ? "border-accent-500 scale-125" : "border-charcoal-200 dark:border-charcoal-700"}`}
                      style={{ background: color }}
                      title={color}
                    />
                  ))}
                </div>
              </div>

              {/* Engine */}
              <div className="p-4 bg-charcoal-50 dark:bg-charcoal-800 rounded-2xl mb-6">
                <p className="text-xs text-charcoal-500 uppercase tracking-wider mb-1">Engine</p>
                <p className="font-semibold text-charcoal-900 dark:text-white">{car.engine}</p>
              </div>

              {/* Actions */}
              <div className="flex gap-3 mb-8">
                <button
                  onClick={handlePurchase}
                  className={`flex-1 py-4 rounded-xl font-bold text-sm transition-all duration-200 flex items-center justify-center gap-2 ${
                    inCart ? "bg-emerald-500 text-white" : "bg-accent-600 hover:bg-accent-700 text-white shadow-lg shadow-accent-500/30"
                  }`}
                >
                  <ShoppingCart size={18} /> {inCart ? "Added to Cart" : "Add to Cart"}
                </button>
                <button
                  onClick={() => user ? toggleWishlist(car) : setShowLoginPrompt(true)}
                  className={`px-5 py-4 rounded-xl border-2 transition-all duration-200 ${
                    inWishlist ? "border-red-500 bg-red-50 dark:bg-red-900/20 text-red-500" : "border-charcoal-200 dark:border-charcoal-700 hover:border-accent-500"
                  }`}
                >
                  <Heart size={18} fill={inWishlist ? "currentColor" : "none"} />
                </button>
              </div>

              {/* Login Prompt */}
              <AnimatePresence>
                {showLoginPrompt && (
                  <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
                    className="p-4 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-xl mb-6">
                    <p className="text-sm text-amber-700 dark:text-amber-400 mb-2">Please sign in to purchase or save to wishlist.</p>
                    <div className="flex gap-2">
                      <Link to="/login"><button className="px-4 py-2 bg-accent-600 text-white text-xs rounded-lg font-medium">Sign In</button></Link>
                      <Link to="/login?mode=signup"><button className="px-4 py-2 border border-accent-500 text-accent-600 text-xs rounded-lg font-medium">Create Account</button></Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        </div>

        {/* Specifications */}
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-16">
          <h2 className="font-display text-3xl font-bold text-charcoal-900 dark:text-white mb-8">Specifications</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {specs.map((spec) => (
              <div key={spec.label} className="p-5 bg-white dark:bg-charcoal-900 rounded-2xl border border-charcoal-100 dark:border-charcoal-800 text-center hover:border-accent-500/30 transition-colors">
                <div className="w-10 h-10 bg-accent-50 dark:bg-accent-900/30 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <spec.icon size={18} className="text-accent-600" />
                </div>
                <p className="text-xs text-charcoal-500 mb-1">{spec.label}</p>
                <p className="font-bold text-charcoal-900 dark:text-white text-sm">{spec.value}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Similar Cars */}
        {similar.length > 0 && (
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-16">
            <div className="flex items-center justify-between mb-8">
              <h2 className="font-display text-3xl font-bold text-charcoal-900 dark:text-white">
                More from {car.brand}
              </h2>
              <Link to={`/brand/${car.brand.toLowerCase()}`} className="text-accent-500 hover:text-accent-600 text-sm font-medium">
                View All →
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {similar.map((c, i) => <CarCard key={c.id} car={c} index={i} />)}
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}
