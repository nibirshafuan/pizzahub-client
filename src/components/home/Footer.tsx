import Link from "next/link";
import {
  Globe,
  Camera,
  Send,
  Play,
  MapPin,
  Phone,
  Mail,
  Clock,
  Heart,
  ArrowUpRight,
  Pizza,
} from "lucide-react";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "Our Story", href: "#about" },
  { label: "Explore Categories", href: "#categories" },
  { label: "Popular Pizzas", href: "#popular-pizzas" },
  { label: "Special Offers", href: "#special-offers" },
];

const supportLinks = [
  { label: "Customer Reviews", href: "#reviews" },
  { label: "Newsletter", href: "#newsletter" },
  { label: "Browse Menu", href: "/menu" },
  { label: "Contact Us", href: "#newsletter" },
];

export default function Footer() {
  return (
    <footer className="footer-section">
      <div className="footer-container">
        <div className="footer-main">
          <div className="footer-brand">
            <Link href="/" className="footer-logo">
              <span className="footer-logo-icon">
                <Pizza size={25} />
              </span>
              <span>Pizza<span>Hub</span></span>
            </Link>

            <p>
              Bringing people together, one delicious slice at a time.
              Fresh ingredients, amazing flavors and happiness in every bite.
            </p>

            <div className="footer-socials">
              <a href="https://www.facebook.com/" target="_blank" rel="noreferrer" aria-label="Facebook">
                <Globe size={17} />
              </a>
              <a href="https://www.instagram.com/" target="_blank" rel="noreferrer" aria-label="Instagram">
                <Camera size={17} />
              </a>
              <a href="https://www.twitter.com/" target="_blank" rel="noreferrer" aria-label="Twitter">
                <Send size={17} />
              </a>
              <a href="https://www.youtube.com/" target="_blank" rel="noreferrer" aria-label="YouTube">
                <Play size={17} />
              </a>
            </div>
          </div>

          <div className="footer-column">
            <h3>Quick Links</h3>
            <ul>
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href}>
                    {link.label}
                    <ArrowUpRight size={13} />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-column">
            <h3>Customer Support</h3>
            <ul>
              {supportLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href}>
                    {link.label}
                    <ArrowUpRight size={13} />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-column footer-contact">
            <h3>Get in Touch</h3>

            <div className="footer-contact-item">
              <span><MapPin size={17} /></span>
              <p>Serving pizza lovers in Bangladesh</p>
            </div>

            <div className="footer-contact-item">
              <span><Phone size={17} /></span>
              <p>Customer support coming soon</p>
            </div>

            <div className="footer-contact-item">
              <span><Mail size={17} /></span>
              <p>Stay connected through our newsletter</p>
            </div>

            <div className="footer-contact-item">
              <span><Clock size={17} /></span>
              <p>Freshly prepared, just for you</p>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} PizzaHub. All rights reserved.</p>

          <div className="footer-bottom-links">
            <Link href="#newsletter">Privacy</Link>
            <span />
            <Link href="#newsletter">Terms</Link>
          </div>

          <p className="footer-made">
            Made with <span><Heart size={13} fill="currentColor" /></span> for pizza lovers
          </p>
        </div>
      </div>
    </footer>
  );
}


