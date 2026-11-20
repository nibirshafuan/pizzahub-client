"use client";

import { motion } from "framer-motion";
import { Leaf, Truck, Award, ShoppingBag } from "lucide-react";

const features = [
  {
    icon: Leaf,
    title: "Fresh Ingredients",
    description: "We use fresh, carefully selected ingredients to make every pizza delicious.",
    number: "01",
  },
  {
    icon: Truck,
    title: "Fast Delivery",
    description: "Enjoy hot and freshly baked pizza delivered right to your doorstep.",
    number: "02",
  },
  {
    icon: Award,
    title: "Best Quality",
    description: "Experience exceptional taste with quality ingredients in every bite.",
    number: "03",
  },
  {
    icon: ShoppingBag,
    title: "Easy Ordering",
    description: "Order your favorite pizza easily with a smooth and simple experience.",
    number: "04",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="why-section" id="why-choose-us">
      <div className="why-container">
        <motion.div
          className="why-heading"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          <span className="why-eyebrow">THE PIZZAHUB DIFFERENCE</span>
          <h2>Why Choose <span>PizzaHub?</span></h2>
          <p>
            More than just pizza. We bring fresh flavors, quality and happiness
            to every order.
          </p>
        </motion.div>

        <div className="why-grid">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <motion.article
                className="why-card"
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.55, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
              >
                <div className="why-card-top">
                  <span className="why-card-number">{feature.number}</span>
                  <div className="why-icon">
                    <Icon size={27} strokeWidth={1.8} />
                  </div>
                </div>

                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
                <div className="why-card-line" />
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
