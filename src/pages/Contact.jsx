import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Mail, MapPin, Send, ChevronDown, ChevronUp, CheckCircle } from "lucide-react";

const faqs = [
  { q: "How do I purchase a car?", a: "Browse our inventory, select your dream car, and click 'Add to Cart' or 'Buy Now'. You'll need to create an account to complete the purchase. Our team will then contact you to arrange financing and delivery." },
  { q: "Do you offer financing options?", a: "Yes! We partner with leading financial institutions to offer competitive financing rates. Our team can help you find the best option based on your credit profile and down payment." },
  { q: "What is the delivery process?", a: "We offer white-glove delivery worldwide. Once your purchase is confirmed, our logistics team will coordinate delivery directly to your door, typically within 7-14 business days." },
  { q: "Are all cars certified?", a: "Absolutely. Every vehicle in our inventory undergoes a rigorous 200-point inspection by certified mechanics before listing. We only offer vehicles that meet our premium quality standards." },
  { q: "What warranty is included?", a: "All vehicles come with the manufacturer's remaining warranty. We also offer extended warranty packages that cover up to 5 years or 100,000 miles." },
  { q: "Can I schedule a test drive?", a: "Yes! Contact us via phone or email to schedule a test drive at a dealership near you, or we can arrange for the car to be brought to your location." },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.name && form.email && form.message) setSubmitted(true);
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <div className="bg-charcoal-50 dark:bg-charcoal-900 py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <p className="text-accent-500 font-mono text-sm uppercase tracking-widest mb-2">Get in Touch</p>
            <h1 className="font-display text-5xl font-bold text-charcoal-900 dark:text-white mb-3">Contact Us</h1>
            <p className="text-charcoal-500 dark:text-charcoal-400 max-w-lg">Our luxury automotive experts are available to help you find your perfect vehicle.</p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-8">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h2 className="font-display text-2xl font-bold text-charcoal-900 dark:text-white mb-6">Reach Out</h2>
              {[
                { icon: Phone, label: "Phone", value: "+229 0144 090 743", link: "tel:+2290144090743" },
                { icon: Mail, label: "Email", value: "contact@luxedrive.com", link: "mailto:contact@luxedrive.com" },
                { icon: MapPin, label: "Address", value: "Cotonou, Benin Republic", link: null },
              ].map((item) => (
                <div key={item.label} className="flex gap-4 mb-5">
                  <div className="w-11 h-11 bg-accent-50 dark:bg-accent-900/30 rounded-xl flex items-center justify-center shrink-0">
                    <item.icon size={18} className="text-accent-600" />
                  </div>
                  <div>
                    <p className="text-xs text-charcoal-500 dark:text-charcoal-400 mb-0.5">{item.label}</p>
                    {item.link ? (
                      <a href={item.link} className="font-semibold text-charcoal-900 dark:text-white hover:text-accent-500 transition-colors">{item.value}</a>
                    ) : (
                      <p className="font-semibold text-charcoal-900 dark:text-white">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </motion.div>

            {/* Map Placeholder */}
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
              <div className="rounded-2xl overflow-hidden h-52 bg-charcoal-100 dark:bg-charcoal-800 border border-charcoal-200 dark:border-charcoal-700 relative">
                <div className="absolute inset-0 flex flex-col items-center justify-center text-charcoal-400 dark:text-charcoal-600">
                  <MapPin size={32} className="mb-2" />
                  <p className="text-sm font-medium">Interactive Map</p>
                  <p className="text-xs mt-1">Cotonou, Benin Republic</p>
                </div>
                <div className="absolute inset-0 grid grid-cols-8 grid-rows-6 opacity-10">
                  {[...Array(48)].map((_, i) => (
                    <div key={i} className="border border-charcoal-400 dark:border-charcoal-500" />
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Business Hours */}
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}>
              <h3 className="font-semibold text-charcoal-900 dark:text-white mb-3">Business Hours</h3>
              <div className="space-y-2 text-sm">
                {[["Monday – Friday", "9:00 AM – 7:00 PM"], ["Saturday", "10:00 AM – 5:00 PM"], ["Sunday", "Closed"]].map(([day, hrs]) => (
                  <div key={day} className="flex justify-between">
                    <span className="text-charcoal-600 dark:text-charcoal-400">{day}</span>
                    <span className={`font-medium ${hrs === "Closed" ? "text-red-500" : "text-charcoal-900 dark:text-white"}`}>{hrs}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Contact Form */}
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="lg:col-span-3">
            <div className="bg-white dark:bg-charcoal-900 rounded-3xl p-8 border border-charcoal-100 dark:border-charcoal-800 shadow-xl shadow-charcoal-100/50 dark:shadow-none">
              <h2 className="font-display text-2xl font-bold text-charcoal-900 dark:text-white mb-6">Send a Message</h2>

              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div key="success" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-12">
                    <div className="w-16 h-16 bg-emerald-100 dark:bg-emerald-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle size={32} className="text-emerald-500" />
                    </div>
                    <h3 className="font-display text-2xl font-bold text-charcoal-900 dark:text-white mb-2">Message Sent!</h3>
                    <p className="text-charcoal-500 dark:text-charcoal-400 mb-6">Our team will get back to you within 24 hours.</p>
                    <button onClick={() => setSubmitted(false)} className="px-6 py-2.5 bg-accent-600 text-white rounded-xl text-sm font-medium">Send Another</button>
                  </motion.div>
                ) : (
                  <motion.form key="form" onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-medium text-charcoal-600 dark:text-charcoal-300 mb-1.5">Full Name *</label>
                        <input
                          type="text"
                          required
                          value={form.name}
                          onChange={(e) => setForm({ ...form, name: e.target.value })}
                          placeholder="John Smith"
                          className="w-full px-4 py-3 bg-charcoal-50 dark:bg-charcoal-800 border border-charcoal-200 dark:border-charcoal-700 rounded-xl text-sm focus:outline-none focus:border-accent-500 transition-colors"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-medium text-charcoal-600 dark:text-charcoal-300 mb-1.5">Email Address *</label>
                        <input
                          type="email"
                          required
                          value={form.email}
                          onChange={(e) => setForm({ ...form, email: e.target.value })}
                          placeholder="john@example.com"
                          className="w-full px-4 py-3 bg-charcoal-50 dark:bg-charcoal-800 border border-charcoal-200 dark:border-charcoal-700 rounded-xl text-sm focus:outline-none focus:border-accent-500 transition-colors"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-charcoal-600 dark:text-charcoal-300 mb-1.5">Phone Number</label>
                      <input
                        type="tel"
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        placeholder="+1 (555) 000-0000"
                        className="w-full px-4 py-3 bg-charcoal-50 dark:bg-charcoal-800 border border-charcoal-200 dark:border-charcoal-700 rounded-xl text-sm focus:outline-none focus:border-accent-500 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-charcoal-600 dark:text-charcoal-300 mb-1.5">Message *</label>
                      <textarea
                        required
                        rows={5}
                        value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                        placeholder="Tell us about your dream car or ask any questions..."
                        className="w-full px-4 py-3 bg-charcoal-50 dark:bg-charcoal-800 border border-charcoal-200 dark:border-charcoal-700 rounded-xl text-sm focus:outline-none focus:border-accent-500 transition-colors resize-none"
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full py-4 bg-accent-600 hover:bg-accent-700 text-white rounded-xl font-semibold flex items-center justify-center gap-2 transition-all shadow-lg shadow-accent-500/25"
                    >
                      <Send size={16} /> Send Message
                    </button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>

        {/* FAQ */}
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-20">
          <div className="text-center mb-12">
            <p className="text-accent-500 font-mono text-sm uppercase tracking-widest mb-2">Common Questions</p>
            <h2 className="font-display text-4xl font-bold text-charcoal-900 dark:text-white">FAQ</h2>
          </div>
          <div className="max-w-3xl mx-auto space-y-3">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="bg-white dark:bg-charcoal-900 rounded-2xl border border-charcoal-100 dark:border-charcoal-800 overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left"
                >
                  <span className="font-medium text-charcoal-900 dark:text-white pr-4">{faq.q}</span>
                  {openFaq === i ? <ChevronUp size={18} className="text-accent-500 shrink-0" /> : <ChevronDown size={18} className="text-charcoal-400 shrink-0" />}
                </button>
                <AnimatePresence>
                  {openFaq === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="px-6 pb-5 text-sm text-charcoal-600 dark:text-charcoal-400 leading-relaxed">{faq.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
