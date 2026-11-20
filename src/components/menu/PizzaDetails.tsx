"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
  Star,
  ShoppingBag,
  Plus,
  Minus,
  Clock,
  MapPin,
  ChefHat,
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Leaf,
  Flame,
  Pizza as PizzaIcon,
} from "lucide-react";
import { motion } from "framer-motion";
import { pizzas } from "@/data/pizzas";
import { useCart } from "@/components/providers/CartProvider";

type PizzaDetailsProps = {
  pizzaId: string;
};

const ingredientsByCategory: Record<string, string[]> = {
  Classic: ["Fresh mozzarella", "Tomato sauce", "Italian basil", "Extra virgin olive oil"],
  Chicken: ["Juicy chicken", "Mozzarella cheese", "Signature sauce", "Fresh onions", "Herbs"],
  Cheese: ["Mozzarella", "Cheddar", "Parmesan", "Gorgonzola"],
  Veggie: ["Fresh vegetables", "Black olives", "Mozzarella", "Bell peppers", "Italian herbs"],
  Seafood: ["Fresh seafood", "Mozzarella", "Creamy sauce", "Italian herbs"],
  Special: ["Premium cheese", "Signature sauce", "Fresh toppings", "Italian herbs"],
};

const reviews = [
  {
    name: "Sarah Ahmed",
    date: "October 18, 2026",
    rating: 5,
    comment: "Absolutely delicious! The crust was perfectly baked and the toppings were fresh.",
    initials: "SA",
  },
  {
    name: "Tanvir Hasan",
    date: "October 12, 2026",
    rating: 5,
    comment: "Amazing flavor and great cheese quality. Definitely ordering again!",
    initials: "TH",
  },
  {
    name: "Nusrat Jahan",
    date: "October 5, 2026",
    rating: 4,
    comment: "Really enjoyable pizza with a lovely combination of ingredients.",
    initials: "NJ",
  },
];

