import React, { createContext, useContext, useState, useEffect } from "react";

const AppContext = createContext();

export function AppProvider({ children }) {
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem("luxedrive-dark");
    return saved ? JSON.parse(saved) : true;
  });
  const [user, setUser] = useState(() => {
    const saved = localStorage.getItem("luxedrive-user");
    return saved ? JSON.parse(saved) : null;
  });
  const [cart, setCart] = useState(() => {
    const saved = localStorage.getItem("luxedrive-cart");
    return saved ? JSON.parse(saved) : [];
  });
  const [wishlist, setWishlist] = useState(() => {
    const saved = localStorage.getItem("luxedrive-wishlist");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("luxedrive-dark", JSON.stringify(darkMode));
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  useEffect(() => {
    localStorage.setItem("luxedrive-user", JSON.stringify(user));
  }, [user]);

  useEffect(() => {
    localStorage.setItem("luxedrive-cart", JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    localStorage.setItem("luxedrive-wishlist", JSON.stringify(wishlist));
  }, [wishlist]);

  const toggleDark = () => setDarkMode(d => !d);

  const login = (userData) => setUser(userData);
  const logout = () => setUser(null);

  const addToCart = (car) => {
    if (!cart.find(c => c.id === car.id)) {
      setCart(prev => [...prev, car]);
    }
  };
  const removeFromCart = (id) => setCart(prev => prev.filter(c => c.id !== id));

  const toggleWishlist = (car) => {
    if (wishlist.find(c => c.id === car.id)) {
      setWishlist(prev => prev.filter(c => c.id !== car.id));
    } else {
      setWishlist(prev => [...prev, car]);
    }
  };
  const isInWishlist = (id) => wishlist.some(c => c.id === id);
  const isInCart = (id) => cart.some(c => c.id === id);

  return (
    <AppContext.Provider value={{
      darkMode, toggleDark,
      user, login, logout,
      cart, addToCart, removeFromCart, isInCart,
      wishlist, toggleWishlist, isInWishlist
    }}>
      {children}
    </AppContext.Provider>
  );
}

export const useApp = () => useContext(AppContext);
