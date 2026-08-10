import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaHeart } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { Icon: FaGithub, href: "https://github.com/yourusername", label: "GitHub" },
    { Icon: FaLinkedin, href: "https://linkedin.com/in/yourusername", label: "LinkedIn" },
    { Icon: FaTwitter, href: "https://twitter.com/yourusername", label: "Twitter" },
    { Icon: FaEnvelope, href: "mailto:your.email@example.com", label: "Email" },
  ];

  return (
    <footer className="px-6 pb-10 pt-4">
      <div className="glass glass-edge mx-auto max-w-6xl rounded-3xl p-8 md:p-12">
        <div className="mb-8 grid gap-8 md:grid-cols-3">
          <div>
            <h3 className="mb-4 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-2xl font-bold text-transparent">
              Vaswar Saha
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Building digital experiences that make a difference.
            </p>
          </div>

          <div>
            <h4 className="mb-4 text-lg font-semibold text-gray-900 dark:text-white">Quick Links</h4>
            <ul className="space-y-2">
              {["Home", "About", "Projects", "Skills", "Contact"].map((link) => (
                <li key={link}>
                  <motion.a
                    href={`#${link.toLowerCase() === "home" ? "hero" : link.toLowerCase()}`}
                    className="text-gray-600 transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                    whileHover={{ x: 5 }}
                  >
                    {link}
                  </motion.a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-lg font-semibold text-gray-900 dark:text-white">Connect</h4>
            <div className="flex gap-4">
              {socialLinks.map(({ Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass rounded-lg p-3 text-gray-700 dark:text-gray-200"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label={label}
                >
                  <Icon className="h-5 w-5" />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-black/10 pt-8 text-center text-gray-600 dark:border-white/10 dark:text-gray-400">
          <p className="flex items-center justify-center gap-2">
            Made with <FaHeart className="animate-pulse text-red-500" /> by Vaswar Saha
          </p>
          <p className="mt-2 text-sm">© {currentYear} All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;