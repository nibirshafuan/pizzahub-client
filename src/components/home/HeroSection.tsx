"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="hero-section">
      <div className="hero-decoration hero-decoration-one" />
      <div className="hero-decoration hero-decoration-two" />

      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-eyebrow">
            <span className="hero-eyebrow-dot" />
            AUTHENTIC <b>•</b> FRESH <b>•</b> DELICIOUS
          </div>

          <h1 className="hero-title">
            Authentic
            <br />
            Healthy <span>PIZZA</span>
          </h1>

          <p className="hero-description">
            Enjoy freshly baked, high-quality pizzas made
            with the finest ingredients. Every bite brings
            happiness to your table.
          </p>

          <div className="hero-buttons">
            <Link href="/menu" className="hero-primary-button">
              Order Now
              <ArrowRight size={19} />
            </Link>

            <Link href="/menu" className="hero-secondary-button">
              Explore Menu
            </Link>
          </div>

          <div className="hero-note">
            <span className="hero-note-dot" />
            Freshly baked with love, just for you.
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-image-glow" />
          <div className="hero-garnish-rays" aria-hidden="true" />

          <Image
            src="/images/pizza-hero.png"
            alt="Authentic pizza with fresh basil, tomatoes and spices"
            width={1107}
            height={680}
            priority
            className="hero-pizza-image"
          />

          <div className="hero-fresh-badge">
            <span className="hero-badge-icon">
              <Sparkles size={23} />
            </span>
            <div>
              <strong>100% Fresh</strong>
              <small>Quality Ingredients</small>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

