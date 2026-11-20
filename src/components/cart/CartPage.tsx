"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, ShoppingBag, Pizza, CheckCircle2 } from "lucide-react";
import { useCart } from "@/components/providers/CartProvider";
import CartItem from "@/components/cart/CartItem";
import CartSummary from "@/components/cart/CartSummary";

const DELIVERY_FEE = 60;

export default function CartPage() {
  const { items, totalItems, subtotal, updateQuantity, removeItem } = useCart();
  const [checkoutMessage, setCheckoutMessage] = useState("");

  const deliveryFee = items.length > 0 ? DELIVERY_FEE : 0;
  const total = subtotal + deliveryFee;

  function handleCheckout() {
    setCheckoutMessage("Demo checkout: live ordering and payment will be available after backend integration.");
  }

  return (
    <main className="cart-page">
      <div className="cart-page-container">
        <div className="cart-breadcrumb">
          <Link href="/">Home</Link>
          <span>/</span>
          <span>Shopping Cart</span>
        </div>

        <header className="cart-page-heading">
          <div>
            <span className="cart-eyebrow">YOUR DELICIOUS PICKS</span>
            <h1>Shopping <span>Cart.</span></h1>
            <p>Almost there! Review your favorites before checkout.</p>
          </div>
          <div className="cart-heading-icon"><ShoppingBag size={27} /></div>
        </header>

        {items.length === 0 ? (
          <section className="cart-empty-state">
            <div className="cart-empty-icon"><Pizza size={43} /></div>
            <span className="cart-eyebrow">YOUR CART IS WAITING</span>
            <h2>Nothing delicious here yet.</h2>
            <p>Your next favorite pizza is just a few clicks away.</p>
            <Link href="/menu#pizza-collection" className="cart-continue-button">
              <ArrowLeft size={17} /> Explore Pizza Collection
            </Link>
          </section>
        ) : (
          <div className="cart-layout">
            <section className="cart-items-section">
              <div className="cart-items-heading">
                <div>
                  <h2>Your Selection</h2>
                  <span>{totalItems} {totalItems === 1 ? "item" : "items"} in your cart</span>
                </div>
                <Link href="/menu" className="cart-add-more-link">
                  + Add More
                </Link>
              </div>

              <div className="cart-items-list">
                {items.map((item) => (
                  <CartItem
                    key={item.id}
                    item={item}
                    onUpdate={updateQuantity}
                    onRemove={removeItem}
                  />
                ))}
              </div>

              <Link href="/menu#pizza-collection" className="cart-continue-link">
                <ArrowLeft size={16} /> Continue Shopping
              </Link>
            </section>

            <div className="cart-summary-column">
              <CartSummary
                subtotal={subtotal}
                deliveryFee={deliveryFee}
                total={total}
                onCheckout={handleCheckout}
                disabled={items.length === 0}
              />

              {checkoutMessage && (
                <p className="cart-checkout-feedback">
                  <CheckCircle2 size={17} /> {checkoutMessage}
                </p>
              )}
            </div>
          </div>
        )}
      </div>
    </main>
  );
}

