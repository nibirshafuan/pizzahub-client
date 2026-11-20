"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Search, SlidersHorizontal, ArrowUpDown, Star,
  ShoppingBag, Plus, Check, MapPin, Flame,
  Sparkles, ArrowRight, Pizza, X
} from "lucide-react";

import { pizzas } from "@/data/pizzas";
import { useCart } from "@/components/providers/CartProvider";

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
  const { items, totalItems, addItem } = useCart();
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

  function addToCart(pizza: (typeof pizzas)[number]) {
    addItem({
      id: pizza.id,
      name: pizza.name,
      price: pizza.price,
      image: pizza.image,
    });
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
              <span>{totalItems} Added</span>
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
                const added = items.some((item) => item.id === pizza.id);

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
                          onClick={() => addToCart(pizza)}
                        >
                          {added ? <Check size={16} /> : <Plus size={16} />}
                          {added ? "Add More" : "Add"}
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







