import Link from "next/link";
import { ArrowRight, ChevronRight, Pizza } from "lucide-react";

export default function MenuHero() {
  return (
    <section className="menu-hero">
      <div className="menu-hero-container">
        <div className="menu-hero-content">
          <div className="menu-breadcrumb">
            <Link href="/">Home</Link>
            <ChevronRight size={14} />
            <span>Browse Menu</span>
          </div>

          <span className="menu-hero-eyebrow">
            <Pizza size={16} />
            MADE FRESH, SERVED WITH LOVE
          </span>

          <h1>
            Discover Your
            <br />
            Perfect <span>Pizza.</span>
          </h1>

          <p>
            From timeless classics to exciting new flavors,
            find the perfect slice for every craving and every occasion.
          </p>

          <div className="menu-hero-actions">
            <Link href="#pizza-collection" className="menu-hero-button">
              Explore Our Menu
              <ArrowRight size={18} />
            </Link>

            <span className="menu-hero-note">
              Fresh ingredients. Unforgettable taste.
            </span>
          </div>

          <div className="menu-hero-bottom">
            <span>01</span>
            <span className="menu-hero-line" />
            <span>EXPLORE THE COLLECTION</span>
          </div>
        </div>

        <div className="menu-hero-visual">
          <div className="menu-hero-image">
            <div className="menu-hero-image-label">
              <span>OUR SIGNATURE COLLECTION</span>
              <strong>Made for pizza lovers</strong>
            </div>
          </div>

          <div className="menu-hero-sticker">
            <span>100%</span>
            <small>FRESH<br />& DELICIOUS</small>
          </div>

          <div className="menu-hero-decoration" />
        </div>
      </div>
    </section>
  );
}