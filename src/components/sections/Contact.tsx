"use client";

import { motion } from "framer-motion";
import { FaEnvelope, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

// TODO: replace with your real contact details before publishing.
const EMAIL = "your.email@example.com";
const SOCIAL_LINKS = [
  { Icon: FaGithub, href: "https://github.com/yourusername", label: "GitHub" },
  { Icon: FaLinkedin, href: "https://linkedin.com/in/yourusername", label: "LinkedIn" },
  { Icon: FaTwitter, href: "https://twitter.com/yourusername", label: "Twitter" },
];

const Contact = () => {
  return (
    <section id="contact" className="px-6 py-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6 }}
        className="mx-auto max-w-3xl text-center"
      >
        <h2 className="mb-4 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-4xl font-bold text-transparent dark:from-white dark:to-gray-400 md:text-5xl">
          Have a project in mind?
        </h2>
        <div className="mx-auto mb-10 h-1 w-20 rounded-full bg-gradient-to-r from-blue-600 to-purple-600" />

        <div className="glass glass-edge flex flex-col items-center gap-6 rounded-3xl p-10">
          <div className="glass flex h-14 w-14 items-center justify-center rounded-full">
            <FaEnvelope className="h-5 w-5 text-blue-500" aria-hidden="true" />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{EMAIL}</h3>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
              Usually replies within 24 hours. Open to freelance and full-time work.
            </p>
          </div>
          <motion.a
            href={`mailto:${EMAIL}`}
            className="rounded-full bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-4 font-medium text-white transition-shadow hover:shadow-lg hover:shadow-purple-500/50"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Say Hello
          </motion.a>

          <div className="flex justify-center gap-4 pt-2">
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
                <Icon className="h-5 w-5" />
              </motion.a>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;