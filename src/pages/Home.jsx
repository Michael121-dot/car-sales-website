import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, ArrowRight, Shield, Truck, CreditCard, Star, Award, Clock, Zap } from "lucide-react";
import { carsData, getNewArrivals, getFeaturedCar } from "../data/cars";
import CarCard from "../components/CarCard";

// Hero Slides
const heroSlides = [
  {
    id: 1, brand: "Ferrari", model: "SF90 Stradale", tagline: "986 Horses. Zero Limits.",
    image: "https://images.unsplash.com/photo-1592198084033-aade902d1aae?w=1600&q=90",
    cta: "Explore Ferrari", link: "/brand/ferrari", accent: "#FF2800"
  },
  {
    id: 2, brand: "Lamborghini", model: "Revuelto", tagline: "1,001 HP. Pure Fury.",
    image: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=1600&q=90",
    cta: "Explore Lamborghini", link: "/brand/lamborghini", accent: "#FFD700"
  },
  {
    id: 3, brand: "McLaren", model: "720S", tagline: "Engineered to Obsess.",
    image: "https://images.unsplash.com/photo-1621135802920-133df287f89c?w=1600&q=90",
    cta: "Explore McLaren", link: "/brand/mclaren", accent: "#FF8C00"
  },
  {
    id: 4, brand: "Bugatti", model: "Chiron Super Sport", tagline: "273 MPH. Absolute Power.",
    image: "https://images.unsplash.com/photo-1566473965997-3de9c817e938?w=1600&q=90",
    cta: "Explore Bugatti", link: "/brand/bugatti", accent: "#0047AB"
  },
  {
    id: 5, brand: "Rolls Royce", model: "Phantom", tagline: "Above & Beyond Luxury.",
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1600&q=90",
    cta: "Explore Rolls Royce", link: "/brand/rolls royce", accent: "#C0C0C0"
  },
];

