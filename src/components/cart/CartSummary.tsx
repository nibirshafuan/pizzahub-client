"use client";

import { ArrowRight, ShieldCheck, Truck } from "lucide-react";

type Props = {
  subtotal: number;
  deliveryFee: number;
  total: number;
  onCheckout: () => void;
  disabled: boolean;
};

export default function CartSummary({
  subtotal,
  deliveryFee,
  total,
  onCheckout,
  disabled,
}: Props) {
  return (
    <aside className="cart-summary">
      <span className="cart-summary-eyebrow">YOUR ORDER</span>
      <h2>Order Summary</h2>

      <div className="cart-summary-lines">
        <div><span>Subtotal</span><strong>৳{subtotal}</strong></div>
        <div><span>Delivery Fee</span><strong>৳{deliveryFee}</strong></div>
      </div>

      <div className="cart-summary-total">
        <span>Total Amount</span>
        <strong>৳{total}</strong>
      </div>

      <button className="cart-checkout-button" onClick={onCheckout} disabled={disabled}>
        Proceed to Checkout <ArrowRight size={18} />
      </button>

      <div className="cart-summary-note">
        <Truck size={18} />
        <span>Freshly prepared and delivered to your door.</span>
      </div>

      <div className="cart-secure-note">
        <ShieldCheck size={17} />
        <span>Secure checkout experience</span>
      </div>

      <p className="cart-demo-note">
        Delivery fee is an illustrative demo charge. Checkout is not connected to live ordering yet.
      </p>
    </aside>
  );
}
