"use client";

import React, { useEffect, useState } from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaMoon, FaSun } from "react-icons/fa";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";

// Dynamic import for Skills
const Skills = dynamic(() => import("../sections/Skills"), { ssr: false });

/* ---------- CONFIG ---------- */
const AUTHOR_NAME = "Vaswar Saha";
const PROFILE_IMAGE = "/profile.jpg";
const RESUME_LINK = "/resume.pdf";

/* ---------- Cursor Animation Hook ---------- */
function useAnimatedCursor() {
  useEffect(() => {
    const cursor = document.createElement("div");
    cursor.style.position = "fixed";
    cursor.style.top = "0";
    cursor.style.left = "0";
    cursor.style.width = "12px";
    cursor.style.height = "12px";
    cursor.style.borderRadius = "50%";
    cursor.style.pointerEvents = "none";
    cursor.style.zIndex = "9999";
    cursor.style.background = "#6366f1";
    cursor.style.transition = "transform 0.12s ease-out";
    document.body.appendChild(cursor);

    const move = (e: MouseEvent) => {
      cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);
}

/* ---------- Navigation ---------- */
function Navigation() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved === "dark") {
      setTheme("dark");
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleTheme = () => {
    const next = theme === "light" ? "dark" : "light";
    setTheme(next);
    document.documentElement.classList.toggle("dark", next === "dark");
    localStorage.setItem("theme", next);
  };

  return (
    <motion.nav
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 w-full z-50 bg-white/70 dark:bg-black/70 backdrop-blur shadow"
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex justify-between items-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600"
        >
          {AUTHOR_NAME}
        </motion.div>

        <div className="flex items-center gap-4">
          <a href="#about" className="hover:text-blue-500">About</a>
          <a href="#projects" className="hover:text-blue-500">Projects</a>
          <a href="#skills" className="hover:text-blue-500">Skills</a>

          <button
            onClick={toggleTheme}
            className="p-2 rounded-md bg-gray-100 dark:bg-gray-800"
          >
            {theme === "light" ? <FaMoon /> : <FaSun />}
          </button>
        </div>
      </div>
    </motion.nav>
  );
}

/* ---------- Hero Section ---------- */
function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-6 pt-24">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="max-w-4xl mx-auto text-center"
      >
        <h1 className="text-5xl md:text-6xl font-extrabold mb-6">
          Hi, I'm {AUTHOR_NAME}
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
          Full-Stack Developer • UI/UX Enthusiast
        </p>

        <motion.a
          whileHover={{ scale: 1.1 }}
          className="px-8 py-4 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white inline-block"
          href="#projects"
        >
          View My Work
        </motion.a>
      </motion.div>
    </section>
  );
}

/* ---------- About Section ---------- */
function About() {
  return (
    <section id="about" className="py-20 px-6 bg-gray-50 dark:bg-gray-900/50">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center"
      >
        <img
          src={PROFILE_IMAGE}
          alt="Profile"
          className="rounded-3xl shadow-lg"
        />

        <div>
          <h2 className="text-4xl font-bold mb-4">About Me</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            I build modern, fast, and beautiful web experiences using Next.js,
            React, and TypeScript.
          </p>
        </div>
      </motion.div>
    </section>
  );
}

/* ---------- Projects Section ---------- */
function Projects() {
  return (
    <section id="projects" className="py-20 px-6">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold">Projects</h2>
      </div>
      <p className="text-center text-gray-500">Add your real projects here.</p>
    </section>
  );
}

/* ---------- Footer ---------- */
function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-10 text-center">
      <div>Made with ❤️ by {AUTHOR_NAME}</div>
      <div className="text-gray-400 text-sm mt-2">
        © {new Date().getFullYear()} All rights reserved.
      </div>
    </footer>
  );
}

/* ---------- MAIN PAGE ---------- */
export default function UpdatedPortfolioComponents() {
  useAnimatedCursor();

  return (
    <div className="font-sans">
      <Navigation />
      <main className="bg-white dark:bg-black min-h-screen">
        <Hero />
        <About />
        <Projects />
        <Skills />
      </main>
      <Footer />
    </div>
  );
}
