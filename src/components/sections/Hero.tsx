"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { Variants } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

// TODO: point these at your real profiles before publishing.
const SOCIAL_LINKS = [
  { Icon: FaGithub, href: "https://github.com/yourusername", label: "GitHub" },
  { Icon: FaLinkedin, href: "https://linkedin.com/in/yourusername", label: "LinkedIn" },
  { Icon: FaTwitter, href: "https://twitter.com/yourusername", label: "Twitter" },
];

const Hero = () => {
  const shouldReduceMotion = useReducedMotion();

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.2,
        delayChildren: shouldReduceMotion ? 0 : 0.3,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: shouldReduceMotion ? 0 : 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: shouldReduceMotion
        ? { duration: 0.15 }
        : { type: "spring", stiffness: 100 },
    },
  };

  return (
    <section
      id="hero"
      className="relative flex items-center justify-center overflow-hidden px-6 pb-20 pt-32 md:pb-28 md:pt-40"
    >
      {/* Soft glow accents (the aurora field from Header sits behind everything) */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/4 top-1/4 h-96 w-96 animate-pulse rounded-full bg-purple-500/10 blur-3xl" />
        <div className="delay-1000 absolute bottom-1/4 right-1/4 h-96 w-96 animate-pulse rounded-full bg-blue-500/10 blur-3xl" />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="mx-auto max-w-4xl text-center"
      >
        <motion.div
          variants={itemVariants}
          className="glass mb-4 inline-block rounded-full px-4 py-2"
        >
          <span className="text-sm font-medium bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Available for freelance work
          </span>
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="mb-6 text-5xl font-bold md:text-7xl bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent dark:from-white dark:via-blue-400 dark:to-purple-400"
        >
          Hi, I&apos;m Vaswar Saha
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="mx-auto mb-8 max-w-2xl text-xl text-gray-600 dark:text-gray-400 md:text-2xl"
        >
          Full Stack Developer &amp; UI/UX Enthusiast
        </motion.p>

        <motion.p
          variants={itemVariants}
          className="mx-auto mb-12 max-w-2xl text-lg text-gray-600 dark:text-gray-400"
        >
          I build exceptional digital experiences that make people&apos;s lives
          easier and more enjoyable.
        </motion.p>

        <motion.div variants={itemVariants} className="mb-12 flex justify-center gap-4">
          <motion.a
            href="#projects"
            className="rounded-full bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-4 font-medium text-white transition-shadow hover:shadow-lg hover:shadow-purple-500/50"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View My Work
          </motion.a>
          <motion.a
            href="#contact"
            className="glass rounded-full px-8 py-4 font-medium text-gray-900 dark:text-white"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get In Touch
          </motion.a>
        </motion.div>

        <motion.div variants={itemVariants} className="flex justify-center gap-6">
          {SOCIAL_LINKS.map(({ Icon, href, label }) => (
            <motion.a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="glass rounded-full p-3 text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400"
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              aria-label={label}
            >
              <Icon className="h-6 w-6" />
            </motion.a>
          ))}
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="mt-16"
          animate={shouldReduceMotion ? {} : { y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <svg className="mx-auto h-6 w-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;