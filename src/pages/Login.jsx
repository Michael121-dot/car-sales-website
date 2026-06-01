import React, { useState, useEffect } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Eye, EyeOff, ArrowRight, User, Mail, Lock, Check } from "lucide-react";
import { useApp } from "../context/AppContext";

export default function Login() {
  const [params] = useSearchParams();
  const [isSignup, setIsSignup] = useState(params.get("mode") === "signup");
  const [form, setForm] = useState({ name: "", email: "", password: "", confirm: "" });
  const [showPass, setShowPass] = useState(false);
  const [errors, setErrors] = useState({});
  const { login, user } = useApp();
  const navigate = useNavigate();

  useEffect(() => { if (user) navigate("/"); }, [user]);

  const validate = () => {
    const e = {};
    if (!form.email) e.email = "Email required";
    if (!form.password || form.password.length < 6) e.password = "Min 6 characters";
    if (isSignup && !form.name) e.name = "Name required";
    if (isSignup && form.password !== form.confirm) e.confirm = "Passwords don't match";
    return e;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    login({ name: form.name || form.email.split("@")[0], email: form.email });
    navigate("/");
  };

  const handleGoogle = () => {
    login({ name: "Google User", email: "user@gmail.com" });
    navigate("/");
  };

  return (
    <div className="min-h-screen flex">
      {/* Left - Image Panel (hidden on mobile) */}
      <div className="hidden lg:block lg:w-1/2 relative overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1592198084033-aade902d1aae?w=1200&q=90"
          alt="Luxury Car"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/80 to-accent-900/60" />
        <div className="absolute inset-0 flex flex-col items-center justify-center p-16 text-white">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
            <div className="flex items-center gap-3 mb-16">
              <div className="w-10 h-10 bg-gradient-to-br from-accent-400 to-accent-700 rounded-xl flex items-center justify-center">
                <span className="font-display font-bold text-xl">L</span>
              </div>
              <span className="font-display text-2xl">Luxe<span className="text-accent-400">Drive</span></span>
            </div>
            <h2 className="font-display text-5xl font-bold leading-tight mb-4">
              The World's Finest<br />Cars Await You
            </h2>
            <p className="text-white/60 text-lg mb-12">Access exclusive deals, save your favorites, and purchase with confidence.</p>
            <div className="space-y-3">
              {["Curated luxury inventory", "Secure, verified transactions", "White-glove delivery worldwide", "Dedicated concierge service"].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="w-5 h-5 bg-accent-600 rounded-full flex items-center justify-center shrink-0">
                    <Check size={11} />
                  </div>
                  <span className="text-white/80 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Right - Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-6 sm:p-12 bg-white dark:bg-charcoal-950">
        <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} className="w-full max-w-md">
          {/* Mobile Logo */}
          <div className="flex items-center gap-2 mb-8 lg:hidden">
            <div className="w-8 h-8 bg-gradient-to-br from-accent-400 to-accent-700 rounded-lg flex items-center justify-center">
              <span className="font-display font-bold text-white">L</span>
            </div>
            <span className="font-display text-xl text-charcoal-900 dark:text-white">Luxe<span className="text-gradient">Drive</span></span>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={isSignup ? "signup" : "login"}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <h1 className="font-display text-3xl sm:text-4xl font-bold text-charcoal-900 dark:text-white mb-2">
                {isSignup ? "Create Account" : "Welcome Back"}
              </h1>
              <p className="text-charcoal-500 dark:text-charcoal-400 mb-8 text-sm">
                {isSignup ? "Join LuxeDrive and explore the world's finest automobiles" : "Sign in to your LuxeDrive account"}
              </p>

              {/* Toggle */}
              <div className="flex bg-charcoal-100 dark:bg-charcoal-800 rounded-xl p-1 mb-8">
                {["Login", "Sign Up"].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => { setIsSignup(tab === "Sign Up"); setErrors({}); }}
                    className={`flex-1 py-2.5 rounded-lg text-sm font-medium transition-all ${
                      (tab === "Sign Up") === isSignup
                        ? "bg-white dark:bg-charcoal-700 shadow text-charcoal-900 dark:text-white"
                        : "text-charcoal-500 dark:text-charcoal-400"
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>

              {/* Social */}
              <button
                onClick={handleGoogle}
                className="w-full py-3.5 border border-charcoal-200 dark:border-charcoal-700 rounded-xl flex items-center justify-center gap-3 mb-6 hover:bg-charcoal-50 dark:hover:bg-charcoal-800 transition-colors text-sm font-medium text-charcoal-700 dark:text-charcoal-200"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
                Continue with Google
              </button>

              <div className="relative flex items-center mb-6">
                <div className="flex-1 h-px bg-charcoal-200 dark:bg-charcoal-700" />
                <span className="px-4 text-xs text-charcoal-400">or</span>
                <div className="flex-1 h-px bg-charcoal-200 dark:bg-charcoal-700" />
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                {isSignup && (
                  <div>
                    <label className="block text-xs font-medium text-charcoal-600 dark:text-charcoal-300 mb-1.5">Full Name</label>
                    <div className="relative">
                      <User size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-charcoal-400" />
                      <input
                        type="text"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        placeholder="John Smith"
                        className={`w-full pl-11 pr-4 py-3.5 bg-charcoal-50 dark:bg-charcoal-800 border rounded-xl text-sm focus:outline-none focus:border-accent-500 transition-colors ${errors.name ? "border-red-400" : "border-charcoal-200 dark:border-charcoal-700"}`}
                      />
                    </div>
                    {errors.name && <p className="text-xs text-red-500 mt-1">{errors.name}</p>}
                  </div>
                )}

                <div>
                  <label className="block text-xs font-medium text-charcoal-600 dark:text-charcoal-300 mb-1.5">Email Address</label>
                  <div className="relative">
                    <Mail size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-charcoal-400" />
                    <input
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="you@example.com"
                      className={`w-full pl-11 pr-4 py-3.5 bg-charcoal-50 dark:bg-charcoal-800 border rounded-xl text-sm focus:outline-none focus:border-accent-500 transition-colors ${errors.email ? "border-red-400" : "border-charcoal-200 dark:border-charcoal-700"}`}
                    />
                  </div>
                  {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email}</p>}
                </div>

                <div>
                  <label className="block text-xs font-medium text-charcoal-600 dark:text-charcoal-300 mb-1.5">Password</label>
                  <div className="relative">
                    <Lock size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-charcoal-400" />
                    <input
                      type={showPass ? "text" : "password"}
                      value={form.password}
                      onChange={(e) => setForm({ ...form, password: e.target.value })}
                      placeholder="••••••••"
                      className={`w-full pl-11 pr-11 py-3.5 bg-charcoal-50 dark:bg-charcoal-800 border rounded-xl text-sm focus:outline-none focus:border-accent-500 transition-colors ${errors.password ? "border-red-400" : "border-charcoal-200 dark:border-charcoal-700"}`}
                    />
                    <button type="button" onClick={() => setShowPass(!showPass)} className="absolute right-4 top-1/2 -translate-y-1/2 text-charcoal-400">
                      {showPass ? <EyeOff size={16} /> : <Eye size={16} />}
                    </button>
                  </div>
                  {errors.password && <p className="text-xs text-red-500 mt-1">{errors.password}</p>}
                </div>

                {isSignup && (
                  <div>
                    <label className="block text-xs font-medium text-charcoal-600 dark:text-charcoal-300 mb-1.5">Confirm Password</label>
                    <div className="relative">
                      <Lock size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-charcoal-400" />
                      <input
                        type="password"
                        value={form.confirm}
                        onChange={(e) => setForm({ ...form, confirm: e.target.value })}
                        placeholder="••••••••"
                        className={`w-full pl-11 pr-4 py-3.5 bg-charcoal-50 dark:bg-charcoal-800 border rounded-xl text-sm focus:outline-none focus:border-accent-500 transition-colors ${errors.confirm ? "border-red-400" : "border-charcoal-200 dark:border-charcoal-700"}`}
                      />
                    </div>
                    {errors.confirm && <p className="text-xs text-red-500 mt-1">{errors.confirm}</p>}
                  </div>
                )}

                {!isSignup && (
                  <div className="flex justify-end">
                    <a href="#" className="text-xs text-accent-500 hover:text-accent-600">Forgot password?</a>
                  </div>
                )}

                <button
                  type="submit"
                  className="w-full py-4 bg-accent-600 hover:bg-accent-700 text-white rounded-xl font-bold flex items-center justify-center gap-2 transition-all shadow-lg shadow-accent-500/30 mt-2"
                >
                  {isSignup ? "Create Account" : "Sign In"} <ArrowRight size={16} />
                </button>
              </form>

              <p className="text-center text-sm text-charcoal-500 dark:text-charcoal-400 mt-6">
                {isSignup ? "Already have an account?" : "Don't have an account?"}{" "}
                <button onClick={() => { setIsSignup(!isSignup); setErrors({}); }} className="text-accent-500 font-medium hover:text-accent-600">
                  {isSignup ? "Sign In" : "Sign Up"}
                </button>
              </p>
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
}
