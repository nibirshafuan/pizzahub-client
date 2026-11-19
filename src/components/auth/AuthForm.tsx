"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Eye,
  EyeOff,
  Mail,
  Lock,
  User,
  ArrowRight,
  Pizza,
  CheckCircle2,
} from "lucide-react";
import { signIn, signUp } from "@/lib/auth-client";

type AuthFormProps = {
  mode: "sign-in" | "sign-up";
};

export default function AuthForm({ mode }: AuthFormProps) {
  const isSignUp = mode === "sign-up";

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");
    setSuccess("");
    setLoading(true);

    try {
      if (isSignUp) {
        const result = await signUp.email({
          name,
          email,
          password,
          callbackURL: "/",
        });

        if (result.error) {
          setError(result.error.message || "Unable to create your account.");
          return;
        }

        setSuccess("Account created successfully! You can now sign in.");
      } else {
        const result = await signIn.email({
          email,
          password,
          callbackURL: "/",
        });

        if (result.error) {
          setError(result.error.message || "Invalid email or password.");
          return;
        }

        window.location.href = "/";
      }
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="auth-page">
      <section className="auth-layout">
        <div className="food-panel">
          <div className="food-panel-glow" />

          <motion.div
            className="food-panel-content"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.35,
                  delayChildren: 0.2,
                },
              },
            }}
          >
            <motion.div
              className="food-brand"
              variants={{
                hidden: { opacity: 0, y: 12 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.7 }}
            >
              <Pizza size={23} />
              <span>PizzaHub</span>
            </motion.div>

            <div className="food-art-area">
              <motion.div
                className="food-orbit orbit-one"
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 0.35 }}
                transition={{ duration: 2, delay: 0.6 }}
              />
              <motion.div
                className="food-orbit orbit-two"
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 0.25 }}
                transition={{ duration: 2, delay: 0.9 }}
              />

              <motion.img
                src="https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=1000&q=85"
                alt="Freshly baked PizzaHub pizza"
                className="food-art-image"
                initial={{
                  opacity: 0,
                  scale: 0.65,
                  y: 35,
                  rotate: -8,
                }}
                animate={{
                  opacity: 1,
                  scale: [0.65, 1.06, 1],
                  y: [35, -8, 0],
                  rotate: [-8, 3, 0],
                }}
                transition={{
                  duration: 3.5,
                  delay: 0.5,
                  ease: "easeOut",
                }}
              />

              <motion.div
                className="floating-food-badge"
                initial={{ opacity: 0, x: 20, y: 10 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ delay: 3.1, duration: 0.8 }}
              >
                <span>✦</span> Freshly baked
              </motion.div>
            </div>

            <motion.div
              className="food-message"
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 3.2 }}
            >
              <h2>
                Delicious food,
                <br />
                delivered with love.
              </h2>
              <p>
                Discover your favourite flavours and enjoy every bite.
                Your next delicious moment starts here.
              </p>
            </motion.div>

            <motion.div
              className="food-panel-footer"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 4, duration: 0.8 }}
            >
              <span>FRESH</span>
              <i />
              <span>HOT</span>
              <i />
              <span>DELICIOUS</span>
            </motion.div>
          </motion.div>
        </div>

        <div className="form-panel">
          <motion.div
            className="auth-card"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: {
                transition: {
                  delayChildren: 2.6,
                  staggerChildren: 0.18,
                },
              },
            }}
          >
            <motion.div
              className="auth-brand"
              variants={{
                hidden: { opacity: 0, y: 8 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <div className="auth-brand-icon">
                <Pizza size={22} />
              </div>
              <span>
                Pizza<span>Hub</span>
              </span>
            </motion.div>

            <motion.div
              className="auth-heading"
              variants={{
                hidden: { opacity: 0, y: 8 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <span className="auth-eyebrow">
                {isSignUp ? "JOIN THE PIZZAHUB FAMILY" : "WELCOME BACK"}
              </span>
              <h1>
                {isSignUp ? "Create your account" : "Welcome back!"}
              </h1>
              <p>
                {isSignUp
                  ? "Sign up to discover delicious food and enjoy every bite."
                  : "Log in below or create a new PizzaHub account."}
              </p>
            </motion.div>

            <motion.form
              onSubmit={handleSubmit}
              className="auth-form"
              variants={{
                hidden: { opacity: 0, y: 8 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              {isSignUp && (
                <label className="auth-field">
                  <span>Full name</span>
                  <div className="auth-input-wrap">
                    <User size={17} />
                    <input
                      type="text"
                      placeholder="Enter your name"
                      value={name}
                      onChange={(event) => setName(event.target.value)}
                      required
                      autoComplete="name"
                    />
                  </div>
                </label>
              )}

              <label className="auth-field">
                <span>Email</span>
                <div className="auth-input-wrap">
                  <Mail size={17} />
                  <input
                    type="email"
                    placeholder="sample@name.com"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    required
                    autoComplete="email"
                  />
                </div>
              </label>

              <label className="auth-field">
                <span>Password</span>
                <div className="auth-input-wrap">
                  <Lock size={17} />
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                    required
                    minLength={8}
                    autoComplete={isSignUp ? "new-password" : "current-password"}
                  />
                  <button
                    type="button"
                    className="password-toggle"
                    onClick={() => setShowPassword(!showPassword)}
                    aria-label={showPassword ? "Hide password" : "Show password"}
                  >
                    {showPassword ? <EyeOff size={17} /> : <Eye size={17} />}
                  </button>
                </div>
              </label>

              {error && (
                <div className="auth-message auth-error">{error}</div>
              )}

              {success && (
                <div className="auth-message auth-success">
                  <CheckCircle2 size={17} />
                  {success}
                </div>
              )}

              <button
                className="auth-submit"
                type="submit"
                disabled={loading}
              >
                <span>
                  {loading
                    ? "Please wait..."
                    : isSignUp
                      ? "Create account"
                      : "Login"}
                </span>
                {!loading && <ArrowRight size={18} />}
              </button>
            </motion.form>

            <motion.div
              className="auth-switch"
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1 },
              }}
            >
              {isSignUp
                ? "Already have an account?"
                : "Don't have an account?"}
              {" "}
              <Link href={isSignUp ? "/sign-in" : "/sign-up"}>
                {isSignUp ? "Sign in" : "Sign up"}
              </Link>
            </motion.div>

            <motion.div
              className="auth-legal"
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1 },
              }}
            >
              © 2026 PizzaHub. Made for pizza lovers.
            </motion.div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
