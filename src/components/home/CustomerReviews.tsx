"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const reviews = [
  {
    name: "Emily Watson",
    role: "Sample Customer",
    image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=300&h=300&fit=crop",
    review: "Loved the crispy crust and fresh toppings. Every bite was full of flavor!",
  },
  {
    name: "Daniel Smith",
    role: "Sample Customer",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop",
    review: "Ordering was simple, and the pizza was absolutely delicious. Great experience!",
  },
  {
    name: "Sophia Miller",
    role: "Sample Customer",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=300&h=300&fit=crop",
    review: "Fresh ingredients, amazing taste and a lovely experience. Highly enjoyable!",
  },
];

export default function CustomerReviews() {
  return (
    <section className="reviews-section" id="customer-reviews">
      <div className="reviews-container">
        <motion.div
          className="reviews-heading"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span>HAPPY CUSTOMERS</span>
          <h2>What People Say About Us</h2>
          <p>Good food creates great memories. Discover the PizzaHub experience.</p>
        </motion.div>

        <motion.div
          className="reviews-feature"
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.75 }}
        >
          <div className="reviews-photo">
            <Image
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=900&h=1100&fit=crop"
              alt="Portrait of a sample customer"
              fill
              sizes="(max-width: 750px) 100vw, 42vw"
              unoptimized
            />
            <div className="reviews-photo-label">
              <span>THE PIZZAHUB EXPERIENCE</span>
              <strong>Made with love, shared with joy.</strong>
            </div>
          </div>

          <div className="reviews-content">
            <div className="reviews-quote-icon">
              <Quote size={30} />
            </div>

            <div className="reviews-stars" aria-label="5 out of 5 stars">
              {Array.from({ length: 5 }).map((_, index) => (
                <Star key={index} size={19} fill="currentColor" />
              ))}
            </div>

            <blockquote>
              “The pizza was delicious, the ingredients tasted fresh, and the
              whole ordering experience was wonderfully simple. Definitely a
              place I would love to order from again!”
            </blockquote>

            <div className="reviews-divider" />

            <div className="reviews-customer">
              <div className="reviews-avatar">SC</div>
              <div>
                <h3>Sarah Carter</h3>
                <p>Sample Customer</p>
              </div>
              <span className="reviews-customer-mark">
                <Star size={17} fill="currentColor" />
              </span>
            </div>

            <span className="reviews-demo-note">
              Illustrative testimonial — not a verified customer review.
            </span>
          </div>
        </motion.div>

        <div className="reviews-grid">
          {reviews.map((review, index) => (
            <motion.article
              className="reviews-small-card"
              key={review.name}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, delay: index * 0.12 }}
              whileHover={{ y: -7 }}
            >
              <div className="reviews-small-top">
                <div className="reviews-small-person">
                  <div className="reviews-small-avatar">
                    <Image
                      src={review.image}
                      alt={review.name}
                      fill
                      sizes="60px"
                      unoptimized
                    />
                  </div>
                  <div>
                    <h3>{review.name}</h3>
                    <p>{review.role}</p>
                  </div>
                </div>

                <div className="reviews-small-stars">
                  <Star size={13} fill="currentColor" />
                  5.0
                </div>
              </div>

              <p className="reviews-small-text">“{review.review}”</p>

              <div className="reviews-small-footer">
                <span>Sample review</span>
                <Quote size={20} />
              </div>
            </motion.article>
          ))}
        </div>

        <p className="reviews-grid-note">
          All testimonials shown are illustrative demo content.
        </p>
      </div>
    </section>
  );
}
