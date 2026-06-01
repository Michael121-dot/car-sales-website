# 🚗 LuxeDrive — Premium Luxury Car Dealership

A fully responsive, premium luxury car dealership website built with React.js, Tailwind CSS, and Framer Motion.

---

## 🚀 Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Build for Production
```bash
npm run build
```

---

## 📦 Tech Stack

| Tool | Purpose |
|------|---------|
| React 18 | UI Framework |
| React Router v6 | Page Navigation |
| Tailwind CSS | Styling |
| Framer Motion | Animations |
| Lucide React | Icons |

---

## 📁 Project Structure

```
luxedrive/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Navbar.jsx        ← Sticky transparent navbar
│   │   ├── Footer.jsx        ← Footer with newsletter
│   │   ├── CarCard.jsx       ← Reusable car card
│   │   └── CartDrawer.jsx    ← Slide-in cart
│   ├── context/
│   │   └── AppContext.js     ← Dark mode, auth, cart, wishlist
│   ├── data/
│   │   └── cars.js           ← 20 luxury car records
│   ├── pages/
│   │   ├── Home.jsx          ← Hero + arrivals + collections + deals
│   │   ├── Cars.jsx          ← Browse + search + filter + pagination
│   │   ├── CarDetail.jsx     ← Full detail + gallery + similar cars
│   │   ├── BrandPage.jsx     ← Brand collection page
│   │   ├── Contact.jsx       ← Form + FAQ + map placeholder
│   │   └── Login.jsx         ← Login + Sign Up with validation
│   ├── App.js
│   ├── index.js
│   └── index.css
├── tailwind.config.js
├── postcss.config.js
└── package.json
```

---

## ✨ Features

### Pages
- **Home** — Hero slider (5 brands), New Arrivals, Featured Collections, Discount Countdown, Why Choose Us
- **Cars** — Search, filter by brand/fuel/price, sort, pagination
- **Car Detail** — Image gallery, color picker, specs, similar cars, login-gated cart/wishlist
- **Brand Pages** — Ferrari, Lamborghini, McLaren, Tesla, Porsche, Bugatti, Rolls Royce, Mercedes
- **Contact** — Contact form, FAQ accordion, map placeholder, business hours
- **Login/Sign Up** — Auth with validation, Google button, toggle between login/signup

### UI/UX
- ✅ Dark Mode / Light Mode toggle (persists in localStorage)
- ✅ Sticky transparent navbar that changes on scroll
- ✅ Mobile hamburger menu with brand collection dropdown
- ✅ Hero slider with left/right merge text animations
- ✅ Scroll reveal animations on all sections
- ✅ Card hover effects (scale, shadow, image zoom, glow)
- ✅ Cart drawer (slide-in from right)
- ✅ Wishlist toggle with heart icon
- ✅ Countdown timer on discount section
- ✅ Framer Motion page/element transitions
- ✅ Google Fonts: Cormorant Garamond (display) + DM Sans (body)

---

## 🎨 Color Palette

| Mode | Background | Text | Accent |
|------|-----------|------|--------|
| Light | `#ffffff` / `#f8f8f8` | `#1a1a1a` | `#2563eb` (blue) |
| Dark | `#0f0f0f` / `#1a1a1a` | `#ffffff` | `#3b82f6` (blue) |

---

## 📞 Contact Info (as specified)
- **Phone:** +229 0144 090 743
- **Email:** contact@luxedrive.com
- **Location:** Cotonou, Benin Republic

---

## 🔐 Auth Note

Authentication is **client-side only** (localStorage). For production, connect to a backend API (Node.js/Express, Firebase, Supabase, etc.).

---

## 🌐 Car Data

20 luxury cars pre-loaded across 8 brands:
- Ferrari (3 models), Lamborghini (3), McLaren (2)
- Porsche (3), Tesla (3), Rolls Royce (2)
- Bugatti (2), Mercedes (2)

All images are sourced from Unsplash (free to use).

---

Built with ❤️ — LuxeDrive 2024
