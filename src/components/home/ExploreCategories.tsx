"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const filters = [
  { name: "All", slug: "" },
  { name: "Classic", slug: "classic" },
  { name: "Chicken", slug: "chicken" },
  { name: "Cheese", slug: "cheese" },
  { name: "Veggie", slug: "veggie" },
  { name: "Special", slug: "special" },
];

const categories = [
  {
    name: "Classic Pizza",
    description: "Timeless Italian flavors.",
    slug: "classic",
    image: "https://s3.eu-central-1.amazonaws.com/monoprix/e2f4eb92838c5e62465bc0717829d963.jpeg",
    alt: "Classic Margherita pizza with mozzarella and fresh basil",
  },
  {
    name: "Chicken Pizza",
    description: "Loaded with delicious chicken.",
    slug: "chicken",
    image: "https://images.deliveryhero.io/image/fd-bd/LH/zalr-listing.jpg?height=900&width=900",
    alt: "Chicken pizza with seasoned chicken and fresh toppings",
  },
  {
    name: "Cheese Pizza",
    description: "Rich, creamy and extra cheesy.",
    slug: "cheese",
    image: "https://images.pexels.com/photos/33592983/pexels-photo-33592983.jpeg?auto=compress&cs=tinysrgb&w=700?w=700&h=700&fit=crop",
    alt: "Four cheese pizza with a rich golden melted cheese topping",
  },
  {
    name: "Veggie Pizza",
    description: "Fresh garden flavors in every bite.",
    slug: "veggie",
    image: "https://assets.puzzlefactory.com/puzzle/395/001/original.jpg",
    alt: "Vegetable pizza with tomatoes, olives, corn and fresh greens",
  },
  {
    name: "Seafood Pizza",
    description: "A delicious taste from the sea.",
    slug: "seafood",
    image: "https://mir-s3-cdn-cf.behance.net/project_modules/1400/f54dfb148413107.62d56eaae3eae.jpg",
    alt: "Seafood pizza with shrimp, squid and bell peppers",
  },
  {
    name: "Special Pizza",
    description: "Our signature pizza selection.",
    slug: "special",
    image: "https://images.unsplash.com/photo-1571066811602-716837d681de?w=700&h=700&fit=crop",
    alt: "Special pizza with assorted toppings",
  },
];

export default function ExploreCategories() {
  return (
    <section className="categories-section" id="categories">
      <div className="categories-container">
        <motion.div
          className="categories-heading"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          <div>
            <span className="about-eyebrow">MADE FOR PIZZA LOVERS</span>
            <h2>Explore Categories</h2>
            <p>Find your favorite flavor and make every bite special.</p>
          </div>

          <Link href="/menu" className="categories-view-all">
            Explore Full Menu <ArrowUpRight size={18} />
          </Link>
        </motion.div>

        <motion.div
          className="categories-filters"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {filters.map((filter, index) => (
            <Link
              key={filter.name}
              href={filter.slug ? `/menu?category=${filter.slug}` : "/menu"}
              className={`category-filter ${index === 0 ? "category-filter-active" : ""}`}
            >
              {filter.name}
            </Link>
          ))}
        </motion.div>

        <div className="categories-grid">
          {categories.map((category, index) => (
            <motion.article
              key={category.slug}
              className="category-card"
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.65,
                delay: (index % 3) * 0.12,
                ease: "easeOut",
              }}
              whileHover={{ y: -7 }}
            >
              <Link
                href={`/menu?category=${category.slug}`}
                className="category-card-link"
              >
                <div className="category-image-wrap">
                  <div className="category-image">
                    <Image
                      src={category.image}
                      alt={category.alt}
                      fill
                      sizes="(max-width: 650px) 135px, 150px"
                      unoptimized
                    />
                  </div>
                  <span className="category-arrow">
                    <ArrowUpRight size={19} />
                  </span>
                </div>

                <div className="category-info">
                  <h3>{category.name}</h3>
                  <p>{category.description}</p>
                  <span className="category-explore">
                    Explore collection <ArrowUpRight size={15} />
                  </span>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}


