"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight, Plus, Star } from "lucide-react";

const pizzas = [
  {
    name: "Pepperoni Feast",
    description: "Loaded with pepperoni, mozzarella and rich tomato sauce.",
    price: 549,
    rating: "4.9",
    badge: "BEST SELLER",
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=1000&h=900&fit=crop",
    alt: "Freshly baked pepperoni pizza",
    featured: true,
  },
  {
    name: "Chicken Tikka",
    description: "Spicy chicken, onion and creamy mozzarella.",
    price: 499,
    rating: "4.8",
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&h=500&fit=crop",
    alt: "Chicken tikka pizza",
  },
  {
    name: "Classic Margherita",
    description: "Fresh basil, mozzarella and tomato.",
    price: 399,
    rating: "4.7",
    image: "https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?w=600&h=500&fit=crop",
    alt: "Classic margherita pizza",
  },
  {
    name: "Four Cheese",
    description: "A rich blend of four delicious cheeses.",
    price: 529,
    rating: "4.9",
    image: "https://images.unsplash.com/photo-1579751626657-72bc17010498?w=600&h=500&fit=crop",
    alt: "Four cheese pizza",
  },
  {
    name: "Veggie Delight",
    description: "Fresh vegetables, olives and mozzarella.",
    price: 449,
    rating: "4.6",
    image: "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?w=600&h=500&fit=crop",
    alt: "Vegetable pizza",
  },

];

export default function PopularPizzas() {
  const featured = pizzas[0];
  const others = pizzas.slice(1);

  return (
    <section className="popular-section" id="popular-pizzas">
      <div className="popular-container">
        <motion.div
          className="popular-heading"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          <div>
            <span className="about-eyebrow">CUSTOMER FAVORITES</span>
            <h2>Popular Pizzas</h2>
            <p>Handpicked favorites that make every moment delicious.</p>
          </div>

          <Link href="/menu" className="popular-view-all">
            View Full Menu <ArrowUpRight size={18} />
          </Link>
        </motion.div>

        <div className="popular-layout">
          <motion.article
            className="popular-featured-card"
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.75 }}
          >
            <div className="popular-featured-image">
              <Image
                src={featured.image}
                alt={featured.alt}
                fill
                sizes="(max-width: 800px) 100vw, 48vw"
                unoptimized
              />
              <span className="popular-featured-badge">
                {featured.badge}
              </span>
            </div>

            <div className="popular-featured-content">
              <div className="popular-rating">
                <Star size={15} fill="currentColor" />
                {featured.rating}
                <span>Customer Favorite</span>
              </div>

              <h3>{featured.name}</h3>
              <p>{featured.description}</p>

              <div className="popular-featured-bottom">
                <div>
                  <small>Starting from</small>
                  <strong>{'\u09F3'}{featured.price}</strong>
                </div>
                <Link href="/menu" className="popular-order-button">
                  Order Now <ArrowRight size={17} />
                </Link>
              </div>
            </div>
          </motion.article>

          <div className="popular-products-grid">
            {others.map((pizza, index) => (
              <motion.article
                className="popular-product-card"
                key={pizza.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.6,
                  delay: (index % 2) * 0.12,
                }}
                whileHover={{ y: -6 }}
              >
                <Link href="/menu" className="popular-product-image">
                  <Image
                    src={pizza.image}
                    alt={pizza.alt}
                    fill
                    sizes="(max-width: 650px) 45vw, 22vw"
                    unoptimized
                  />
                  <span className="popular-product-rating">
                    <Star size={12} fill="currentColor" />
                    {pizza.rating}
                  </span>
                </Link>

                <div className="popular-product-content">
                  <h3>{pizza.name}</h3>
                  <p>{pizza.description}</p>

                  <div className="popular-product-bottom">
                    <strong>{'\u09F3'}{pizza.price}</strong>
                    <Link
                      href="/menu"
                      className="popular-add-button"
                      aria-label={`View ${pizza.name}`}
                    >
                      <Plus size={19} />
                    </Link>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}


