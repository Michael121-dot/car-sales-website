export const carsData = [
  // Ferrari
  {
    id: 1, brand: "Ferrari", model: "SF90 Stradale", year: 2024, price: 627000,
    fuelType: "Hybrid", transmission: "Automatic", horsepower: 986, topSpeed: 211,
    engine: "4.0L Twin-Turbo V8 + 3 Electric Motors", category: "Supercar",
    colors: ["#FF2800", "#FFCC00", "#1C1C1C", "#F5F5F5"],
    images: [
      "https://images.unsplash.com/photo-1592198084033-aade902d1aae?w=1200&q=80",
      "https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=1200&q=80",
      "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=1200&q=80"
    ],
    description: "The SF90 Stradale is Ferrari's most powerful production car ever made, blending a twin-turbo V8 with three electric motors for a combined 986hp. A landmark in automotive engineering.",
    discount: 0, isNew: true, isFeatured: true, rating: 4.9, reviews: 48
  },
  {
    id: 2, brand: "Ferrari", model: "F8 Tributo", year: 2023, price: 276000,
    fuelType: "Petrol", transmission: "Automatic", horsepower: 710, topSpeed: 211,
    engine: "3.9L Twin-Turbo V8", category: "Supercar",
    colors: ["#FF2800", "#FFCC00", "#1C1C1C"],
    images: [
      "https://images.unsplash.com/photo-1555353540-64580b51c258?w=1200&q=80",
      "https://images.unsplash.com/photo-1592198084033-aade902d1aae?w=1200&q=80"
    ],
    description: "A tribute to the most powerful V8 in Ferrari's history, the F8 Tributo delivers breathtaking performance in a mid-engine masterpiece.",
    discount: 5, isNew: false, isFeatured: true, rating: 4.8, reviews: 62
  },
  {
    id: 3, brand: "Ferrari", model: "Roma", year: 2024, price: 222000,
    fuelType: "Petrol", transmission: "Automatic", horsepower: 612, topSpeed: 199,
    engine: "3.9L Twin-Turbo V8", category: "Grand Tourer",
    colors: ["#C0C0C0", "#FFCC00", "#1C1C1C", "#0047AB"],
    images: [
      "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?w=1200&q=80",
      "https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=1200&q=80"
    ],
    description: "The Ferrari Roma embodies la dolce vita — a modern interpretation of the carefree, pleasurable life that characterised Rome in the 1950s and 60s.",
    discount: 0, isNew: true, isFeatured: false, rating: 4.7, reviews: 35
  },
  // Lamborghini
  {
    id: 4, brand: "Lamborghini", model: "Huracán EVO", year: 2024, price: 248000,
    fuelType: "Petrol", transmission: "Automatic", horsepower: 640, topSpeed: 202,
    engine: "5.2L Naturally Aspirated V10", category: "Supercar",
    colors: ["#00CC44", "#FF6600", "#FFCC00", "#1C1C1C"],
    images: [
      "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=1200&q=80",
      "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=1200&q=80"
    ],
    description: "The Huracán EVO perfects the naturally aspirated V10 experience, with predictive all-wheel drive and the most advanced Lamborghini electronics ever.",
    discount: 3, isNew: false, isFeatured: true, rating: 4.8, reviews: 55
  },
  {
    id: 5, brand: "Lamborghini", model: "Urus Performante", year: 2024, price: 247000,
    fuelType: "Petrol", transmission: "Automatic", horsepower: 666, topSpeed: 193,
    engine: "4.0L Twin-Turbo V8", category: "SUV",
    colors: ["#1C1C1C", "#FFFFFF", "#FF6600", "#00CC44"],
    images: [
      "https://images.unsplash.com/photo-1674487918547-bd50db5e5e74?w=1200&q=80",
      "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=1200&q=80"
    ],
    description: "The most powerful SUV on the planet. The Urus Performante takes the Super SUV concept to a new level of performance and driving dynamics.",
    discount: 0, isNew: true, isFeatured: false, rating: 4.7, reviews: 41
  },
  {
    id: 6, brand: "Lamborghini", model: "Revuelto", year: 2024, price: 597000,
    fuelType: "Hybrid", transmission: "Automatic", horsepower: 1001, topSpeed: 217,
    engine: "6.5L V12 + 3 Electric Motors", category: "Hypercar",
    colors: ["#FF6600", "#1C1C1C", "#FFCC00"],
    images: [
      "https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=1200&q=80",
      "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=1200&q=80"
    ],
    description: "The Revuelto is Lamborghini's first HPEV (High Performance Electrified Vehicle), combining a 6.5L V12 with three electric motors for over 1,000 hp.",
    discount: 0, isNew: true, isFeatured: true, rating: 5.0, reviews: 22
  },
  // McLaren
  {
    id: 7, brand: "McLaren", model: "720S", year: 2023, price: 302000,
    fuelType: "Petrol", transmission: "Automatic", horsepower: 710, topSpeed: 212,
    engine: "4.0L Twin-Turbo V8", category: "Supercar",
    colors: ["#FF8C00", "#1C1C1C", "#C0C0C0", "#0047AB"],
    images: [
      "https://images.unsplash.com/photo-1621135802920-133df287f89c?w=1200&q=80",
      "https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=1200&q=80"
    ],
    description: "The McLaren 720S is a masterpiece of aerodynamic engineering. Every surface has been sculpted to minimize drag and maximize downforce.",
    discount: 8, isNew: false, isFeatured: true, rating: 4.8, reviews: 67
  },
  {
    id: 8, brand: "McLaren", model: "Artura", year: 2024, price: 238000,
    fuelType: "Hybrid", transmission: "Automatic", horsepower: 671, topSpeed: 205,
    engine: "3.0L Twin-Turbo V6 + Electric Motor", category: "Supercar",
    colors: ["#C0C0C0", "#1C1C1C", "#FF8C00"],
    images: [
      "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?w=1200&q=80",
      "https://images.unsplash.com/photo-1621135802920-133df287f89c?w=1200&q=80"
    ],
    description: "The McLaren Artura is a high-performance hybrid supercar built from the ground up, featuring a brand-new platform and powertrain.",
    discount: 0, isNew: true, isFeatured: false, rating: 4.7, reviews: 29
  },
  // Porsche
  {
    id: 9, brand: "Porsche", model: "911 Turbo S", year: 2024, price: 216000,
    fuelType: "Petrol", transmission: "Automatic", horsepower: 640, topSpeed: 205,
    engine: "3.8L Twin-Turbo Flat-Six", category: "Sports Car",
    colors: ["#C0C0C0", "#1C1C1C", "#FF2800", "#FFCC00"],
    images: [
      "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?w=1200&q=80",
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1200&q=80"
    ],
    description: "The 911 Turbo S is the pinnacle of Porsche's sports car lineup. With 640 hp and all-wheel drive, it delivers supercar performance with everyday usability.",
    discount: 0, isNew: true, isFeatured: true, rating: 4.9, reviews: 88
  },
  {
    id: 10, brand: "Porsche", model: "Taycan Turbo S", year: 2024, price: 187000,
    fuelType: "Electric", transmission: "Automatic", horsepower: 750, topSpeed: 162,
    engine: "Dual Electric Motors", category: "Electric Sedan",
    colors: ["#1C1C1C", "#FFFFFF", "#0047AB"],
    images: [
      "https://images.unsplash.com/photo-1612644759792-b3547e04b7d2?w=1200&q=80",
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1200&q=80"
    ],
    description: "The Taycan Turbo S is the most powerful Porsche EV, delivering 750 hp in overboost mode and a 0-60 time of just 2.4 seconds.",
    discount: 5, isNew: false, isFeatured: false, rating: 4.8, reviews: 76
  },
  {
    id: 11, brand: "Porsche", model: "Cayenne Turbo GT", year: 2024, price: 182000,
    fuelType: "Petrol", transmission: "Automatic", horsepower: 631, topSpeed: 186,
    engine: "4.0L Twin-Turbo V8", category: "SUV",
    colors: ["#1C1C1C", "#C0C0C0", "#FF2800"],
    images: [
      "https://images.unsplash.com/photo-1547038577-da80abbc4f19?w=1200&q=80",
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1200&q=80"
    ],
    description: "The Cayenne Turbo GT is the most powerful Cayenne ever, setting a lap record at the Nürburgring for production SUVs.",
    discount: 0, isNew: true, isFeatured: false, rating: 4.7, reviews: 43
  },
  // Rolls Royce
  {
    id: 12, brand: "Rolls Royce", model: "Phantom", year: 2024, price: 460000,
    fuelType: "Petrol", transmission: "Automatic", horsepower: 563, topSpeed: 155,
    engine: "6.75L Twin-Turbo V12", category: "Luxury Sedan",
    colors: ["#1C1C1C", "#FFFFFF", "#C0C0C0", "#2C4A8A"],
    images: [
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1200&q=80",
      "https://images.unsplash.com/photo-1567818735868-e71b99932e29?w=1200&q=80"
    ],
    description: "The Rolls-Royce Phantom is the pinnacle of automotive luxury. Handcrafted in Goodwood, each Phantom is a unique expression of its owner's taste.",
    discount: 0, isNew: false, isFeatured: true, rating: 5.0, reviews: 31
  },
  {
    id: 13, brand: "Rolls Royce", model: "Cullinan", year: 2024, price: 348000,
    fuelType: "Petrol", transmission: "Automatic", horsepower: 563, topSpeed: 155,
    engine: "6.75L Twin-Turbo V12", category: "Luxury SUV",
    colors: ["#1C1C1C", "#FFFFFF", "#2C4A8A", "#5B4A2D"],
    images: [
      "https://images.unsplash.com/photo-1567818735868-e71b99932e29?w=1200&q=80",
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1200&q=80"
    ],
    description: "Named after the largest flawless diamond ever discovered, the Cullinan is the first Rolls-Royce SUV — effortlessly powerful, supremely comfortable.",
    discount: 0, isNew: true, isFeatured: false, rating: 4.9, reviews: 27
  },
  // Bugatti
  {
    id: 14, brand: "Bugatti", model: "Chiron Super Sport", year: 2024, price: 3900000,
    fuelType: "Petrol", transmission: "Automatic", horsepower: 1578, topSpeed: 273,
    engine: "8.0L Quad-Turbo W16", category: "Hypercar",
    colors: ["#1C1C1C", "#0047AB", "#C0C0C0"],
    images: [
      "https://images.unsplash.com/photo-1566473965997-3de9c817e938?w=1200&q=80",
      "https://images.unsplash.com/photo-1555353540-64580b51c258?w=1200&q=80"
    ],
    description: "The Chiron Super Sport is the ultimate expression of Bugatti's art of performance. Its 8.0L W16 produces 1,578 hp — enough to reach 273 mph.",
    discount: 0, isNew: false, isFeatured: true, rating: 5.0, reviews: 12
  },
  {
    id: 15, brand: "Bugatti", model: "Tourbillon", year: 2024, price: 3800000,
    fuelType: "Hybrid", transmission: "Automatic", horsepower: 1800, topSpeed: 270,
    engine: "8.3L NA V16 + Electric Motors", category: "Hypercar",
    colors: ["#C0C0C0", "#1C1C1C", "#0047AB"],
    images: [
      "https://images.unsplash.com/photo-1555353540-64580b51c258?w=1200&q=80",
      "https://images.unsplash.com/photo-1566473965997-3de9c817e938?w=1200&q=80"
    ],
    description: "The Bugatti Tourbillon is the successor to the Chiron, featuring a naturally aspirated V16 hybrid powertrain producing 1,800 hp.",
    discount: 0, isNew: true, isFeatured: true, rating: 5.0, reviews: 8
  },
  // Tesla
  {
    id: 16, brand: "Tesla", model: "Model S Plaid", year: 2024, price: 108990,
    fuelType: "Electric", transmission: "Automatic", horsepower: 1020, topSpeed: 200,
    engine: "Tri-Motor All-Electric", category: "Electric Sedan",
    colors: ["#FFFFFF", "#1C1C1C", "#C0C0C0", "#FF2800"],
    images: [
      "https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=1200&q=80",
      "https://images.unsplash.com/photo-1571127236794-81c8023ef01c?w=1200&q=80"
    ],
    description: "The Model S Plaid is the quickest production car in the world, accelerating 0-60 in under 2 seconds with 1,020 hp and a 396-mile range.",
    discount: 10, isNew: false, isFeatured: true, rating: 4.8, reviews: 204
  },
  {
    id: 17, brand: "Tesla", model: "Roadster 2.0", year: 2025, price: 250000,
    fuelType: "Electric", transmission: "Automatic", horsepower: 1400, topSpeed: 250,
    engine: "Quad-Motor All-Electric", category: "Electric Sports Car",
    colors: ["#FF2800", "#1C1C1C", "#FFFFFF"],
    images: [
      "https://images.unsplash.com/photo-1571127236794-81c8023ef01c?w=1200&q=80",
      "https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=1200&q=80"
    ],
    description: "The all-new Tesla Roadster aims to shatter every performance record in existence. With SpaceX rocket thruster technology, it's the quickest production car ever.",
    discount: 0, isNew: true, isFeatured: true, rating: 5.0, reviews: 89
  },
  {
    id: 18, brand: "Tesla", model: "Cybertruck", year: 2024, price: 79990,
    fuelType: "Electric", transmission: "Automatic", horsepower: 845, topSpeed: 130,
    engine: "Tri-Motor All-Electric", category: "Electric Truck",
    colors: ["#C0C0C0"],
    images: [
      "https://images.unsplash.com/photo-1697463012083-01ee489c5534?w=1200&q=80",
      "https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=1200&q=80"
    ],
    description: "Built with an exoskeleton of Ultra-Hard 30X cold-rolled stainless steel and armored glass, the Cybertruck is virtually impenetrable.",
    discount: 0, isNew: true, isFeatured: false, rating: 4.6, reviews: 312
  },
  // Mercedes
  {
    id: 19, brand: "Mercedes", model: "AMG GT Black Series", year: 2023, price: 333000,
    fuelType: "Petrol", transmission: "Automatic", horsepower: 730, topSpeed: 202,
    engine: "4.0L Twin-Turbo V8", category: "Supercar",
    colors: ["#1C1C1C", "#C0C0C0", "#FF2800", "#FFCC00"],
    images: [
      "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=1200&q=80",
      "https://images.unsplash.com/photo-1553440569-bcc63803a83d?w=1200&q=80"
    ],
    description: "The AMG GT Black Series is the most powerful naturally-aspirated AMG ever built, setting a production-car lap record at the Nürburgring.",
    discount: 12, isNew: false, isFeatured: true, rating: 4.9, reviews: 73
  },
  {
    id: 20, brand: "Mercedes", model: "S-Class Maybach", year: 2024, price: 198000,
    fuelType: "Petrol", transmission: "Automatic", horsepower: 510, topSpeed: 155,
    engine: "4.0L Twin-Turbo V8", category: "Luxury Sedan",
    colors: ["#1C1C1C", "#FFFFFF", "#2C4A8A", "#5B4A2D"],
    images: [
      "https://images.unsplash.com/photo-1553440569-bcc63803a83d?w=1200&q=80",
      "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=1200&q=80"
    ],
    description: "The Mercedes-Maybach S-Class represents the pinnacle of luxury driving, with executive rear-seat dimensions and handcrafted details throughout.",
    discount: 0, isNew: true, isFeatured: false, rating: 4.8, reviews: 57
  },
];

export const getFeaturedCar = () => carsData.find(c => c.discount > 0 && c.isFeatured) || carsData[1];

export const getCarsByBrand = (brand) => carsData.filter(c => c.brand.toLowerCase() === brand.toLowerCase());

export const getNewArrivals = () => carsData.filter(c => c.isNew).slice(0, 6);

export const getBrands = () => [...new Set(carsData.map(c => c.brand))];

export const getSimilarCars = (car) => carsData.filter(c => c.brand === car.brand && c.id !== car.id).slice(0, 4);
