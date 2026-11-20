"use client";

import { useState } from "react";
import { ArrowRight, Mail, Sparkles } from "lucide-react";

export default function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function handleSubscribe(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!email.trim()) return;

    setMessage("Thank you! Newsletter subscription will be available soon.");
    setEmail("");
  }

  return (
    <section className="newsletter-section" id="newsletter">
      <div className="newsletter-container">
        <div className="newsletter-decoration newsletter-decoration-one" />
        <div className="newsletter-decoration newsletter-decoration-two" />

        <div className="newsletter-content">
          <span className="newsletter-eyebrow">
            <Sparkles size={15} />
            STAY IN THE LOOP
          </span>

          <h2>
            Get Delicious
            <span>Updates!</span>
          </h2>

          <p>
            Subscribe to our newsletter and stay updated with
            exciting pizza deals, fresh arrivals and special offers.
          </p>

          <form className="newsletter-form" onSubmit={handleSubscribe}>
            <div className="newsletter-input-wrap">
              <Mail size={19} />
              <input
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="Enter your email address"
                aria-label="Email address"
                required
              />
            </div>

            <button type="submit">
              Subscribe <ArrowRight size={18} />
            </button>
          </form>

          {message && (
            <p className="newsletter-message" role="status">
              {message}
            </p>
          )}

          <span className="newsletter-privacy">
            Fresh updates only. No spam, ever!
          </span>
        </div>

        <div className="newsletter-visual" aria-hidden="true">
          <div className="newsletter-pizza-circle">
            <img
              src="https://images.unsplash.com/photo-1590947132387-155cc02f3212?w=800&h=800&fit=crop"
              alt=""
            />
          </div>

          <div className="newsletter-floating-card">
            <Sparkles size={17} />
            <span>Made fresh, delivered with love!</span>
          </div>

          <div className="newsletter-small-decoration">🍕</div>
        </div>
      </div>
    </section>
  );
}

