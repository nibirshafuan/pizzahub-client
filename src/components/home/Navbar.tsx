"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Pizza,
  Search,
  ShoppingCart,
  UserRound,
  ChevronDown,
  Menu,
  X,
} from "lucide-react";
import { useCart } from "@/components/providers/CartProvider";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [search, setSearch] = useState("");
  const { totalItems } = useCart();

  return (
    <header className="navbar">
      <div className="navbar-container">
        <Link href="/" className="navbar-logo">
          <span className="navbar-logo-icon">
            <Pizza size={32} />
          </span>
          <span>
            Pizza<span className="navbar-logo-accent">Hub</span>
          </span>
        </Link>

        <nav className={`navbar-links ${mobileOpen ? "navbar-links-open" : ""}`}>
          <Link href="/" className="navbar-active" onClick={() => setMobileOpen(false)}>
            Home
          </Link>

          <Link href="#menu" onClick={() => setMobileOpen(false)}>
            Menu <ChevronDown size={14} />
          </Link>

          <Link href="#about" onClick={() => setMobileOpen(false)}>
            About Us
          </Link>

          <Link href="#gallery" onClick={() => setMobileOpen(false)}>
            Gallery
          </Link>

          <Link href="#contact" onClick={() => setMobileOpen(false)}>
            Contact
          </Link>
        </nav>

        <div className="navbar-actions">
          <form
            className="navbar-search"
            onSubmit={(event) => event.preventDefault()}
          >
            <Search size={19} />
            <input
              type="search"
              placeholder="Search for pizza, items..."
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              aria-label="Search for pizza or items"
            />
          </form>

          <Link href="/cart" className="navbar-cart" aria-label={`Shopping cart with ${totalItems} items`}>
            <ShoppingCart size={23} />
            <span className="navbar-cart-count">{totalItems}</span>
          </Link>

          <Link href="/sign-in" className="navbar-profile">
            <span className="navbar-profile-icon">
              <UserRound size={19} />
            </span>
            <span>Sign In</span>
          </Link>
        </div>

        <button
          type="button"
          className="navbar-mobile-toggle"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close navigation" : "Open navigation"}
        >
          {mobileOpen ? <X size={25} /> : <Menu size={25} />}
        </button>
      </div>
    </header>
  );
}
