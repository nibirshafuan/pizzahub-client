"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Tag } from "lucide-react";

export default function SpecialOffers() {
  return (
    <section className="offers-section" id="special-offers">
      <div className="offers-container">
        <motion.div
          className="offers-content"
          initial={{ opacity: 0, x: -35 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
        >
          <span className="offers-eyebrow">
            <Sparkles size={15} />
            SPECIAL OFFER
          </span>

          <h2>
            A Slice of Happiness,
            <span> A Deal to Love!</span>
          </h2>

          <p className="offers-description">
            Make your pizza moments even more special. Discover our
            promotional offer and enjoy every delicious bite.
          </p>

          <div className="offers-discount">
            <div className="offers-discount-icon">
              <Tag size={21} />
            </div>
            <div>
              <small>ILLUSTRATIVE DEMO OFFER</small>
              <strong>20% OFF</strong>
              <span>On selected pizza orders</span>
            </div>
          </div>

          <Link href="/menu" className="offers-button">
            Explore Offer <ArrowRight size={18} />
          </Link>

          <span className="offers-note">
            Demo promotion — not an active discount.
          </span>
        </motion.div>

        <motion.div
          className="offers-visual"
          initial={{ opacity: 0, scale: 0.92 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
        >
          <div className="offers-image-glow" />
          <div className="offers-image-ring" />

          <Image
            src="https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?w=1100&h=900&fit=crop"
            alt="Freshly baked pizza with delicious toppings"
            fill
            sizes="(max-width: 750px) 100vw, 55vw"
            unoptimized
          />

          <div className="offers-floating-badge">
            <span>DELICIOUS</span>
            <strong>20%</strong>
            <small>OFF</small>
          </div>

          <div className="offers-image-caption">
            <Sparkles size={16} />
            Freshly baked. Always delightful.
          </div>
        </motion.div>
      </div>
    </section>
  );
}