const brandCollections = [
  { name: "Ferrari", image: "https://images.unsplash.com/photo-1592198084033-aade902d1aae?w=600&q=80", count: 3, color: "#FF2800" },
  { name: "Lamborghini", image: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=600&q=80", count: 3, color: "#FFD700" },
  { name: "McLaren", image: "https://images.unsplash.com/photo-1621135802920-133df287f89c?w=600&q=80", count: 2, color: "#FF8C00" },
  { name: "Tesla", image: "https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=600&q=80", count: 3, color: "#E82127" },
  { name: "Porsche", image: "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?w=600&q=80", count: 3, color: "#D5001C" },
];

const whyUs = [
  { icon: Award, title: "Premium Quality", desc: "Every car is thoroughly inspected and certified by our expert team." },
  { icon: Shield, title: "Verified Dealers", desc: "All our dealers are background-checked and verified for authenticity." },
  { icon: Truck, title: "Fast Delivery", desc: "White-glove delivery service directly to your location worldwide." },
  { icon: CreditCard, title: "Secure Payments", desc: "End-to-end encrypted transactions with multiple payment options." },
  { icon: Star, title: "Warranty Support", desc: "Comprehensive warranty packages and dedicated after-sales service." },
];

function CountdownTimer({ endDate }) {
  const [time, setTime] = useState({ d: 0, h: 0, m: 0, s: 0 });
  useEffect(() => {
    const tick = () => {
      const diff = Math.max(0, endDate - Date.now());
      setTime({
        d: Math.floor(diff / 86400000),
        h: Math.floor((diff % 86400000) / 3600000),
        m: Math.floor((diff % 3600000) / 60000),
        s: Math.floor((diff % 60000) / 1000),
      });
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [endDate]);
  return (
    <div className="flex gap-3">
      {[["d", time.d], ["h", time.h], ["m", time.m], ["s", time.s]].map(([label, val]) => (
        <div key={label} className="text-center">
          <div className="w-14 h-14 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center border border-white/20">
            <span className="text-2xl font-bold text-white font-mono">{String(val).padStart(2, "0")}</span>
          </div>
          <p className="text-xs text-white/60 mt-1 uppercase">{label}</p>
        </div>
      ))}
    </div>
  );
}

export default function Home() {
  const [slide, setSlide] = useState(0);
  const [direction, setDirection] = useState(1);
  const navigate = useNavigate();
  const newArrivals = getNewArrivals();
  const featuredCar = getFeaturedCar();
  const discountEnd = Date.now() + 3 * 86400000 + 12 * 3600000;

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setSlide((s) => (s + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const goTo = (i) => {
    setDirection(i > slide ? 1 : -1);
    setSlide(i);
  };
  const prev = () => { setDirection(-1); setSlide((s) => (s - 1 + heroSlides.length) % heroSlides.length); };
  const next = () => { setDirection(1); setSlide((s) => (s + 1) % heroSlides.length); };

  const current = heroSlides[slide];

  return (
    <div className="overflow-hidden">
      {/* HERO */}
      <section className="relative h-screen min-h-[600px] overflow-hidden">
        <AnimatePresence mode="sync" custom={direction}>
          <motion.div
            key={slide}
            custom={direction}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <img src={current.image} alt={current.model} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          </motion.div>
        </AnimatePresence>

        {/* Hero Text */}
        <div className="relative z-10 h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <AnimatePresence mode="wait">
              <motion.div key={slide} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.6 }}>
                {/* Brand from left, Model from right */}
                <div className="overflow-hidden mb-2">
                  <motion.p
                    initial={{ x: -80, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.7, delay: 0.1 }}
                    className="text-accent-400 font-mono text-sm uppercase tracking-[0.3em] font-medium"
                  >
                    {current.brand}
                  </motion.p>
                </div>
                <div className="flex flex-wrap items-end gap-x-4 mb-4">
                  <div className="overflow-hidden">
                    <motion.h1
                      initial={{ x: -100, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.8, delay: 0.2 }}
                      className="font-display text-5xl sm:text-6xl lg:text-8xl font-bold text-white leading-none"
                    >
                      {current.model.split(" ")[0]}
                    </motion.h1>
                  </div>
                  <div className="overflow-hidden">
                    <motion.h1
                      initial={{ x: 100, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.8, delay: 0.2 }}
                      className="font-display text-5xl sm:text-6xl lg:text-8xl font-bold text-white leading-none"
                    >
                      {current.model.split(" ").slice(1).join(" ")}
                    </motion.h1>
                  </div>
                </div>
                <motion.p
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.7, delay: 0.4 }}
                  className="text-white/70 text-lg sm:text-xl font-light mb-8 max-w-lg"
                >
                  {current.tagline}
                </motion.p>
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.7, delay: 0.5 }}
                  className="flex flex-wrap gap-4"
                >
                  <button
                    onClick={() => navigate(current.link)}
                    className="group px-8 py-4 bg-accent-600 hover:bg-accent-700 text-white rounded-xl font-semibold text-sm transition-all duration-300 flex items-center gap-2 shadow-lg shadow-accent-500/30"
                  >
                    {current.cta}
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                  <button
                    onClick={() => navigate("/cars")}
                    className="px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white rounded-xl font-semibold text-sm border border-white/30 transition-all duration-300"
                  >
                    View All Deals
                  </button>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Slide Controls */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-4 z-10">
          <button onClick={prev} className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm transition-colors">
            <ChevronLeft size={18} />
          </button>
          <div className="flex gap-2">
            {heroSlides.map((_, i) => (
              <button key={i} onClick={() => goTo(i)} className={`transition-all duration-300 rounded-full ${i === slide ? "w-8 h-2 bg-accent-400" : "w-2 h-2 bg-white/40 hover:bg-white/60"}`} />
            ))}
          </div>
          <button onClick={next} className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm transition-colors">
            <ChevronRight size={18} />
          </button>
        </div>

        {/* Slide counter */}
        <div className="absolute top-1/2 right-6 -translate-y-1/2 hidden lg:flex flex-col gap-3 z-10">
          {heroSlides.map((_, i) => (
            <button key={i} onClick={() => goTo(i)} className={`w-1 rounded-full transition-all duration-300 ${i === slide ? "h-12 bg-accent-400" : "h-4 bg-white/30"}`} />
          ))}
        </div>
      </section>

      {/* STATS BAR */}
      <section className="bg-accent-600 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center text-white">
            {[["500+", "Premium Cars"], ["50+", "Luxury Brands"], ["10K+", "Happy Clients"], ["15+", "Years Experience"]].map(([num, label]) => (
              <motion.div key={label} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
                <div className="text-2xl font-display font-bold">{num}</div>
                <div className="text-xs text-white/70 mt-1">{label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* NEW ARRIVALS */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="flex items-end justify-between mb-12">
          <div>
            <p className="text-accent-500 font-mono text-sm uppercase tracking-widest mb-2">Fresh Inventory</p>
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-charcoal-900 dark:text-white">New Arrivals</h2>
          </div>
          <Link to="/cars" className="hidden sm:flex items-center gap-2 text-accent-500 hover:text-accent-600 font-medium text-sm group">
            View All <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {newArrivals.map((car, i) => <CarCard key={car.id} car={car} index={i} />)}
        </div>
        <div className="mt-8 text-center sm:hidden">
          <Link to="/cars">
            <button className="px-6 py-3 border border-accent-500 text-accent-500 rounded-xl text-sm font-medium hover:bg-accent-50 dark:hover:bg-accent-900/20 transition-colors">
              View All Cars
            </button>
          </Link>
        </div>
      </section>

      {/* FEATURED COLLECTIONS */}
      <section className="py-20 bg-charcoal-50 dark:bg-charcoal-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <p className="text-accent-500 font-mono text-sm uppercase tracking-widest mb-2">Exclusive</p>
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-charcoal-900 dark:text-white">Featured Collections</h2>
            <p className="text-charcoal-500 dark:text-charcoal-400 mt-3 max-w-lg mx-auto">Curated selections from the world's most iconic automotive brands</p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {brandCollections.map((b, i) => (
              <motion.div
                key={b.name}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -4 }}
                className={`group relative overflow-hidden rounded-3xl cursor-pointer ${i === 0 ? "sm:col-span-2 lg:col-span-1" : ""} h-64`}
                onClick={() => navigate(`/brand/${b.name.toLowerCase()}`)}
              >
                <img src={b.image} alt={b.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="flex items-end justify-between">
                    <div>
                      <p className="text-white/60 text-xs mb-1">{b.count} Models Available</p>
                      <h3 className="font-display text-2xl font-bold text-white">{b.name}</h3>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:bg-accent-600 transition-colors">
                      <ArrowRight size={16} className="text-white" />
                    </div>
                  </div>
                </div>
                <div className="absolute top-4 right-4">
                  <div className="w-2 h-2 rounded-full" style={{ background: b.color }} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* DISCOUNT SECTION */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative rounded-3xl overflow-hidden"
          >
            <img src={featuredCar.images[0]} alt={featuredCar.model} className="w-full h-[500px] object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-transparent" />
            <div className="absolute inset-0 flex items-center">
              <div className="px-8 sm:px-12 lg:px-16 max-w-2xl">
                <span className="inline-block px-4 py-1.5 bg-red-500 text-white text-xs font-bold rounded-full uppercase tracking-wider mb-4">
                  Limited Time Offer
                </span>
                <p className="text-accent-400 font-mono text-sm uppercase tracking-wider mb-2">{featuredCar.brand}</p>
                <h2 className="font-display text-4xl sm:text-5xl font-bold text-white mb-2">{featuredCar.model}</h2>
                <div className="flex items-baseline gap-3 mb-6">
                  <span className="text-3xl font-bold text-white">${Math.round(featuredCar.price * (1 - featuredCar.discount / 100)).toLocaleString()}</span>
                  <span className="text-charcoal-400 line-through">${featuredCar.price.toLocaleString()}</span>
                  <span className="px-2 py-0.5 bg-emerald-500 text-white text-sm font-bold rounded-lg">-{featuredCar.discount}%</span>
                </div>
                <div className="mb-8">
                  <p className="text-white/60 text-xs uppercase tracking-wider mb-3 font-mono">Offer Ends In</p>
                  <CountdownTimer endDate={discountEnd} />
                </div>
                <div className="flex gap-3">
                  <Link to={`/cars/${featuredCar.id}`}>
                    <button className="group px-8 py-4 bg-accent-600 hover:bg-accent-700 text-white rounded-xl font-semibold flex items-center gap-2 transition-all shadow-lg shadow-accent-500/30">
                      Claim Offer <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-20 bg-charcoal-50 dark:bg-charcoal-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
            <p className="text-accent-500 font-mono text-sm uppercase tracking-widest mb-2">Our Promise</p>
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-charcoal-900 dark:text-white">Why Choose LuxeDrive</h2>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {whyUs.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -4 }}
                className="group p-6 bg-white dark:bg-charcoal-800 rounded-2xl border border-charcoal-100 dark:border-charcoal-700 hover:border-accent-500/30 hover:shadow-lg transition-all duration-300 text-center"
              >
                <div className="w-12 h-12 bg-accent-50 dark:bg-accent-900/30 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-accent-600 transition-colors">
                  <item.icon size={20} className="text-accent-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-semibold text-charcoal-900 dark:text-white mb-2 text-sm">{item.title}</h3>
                <p className="text-charcoal-500 dark:text-charcoal-400 text-xs leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* MORE CARS SECTION */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="flex items-end justify-between mb-12">
          <div>
            <p className="text-accent-500 font-mono text-sm uppercase tracking-widest mb-2">Top Picks</p>
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-charcoal-900 dark:text-white">Featured Cars</h2>
          </div>
          <Link to="/cars" className="hidden sm:flex items-center gap-2 text-accent-500 hover:text-accent-600 font-medium text-sm group">
            View All <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {carsData.filter(c => c.isFeatured).slice(0, 6).map((car, i) => (
            <CarCard key={car.id} car={car} index={i} />
          ))}
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="py-20 bg-gradient-to-br from-accent-600 to-accent-800 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-white blur-3xl" />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-white mb-4">Ready to Drive Your Dream?</h2>
            <p className="text-white/70 text-lg mb-8 max-w-lg mx-auto">Join thousands of satisfied customers who found their perfect luxury car through LuxeDrive.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/cars">
                <button className="group px-10 py-4 bg-white text-accent-700 rounded-xl font-bold transition-all hover:shadow-2xl hover:scale-105 flex items-center gap-2 mx-auto">
                  Browse All Cars <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
              <Link to="/contact">
                <button className="px-10 py-4 border-2 border-white/50 text-white rounded-xl font-bold hover:bg-white/10 transition-all flex items-center gap-2 mx-auto">
                  Talk to an Expert
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
