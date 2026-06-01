import React from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { getCarsByBrand } from "../data/cars";
import CarCard from "../components/CarCard";

const brandMeta = {
  ferrari: { tagline: "The Prancing Horse", desc: "Born on the racetrack, refined for the road. Ferrari represents the pinnacle of Italian automotive artistry.", bg: "https://images.unsplash.com/photo-1592198084033-aade902d1aae?w=1600&q=80", color: "#FF2800" },
  lamborghini: { tagline: "Expect the Unexpected", desc: "Raw power. Aggressive design. Lamborghini builds legends that push the boundaries of what's possible.", bg: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=1600&q=80", color: "#FFD700" },
  mclaren: { tagline: "Pure Speed", desc: "From Formula 1 to the road, McLaren's obsession with aerodynamics and performance defines every vehicle.", bg: "https://images.unsplash.com/photo-1621135802920-133df287f89c?w=1600&q=80", color: "#FF8C00" },
  tesla: { tagline: "Accelerating the Future", desc: "Tesla reimagines the automobile as a connected, sustainable machine without compromising on performance.", bg: "https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=1600&q=80", color: "#E82127" },
  porsche: { tagline: "There is No Substitute", desc: "Porsche combines everyday usability with racetrack performance in machines of extraordinary precision.", bg: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1600&q=80", color: "#D5001C" },
  bugatti: { tagline: "Nothing Else Matters", desc: "Bugatti crafts the fastest, most expensive, and most exclusive automobiles on Earth.", bg: "https://images.unsplash.com/photo-1566473965997-3de9c817e938?w=1600&q=80", color: "#0047AB" },
  "rolls royce": { tagline: "The Best Car in the World", desc: "Handcrafted at Goodwood, every Rolls-Royce is a bespoke work of art tailored to its owner.", bg: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1600&q=80", color: "#C0C0C0" },
  mercedes: { tagline: "The Best or Nothing", desc: "Mercedes-AMG fuses luxury with performance, creating vehicles of exceptional refinement and power.", bg: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=1600&q=80", color: "#C0272D" },
};

export default function BrandPage() {
  const { brand } = useParams();
  const cars = getCarsByBrand(brand);
  const meta = brandMeta[brand.toLowerCase()] || { tagline: "Premium Collection", desc: "Explore our selection.", bg: "", color: "#3b82f6" };
  const displayName = brand.split(" ").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");

  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <div className="relative h-64 sm:h-80 overflow-hidden">
        {meta.bg && <img src={meta.bg} alt={brand} className="w-full h-full object-cover" />}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
        <div className="absolute inset-0 flex items-center px-4 sm:px-8 lg:px-16">
          <div>
            <Link to="/cars" className="flex items-center gap-2 text-white/60 text-sm mb-4 hover:text-white transition-colors">
              <ArrowLeft size={14} /> All Cars
            </Link>
            <motion.div initial={{ x: -50, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.7 }}>
              <p className="font-mono text-xs uppercase tracking-widest mb-1" style={{ color: meta.color }}>{meta.tagline}</p>
              <h1 className="font-display text-5xl sm:text-6xl font-bold text-white">{displayName}</h1>
              <p className="text-white/60 mt-2 max-w-lg text-sm">{meta.desc}</p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Cars Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {cars.length === 0 ? (
          <div className="text-center py-24">
            <p className="text-charcoal-500 text-xl">No cars available for this brand yet.</p>
            <Link to="/cars"><button className="mt-4 px-6 py-3 bg-accent-600 text-white rounded-xl text-sm font-medium">Browse All Cars</button></Link>
          </div>
        ) : (
          <>
            <div className="flex items-center justify-between mb-8">
              <p className="text-charcoal-500 dark:text-charcoal-400 text-sm">{cars.length} models available</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {cars.map((car, i) => <CarCard key={car.id} car={car} index={i} />)}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
