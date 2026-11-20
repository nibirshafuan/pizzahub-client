"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";

const features = [
  "Fresh ingredients, carefully selected",
  "Delicious recipes made with passion",
  "Quality and taste in every bite",
];

const fadeUp = {
  hidden: { opacity: 0, y: 35 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease: "easeOut" as const },
  },
};

export default function AboutSection() {
  return (
    <section className="about-section" id="about">
      <div className="about-container">
        <motion.div
          className="about-photo"
          initial={{ opacity: 0, x: -55, scale: 0.96 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
        >
          <Image
            src="https://images.unsplash.com/photo-1513104890138-7c749659a591"
            alt="Freshly prepared Italian pizza"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            unoptimized
            className="about-main-image"
          />
          <motion.div
            className="about-photo-caption"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <span>MADE FRESH</span>
            <strong>Made with love, served with joy.</strong>
          </motion.div>
        </motion.div>

        <motion.div
          className="about-content"
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.15 },
            },
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.span className="about-eyebrow" variants={fadeUp}>
            A LITTLE ABOUT US
          </motion.span>

          <motion.h2 variants={fadeUp}>
            The Story Behind
            <span> Every Slice</span>
          </motion.h2>

          <motion.p className="about-description" variants={fadeUp}>
            At PizzaHub, we believe great pizza is more than just food.
            It is about bringing people together, sharing happiness and
            creating delicious memories.
          </motion.p>

          <motion.p className="about-description" variants={fadeUp}>
            From carefully selected ingredients to freshly prepared
            recipes, every pizza is made with passion and attention
            to detail. We are here to make your every bite special.
          </motion.p>

          <motion.div className="about-feature-list" variants={fadeUp}>
            {features.map((feature, index) => (
              <motion.div
                className="about-feature"
                key={feature}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.13, duration: 0.5 }}
              >
                <span><Check size={15} /></span>
                {feature}
              </motion.div>
            ))}
          </motion.div>

          <motion.div variants={fadeUp}>
            <Link href="/menu" className="about-menu-button">
              Check Our Menu <ArrowRight size={18} />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
