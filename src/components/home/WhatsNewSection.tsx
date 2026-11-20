"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const stories = [
  {
    category: "OUR FOOD",
    title: "Freshly Made, Always Delicious",
    description: "Discover the taste of freshly prepared pizza made with quality ingredients.",
    image: "https://images.unsplash.com/photo-1579751626657-72bc17010498",
    alt: "Freshly baked pizza with delicious toppings",
  },
  {
    category: "OUR PLACE",
    title: "A Place Made for Pizza Lovers",
    description: "Enjoy good food, warm moments and great company at PizzaHub.",
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5",
    alt: "Warm and welcoming restaurant interior",
  },
  {
    category: "OUR PASSION",
    title: "Passion in Every Preparation",
    description: "Our love for great food inspires every pizza we prepare.",
    image: "https://images.unsplash.com/photo-1577219491135-ce391730fb2c",
    alt: "Chef preparing food in a professional kitchen",
  },
];

export default function WhatsNewSection() {
  return (
    <section className="whats-new-section" id="gallery">
      <div className="whats-new-container">
        <motion.div
          className="whats-new-heading"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          <div>
            <span className="about-eyebrow">DISCOVER PIZZAHUB</span>
            <h2>What's New</h2>
            <p>Fresh stories, delicious moments and a little more about us.</p>
          </div>

          <Link href="/menu" className="whats-new-link">
            Explore Menu <ArrowUpRight size={18} />
          </Link>
        </motion.div>

        <div className="whats-new-grid">
          {stories.map((story, index) => (
            <motion.article
              className="whats-new-card"
              key={story.title}
              initial={{ opacity: 0, y: 45 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.7,
                delay: index * 0.16,
                ease: "easeOut",
              }}
              whileHover={{ y: -9, transition: { duration: 0.25 } }}
            >
              <div className="whats-new-image">
                <Image
                  src={story.image}
                  alt={story.alt}
                  fill
                  sizes="(max-width: 700px) 100vw, (max-width: 1000px) 50vw, 33vw"
                  unoptimized
                />
              </div>

              <div className="whats-new-card-content">
                <span>{story.category}</span>
                <h3>{story.title}</h3>
                <p>{story.description}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