export default function PizzaDetails({ pizzaId }: PizzaDetailsProps) {
  const pizza = pizzas.find((item) => item.id === pizzaId);
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);
  const { addItem } = useCart();

  const relatedPizzas = useMemo(() => {
    if (!pizza) return [];

    return pizzas
      .filter(
        (item) => item.id !== pizza.id && item.category === pizza.category
      )
      .concat(
        pizzas.filter(
          (item) => item.id !== pizza.id && item.category !== pizza.category
        )
      )
      .slice(0, 3);
  }, [pizza]);

  if (!pizza) {
    return (
      <section className="pizza-details-not-found">
        <div className="pizza-details-not-found-icon">
          <PizzaIcon size={38} />
        </div>
        <h1>Pizza Not Found</h1>
        <p>Sorry, we couldn't find the pizza you're looking for.</p>
        <Link href="/menu" className="pizza-back-button">
          <ArrowLeft size={17} /> Back to Menu
        </Link>
      </section>
    );
  }

  const ingredients =
    ingredientsByCategory[pizza.category] || ingredientsByCategory.Special;

  const subtotal = pizza.price * quantity;

  function handleAddToCart() {
    if (!pizza) return;

    for (let index = 0; index < quantity; index++) {
      addItem({
        id: pizza.id,
        name: pizza.name,
        price: pizza.price,
        image: pizza.image,
      });
    }

    setAdded(true);
  }
  return (
    <main className="pizza-details-page">
      <div className="pizza-details-container">
        <div className="pizza-details-breadcrumb">
          <Link href="/">Home</Link>
          <span>/</span>
          <Link href="/menu">Menu</Link>
          <span>/</span>
          <span>{pizza.name}</span>
        </div>

        <motion.section
          className="pizza-details-hero"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
        >
          <div className="pizza-details-image-wrap">
            <div className="pizza-details-image-decoration" />
            <img
              src={pizza.image}
              alt={pizza.name}
              className="pizza-details-main-image"
            />
            <span className="pizza-details-image-tag">{pizza.tag}</span>
          </div>

          <div className="pizza-details-info">
            <span className="pizza-details-eyebrow">
              PIZZAHUB SIGNATURE COLLECTION
            </span>

            <span className="pizza-details-category">{pizza.category}</span>

            <h1>{pizza.name}</h1>

            <div className="pizza-details-rating">
              <Star size={19} fill="currentColor" />
              <strong>{pizza.rating}</strong>
              <span>({pizza.reviews} reviews)</span>
            </div>

            <p className="pizza-details-description">{pizza.description}</p>

            <div className="pizza-details-price">
              <span>Our Price</span>
              <strong>৳{pizza.price}</strong>
            </div>

            <div className="pizza-details-meta">
              <div>
                <Clock size={19} />
                <span>
                  <strong>25–35 min</strong>
                  Preparation time
                </span>
              </div>
              <div>
                <MapPin size={19} />
                <span>
                  <strong>{pizza.location}</strong>
                  Available location
                </span>
              </div>
            </div>

            <div className="pizza-details-order">
              <div className="pizza-quantity-control">
                <button
                  type="button"
                  onClick={() => {
                    setQuantity((current) => Math.max(1, current - 1));
                    setAdded(false);
                  }}
                  aria-label="Decrease quantity"
                  disabled={quantity <= 1}
                >
                  <Minus size={17} />
                </button>

                <span>{quantity}</span>

                <button
                  type="button"
                  onClick={() => {
                    setQuantity((current) => current + 1);
                    setAdded(false);
                  }}
                  aria-label="Increase quantity"
                >
                  <Plus size={17} />
                </button>
              </div>

              <button
                type="button"
                className={`pizza-details-add-button ${added ? "is-added" : ""}`}
                onClick={handleAddToCart}
              >
                {added ? <CheckCircle2 size={19} /> : <ShoppingBag size={19} />}
                {added ? "Added Successfully" : "Add to Cart"}
              </button>
            </div>

            <div className="pizza-details-subtotal">
              <span>{quantity} × ৳{pizza.price}</span>
              <strong>Subtotal: ৳{subtotal}</strong>
            </div>

            {added && (
              <p className="pizza-cart-feedback">
                <CheckCircle2 size={16} />
                {quantity} {pizza.name} added to your cart.
              </p>
            )}
          </div>
        </motion.section>

        <section className="pizza-detail-lower-grid">
          <motion.div
            className="pizza-ingredients-section"
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="pizza-section-eyebrow">FRESH & DELICIOUS</span>
            <h2>What's Inside <span>Your Pizza?</span></h2>
            <p className="pizza-section-description">
              Carefully selected ingredients come together to create every delicious bite.
            </p>

            <div className="pizza-ingredients-grid">
              {ingredients.map((ingredient, index) => (
                <div className="pizza-ingredient-item" key={ingredient}>
                  <span className="pizza-ingredient-icon">
                    {index === 0 ? <Flame size={19} /> : <Leaf size={19} />}
                  </span>
                  <span>{ingredient}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="pizza-preparation-card"
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="pizza-preparation-icon">
              <ChefHat size={30} />
            </div>
            <span>MADE FRESH FOR YOU</span>
            <h3>Prepared with Care</h3>
            <p>
              Every pizza is prepared fresh with carefully selected ingredients
              and attention to every detail.
            </p>
            <div className="pizza-preparation-time">
              <Clock size={20} />
              <strong>25–35 Minutes</strong>
            </div>
          </motion.div>
        </section>

        <section className="pizza-vendor-section">
          <div className="pizza-vendor-icon">
            <PizzaIcon size={29} />
          </div>
          <div className="pizza-vendor-content">
            <span>YOUR LOCAL PIZZA PARTNER</span>
            <h3>PizzaHub Kitchen</h3>
            <p>
              <MapPin size={15} /> {pizza.location}, Bangladesh
            </p>
          </div>
          <div className="pizza-vendor-rating">
            <Star size={17} fill="currentColor" />
            <strong>4.8</strong>
            <span>Demo vendor rating</span>
          </div>
        </section>

        <section className="pizza-reviews-section">
          <div className="pizza-section-heading">
            <div>
              <span className="pizza-section-eyebrow">CUSTOMER FEEDBACK</span>
              <h2>What People <span>Say</span></h2>
            </div>
            <div className="pizza-reviews-summary">
              <Star size={20} fill="currentColor" />
              <strong>{pizza.rating}</strong>
              <span>Demo rating</span>
            </div>
          </div>

          <div className="pizza-reviews-grid">
            {reviews.map((review) => (
              <article className="pizza-review-card" key={review.name}>
                <div className="pizza-review-top">
                  <div className="pizza-review-avatar">{review.initials}</div>
                  <div>
                    <h3>{review.name}</h3>
                    <span>{review.date}</span>
                  </div>
                </div>
                <div className="pizza-review-stars">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Star
                      key={index}
                      size={15}
                      fill={index < review.rating ? "currentColor" : "none"}
                    />
                  ))}
                </div>
                <p>{review.comment}</p>
              </article>
            ))}
          </div>
          <p className="pizza-demo-note">
            Reviews and ratings shown here are illustrative demo content.
          </p>
        </section>

        <section className="pizza-related-section">
          <div className="pizza-section-heading">
            <div>
              <span className="pizza-section-eyebrow">MORE TO LOVE</span>
              <h2>You May Also <span>Like</span></h2>
            </div>
            <Link href="/menu" className="pizza-view-all">
              View All Pizzas <ArrowRight size={17} />
            </Link>
          </div>

          <div className="pizza-related-grid">
            {relatedPizzas.map((item) => (
              <Link
                href={`/menu/${item.id}`}
                className="pizza-related-card"
                key={item.id}
              >
                <div className="pizza-related-image">
                  <img src={item.image} alt={item.name} />
                </div>
                <div className="pizza-related-content">
                  <span>{item.category}</span>
                  <h3>{item.name}</h3>
                  <div>
                    <strong>৳{item.price}</strong>
                    <span>
                      <Star size={13} fill="currentColor" /> {item.rating}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <div className="pizza-details-back">
          <Link href="/menu#pizza-collection">
            <ArrowLeft size={17} /> Back to Pizza Collection
          </Link>
        </div>
      </div>
    </main>
  );
}






