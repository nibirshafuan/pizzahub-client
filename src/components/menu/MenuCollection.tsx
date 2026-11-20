"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Search, SlidersHorizontal, ArrowUpDown, Star,
  ShoppingBag, Plus, Check, MapPin, Flame,
  Sparkles, ArrowRight, Pizza, X
} from "lucide-react";

const pizzas = [
  {
    id: "margherita",
    name: "Classic Margherita",
    category: "Classic",
    location: "Dhanmondi",
    price: 450,
    rating: 4.9,
    reviews: 128,
    description: "Fresh mozzarella, basil and rich tomato sauce.",
    image: "https://image.resy.com/3/003/2/65379/53ae8c3a9316ba78c20d00f63a9966084f667f97/jpg/1%3A1/1600",
    tag: "Bestseller"
  },
  {
    id: "pepperoni",
    name: "Pepperoni Feast",
    category: "Classic",
    location: "Uttara",
    price: 650,
    rating: 4.8,
    reviews: 96,
    description: "Loaded with pepperoni, mozzarella and signature sauce.",
    image: "https://d1w7312wesee68.cloudfront.net/vvvtJ2hGkdvmQfUaFPIlz-hcWBtyg3OK5_MRUquaQhI/ext%3Awebp/quality%3A85/plain/s3%3A/toast-sites-resources-prod/restaurantImages/c90a4294-d114-4119-9d56-a7d531ae8065/BlueMoonStudio7982.jpg",
    tag: "Popular"
  },
  {
    id: "bbq-chicken",
    name: "BBQ Chicken",
    category: "Chicken",
    location: "Dhanmondi",
    price: 590,
    rating: 4.9,
    reviews: 84,
    description: "Smoky BBQ chicken, onions and melted cheese.",
    image: "https://static.manjarfoodpark.menu/product/gos-pizza/pizza-bbq-chicken.jpg",
    tag: "Chef's Choice"
  },
  {
    id: "four-cheese",
    name: "Four Cheese",
    category: "Cheese",
    location: "Gulshan",
    price: 720,
    rating: 4.7,
    reviews: 72,
    description: "A rich combination of four delicious cheeses.",
    image: "https://www.lactalisfoodservice.fr/app/uploads/2025/10/sans-titre-1-0000-shutterstock-2188344363-1200x1200.png",
    tag: "Premium"
  },
  {
    id: "veggie-delight",
    name: "Veggie Delight",
    category: "Veggie",
    location: "Savar",
    price: 490,
    rating: 4.6,
    reviews: 58,
    description: "Colorful vegetables, olives and fresh mozzarella.",
    image: "https://maincdn3.mnasaticdn.com/uploads/product_image/2733/product_01732015741_thumb.jpg",
    tag: "Fresh Pick"
  },
  {
    id: "spicy-chicken",
    name: "Spicy Chicken",
    category: "Chicken",
    location: "Uttara",
    price: 620,
    rating: 4.8,
    reviews: 91,
    description: "Juicy chicken, jalapenos and a spicy signature sauce.",
    image: "https://d2ova09jg8x3xk.cloudfront.net/bentleighpizzeria.com.au/uploads/Spicy_Chicken.jpg",
    tag: "Spicy"
  },
  {
    id: "seafood-special",
    name: "Seafood Special",
    category: "Seafood",
    location: "Gulshan",
    price: 850,
    rating: 4.7,
    reviews: 43,
    description: "A delicious seafood combination with creamy cheese.",
    image: "https://www.lagrollabz.it/newsite/images/pizze/Livello3.png",
    tag: "Special"
  },
  {
    id: "garden-fresh",
    name: "Garden Fresh",
    category: "Veggie",
    location: "Savar",
    price: 520,
    rating: 4.6,
    reviews: 39,
    description: "Garden vegetables, herbs and a light cheese topping.",
    image: "https://static.wixstatic.com/media/37ace1_f1050776479e4c4ca22409e32794b624~mv2.jpg/v1/fill/w_480%2Ch_534%2Cal_c%2Cq_80%2Cusm_0.66_1.00_0.01%2Cenc_avif%2Cquality_auto/37ace1_f1050776479e4c4ca22409e32794b624~mv2.jpg",
    tag: "Vegetarian"
  },
  {
    id: "cheese-burst",
    name: "Cheese Burst Special",
    category: "Special",
    location: "Dhanmondi",
    price: 780,
    rating: 4.9,
    reviews: 67,
    description: "Extra cheesy, rich and made for cheese lovers.",
    image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy%2Cf_auto%2Cq_auto%2Cw_300%2Ch_300%2Ce_grayscale%2Cc_fit/FOOD_CATALOG/IMAGES/CMS/2026/1/7/49fc0b3e-4045-478b-8bbd-bc01e4ea8068_64661c75-07c6-4bca-8700-e7dd50fbcad2.jpg",
    tag: "Cheese Lover"
  }
];

