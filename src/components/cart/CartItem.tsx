"use client";

import Image from "next/image";
import { Minus, Plus, Trash2 } from "lucide-react";
import type { CartItem as CartItemType } from "@/components/providers/CartProvider";

type Props = {
  item: CartItemType;
  onUpdate: (id: string, quantity: number) => void;
  onRemove: (id: string) => void;
};

export default function CartItem({ item, onUpdate, onRemove }: Props) {
  return (
    <article className="cart-item">
      <div className="cart-item-image">
        <img src={item.image} alt={item.name} />
      </div>

      <div className="cart-item-info">
        <h3>{item.name}</h3>
        <span className="cart-item-unit-price">৳{item.price} / item</span>

        <div className="cart-item-controls">
          <div className="cart-quantity-control">
            <button onClick={() => onUpdate(item.id, item.quantity - 1)} disabled={item.quantity <= 1} aria-label="Decrease quantity">
              <Minus size={15} />
            </button>
            <span>{item.quantity}</span>
            <button onClick={() => onUpdate(item.id, item.quantity + 1)} aria-label="Increase quantity">
              <Plus size={15} />
            </button>
          </div>

          <button className="cart-remove-button" onClick={() => onRemove(item.id)}>
            <Trash2 size={15} /> Remove
          </button>
        </div>
      </div>

      <strong className="cart-item-total">৳{item.price * item.quantity}</strong>
    </article>
  );
}