const categories = [
  "All Pizzas", "Classic", "Chicken", "Cheese",
  "Veggie", "Seafood", "Special"
];

const locations = [
  "All Locations", "Dhanmondi", "Gulshan", "Uttara", "Savar"
];

export default function MenuCollection() {
  const [category, setCategory] = useState("All Pizzas");
  const [location, setLocation] = useState("All Locations");
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("default");
  const [cart, setCart] = useState<string[]>([]);
  const [showFilters, setShowFilters] = useState(false);

  const filteredPizzas = useMemo(() => {
    let result = pizzas.filter((pizza) => {
      const matchesSearch =
        pizza.name.toLowerCase().includes(search.toLowerCase());

      const matchesCategory =
        category === "All Pizzas" || pizza.category === category;

      const matchesLocation =
        location === "All Locations" || pizza.location === location;

      return matchesSearch && matchesCategory && matchesLocation;
    });

    if (sort === "low") result = [...result].sort((a, b) => a.price - b.price);
    if (sort === "high") result = [...result].sort((a, b) => b.price - a.price);
    if (sort === "rating") result = [...result].sort((a, b) => b.rating - a.rating);

    return result;
  }, [category, location, search, sort]);

  function addToCart(id: string) {
    setCart((current) => current.includes(id) ? current : [...current, id]);
  }

  function clearFilters() {
    setCategory("All Pizzas");
    setLocation("All Locations");
    setSearch("");
    setSort("default");
  }

  return (
    <>
      <section className="menu-featured-section">
        <div className="menu-section-container">
          <div className="menu-section-heading">
            <div>
              <span className="menu-section-eyebrow">HANDPICKED FOR YOU</span>
              <h2>Today's <span>Featured</span></h2>
              <p>Our special selection, made with love and the freshest ingredients.</p>
            </div>
            <span className="menu-heading-decoration"><Sparkles size={22} /></span>
          </div>

          <div className="menu-featured-card">
            <div className="menu-featured-image" />
            <div className="menu-featured-content">
              <span className="menu-featured-label"><Flame size={15} /> FEATURED FAVORITE</span>
              <h3>Italian Classic<br /><span>Supreme Pizza</span></h3>
              <p>
                A delicious combination of premium mozzarella, fresh herbs,
                signature tomato sauce and carefully selected toppings.
              </p>
              <div className="menu-featured-rating">
                <Star size={16} fill="currentColor" />
                <strong>4.9</strong>
                <span>Customer favorite</span>
              </div>
              <div className="menu-featured-bottom">
                <div>
                  <small>Starting from</small>
                  <strong>৳ 750</strong>
                </div>
                <Link href="/menu/italian-supreme" className="menu-featured-button">
                  View Details <ArrowRight size={17} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="menu-promotion-section">
        <div className="menu-promotion">
          <div className="menu-promotion-icon"><Pizza size={36} /></div>
          <div className="menu-promotion-copy">
            <span>GOOD FOOD, GOOD MOOD</span>
            <h2>Make every moment a little more delicious.</h2>
            <p>Explore our delicious pizza collection and find your next favorite.</p>
          </div>
          <a href="#pizza-collection" className="menu-promotion-button">
            Explore Pizzas <ArrowRight size={17} />
          </a>
          <div className="menu-promotion-decoration">PIZZA</div>
        </div>
      </section>

      <section className="menu-collection-section" id="pizza-collection">
        <div className="menu-section-container">
          <div className="menu-collection-intro">
            <div>
              <span className="menu-section-eyebrow">THE PIZZAHUB COLLECTION</span>
              <h2>A little slice of <span>happiness.</span></h2>
              <p>Explore handcrafted favorites, made fresh for every craving.</p>
            </div>
            <div className="menu-cart-counter">
              <ShoppingBag size={18} />
              <span>{cart.length} Added</span>
            </div>
          </div>

          <div className="menu-collection-toolbar">
            <div className="menu-category-list">
              {categories.map((item) => (
                <button
                  key={item}
                  className={category === item ? "menu-category active" : "menu-category"}
                  onClick={() => setCategory(item)}
                >
                  {item}
                </button>
              ))}
            </div>

            <div className="menu-filter-panel">
              <div className="menu-search-box">
                <Search size={19} />
                <input
                  value={search}
                  onChange={(event) => setSearch(event.target.value)}
                  placeholder="Find your next favorite..."
                  aria-label="Search pizzas"
                />
                {search && (
                  <button onClick={() => setSearch("")} aria-label="Clear search">
                    <X size={16} />
                  </button>
                )}
              </div>

              <button
                className="menu-filter-toggle"
                onClick={() => setShowFilters(!showFilters)}
              >
                <SlidersHorizontal size={17} />
                Filters
              </button>

              <div className="menu-sort-box">
                <ArrowUpDown size={16} />
                <select value={sort} onChange={(event) => setSort(event.target.value)}>
                  <option value="default">Recommended</option>
                  <option value="low">Price: Low to High</option>
                  <option value="high">Price: High to Low</option>
                  <option value="rating">Highest Rated</option>
                </select>
              </div>
            </div>
          </div>

          <div className={showFilters ? "menu-extra-filters open" : "menu-extra-filters"}>
            <label>
              <MapPin size={16} />
              Location
              <select value={location} onChange={(event) => setLocation(event.target.value)}>
                {locations.map((item) => <option key={item}>{item}</option>)}
              </select>
            </label>
            <button onClick={clearFilters}>Clear all filters <X size={14} /></button>
          </div>

          <div className="menu-results-heading">
            <div>
              <span className="menu-results-kicker">MADE TO MAKE YOU SMILE</span>
              <h3><strong>{filteredPizzas.length.toString().padStart(2, "0")}</strong> delicious choices</h3>
            </div>
            <span>Freshly prepared, just for you</span>
          </div>

          {filteredPizzas.length > 0 ? (
            <motion.div layout className="menu-product-grid">
              {filteredPizzas.map((pizza, index) => {
                const added = cart.includes(pizza.id);

                return (
                  <motion.article
                    layout
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.045 }}
                    key={pizza.id}
                    className={`menu-product-card menu-float-card menu-float-${index % 3}`}
                  >
                    <Link href={`/menu/${pizza.id}`} className="menu-product-image">
                      <img src={pizza.image} alt={pizza.name} />
                      <span className="menu-product-tag">{pizza.tag}</span>
                      <span className="menu-image-arrow"><ArrowUpDown size={15} /></span>
                    </Link>

                    <div className="menu-product-content">
                      <div className="menu-product-meta">
                        <span>{pizza.category}</span>
                        <span className="menu-product-rating">
                          <Star size={13} fill="currentColor" /> {pizza.rating}
                        </span>
                      </div>

                      <Link href={`/menu/${pizza.id}`} className="menu-product-name">
                        {pizza.name}
                      </Link>

                      <p>{pizza.description}</p>

                      <div className="menu-product-location">
                        <MapPin size={13} /> {pizza.location}
                        <span>{pizza.reviews} reviews</span>
                      </div>

                      <div className="menu-product-bottom">
                        <strong>৳ {pizza.price}</strong>
                        <button
                          className={added ? "menu-add-button added" : "menu-add-button"}
                          onClick={() => addToCart(pizza.id)}
                          disabled={added}
                        >
                          {added ? <Check size={16} /> : <Plus size={16} />}
                          {added ? "Added" : "Add"}
                        </button>
                      </div>
                    </div>
                  </motion.article>
                );
              })}
            </motion.div>
          ) : (
            <div className="menu-empty-state">
              <span><Pizza size={35} /></span>
              <h3>No pizzas found</h3>
              <p>Try changing your search or filters to discover more delicious options.</p>
              <button onClick={clearFilters}>Clear Filters</button>
            </div>
          )}

          <p className="menu-demo-notice">
            Menu items and prices shown are illustrative demo content and are not live restaurant listings.
          </p>
        </div>
      </section>
    </>
  );
}



