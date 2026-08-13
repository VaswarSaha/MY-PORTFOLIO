import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FaMoon, FaSun, FaBars, FaTimes } from "react-icons/fa";

const NAV_ITEMS = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];

const Navigation = () => {
  const [activeSection, setActiveSection] = useState("hero");
  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [menuOpen, setMenuOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  // The no-flash script in _document.tsx already applies the correct
  // .dark/.light class to <html> before hydration, so just read it back
  // into state here instead of re-deriving it from localStorage/system
  // preference (avoids the two sources of truth disagreeing).
  useEffect(() => {
    const isDark = document.documentElement.classList.contains("dark");
    setTheme(isDark ? "dark" : "light");
  }, []);

  const toggleTheme = () => {
    const next = theme === "light" ? "dark" : "light";
    setTheme(next);
    document.documentElement.classList.toggle("dark", next === "dark");
    document.documentElement.classList.toggle("light", next === "light");
    window.localStorage.setItem("theme", next);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrolled(currentScrollY > 50);

      // Hide the navbar while scrolling down, reveal it while scrolling up.
      // Stay visible near the top of the page regardless of direction.
      setHidden(currentScrollY > lastScrollY && currentScrollY > 120);
      setLastScrollY(currentScrollY);

      const sections = NAV_ITEMS.map((item) => item.id);
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const scrollToSection = (id: string) => {
    setMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 90;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4">
      <motion.nav
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: hidden ? -120 : 0, opacity: 1 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className={`glass glass-edge w-full max-w-5xl rounded-full px-5 py-3 transition-shadow duration-300 ${
          scrolled ? "shadow-[0_10px_30px_-15px_rgba(0,0,0,0.4)]" : ""
        }`}
      >
        <div className="flex items-center justify-between">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
          >
            Vaswar Saha
          </motion.div>

          <div className="hidden items-center gap-6 md:flex">
            {NAV_ITEMS.map((item) => (
              <motion.button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                aria-current={activeSection === item.id ? "page" : undefined}
                className={`relative px-2 py-1 text-sm font-medium transition-colors ${
                  activeSection === item.id
                    ? "text-blue-600 dark:text-blue-400"
                    : "text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.label}
                {activeSection === item.id && (
                  <motion.div
                    layoutId="activeSection"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 rounded-full bg-gradient-to-r from-blue-600 to-purple-600"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </motion.button>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <button
              aria-label={theme === "light" ? "Switch to dark theme" : "Switch to light theme"}
              onClick={toggleTheme}
              className="glass flex h-9 w-9 items-center justify-center rounded-full text-gray-700 transition-colors hover:bg-white/10 dark:text-gray-200"
            >
              {theme === "light" ? <FaMoon size={14} /> : <FaSun size={14} />}
            </button>
            <button
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((v) => !v)}
              className="glass flex h-9 w-9 items-center justify-center rounded-full text-gray-700 dark:text-gray-200 md:hidden"
            >
              {menuOpen ? <FaTimes size={14} /> : <FaBars size={14} />}
            </button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.ul
            initial={{ opacity: 0, y: -10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.98 }}
            transition={{ duration: 0.2 }}
            className="glass glass-edge absolute left-4 right-4 top-[4.5rem] z-40 flex flex-col gap-1 rounded-2xl p-3 md:hidden"
          >
            {NAV_ITEMS.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => scrollToSection(item.id)}
                  aria-current={activeSection === item.id ? "page" : undefined}
                  className="block w-full rounded-xl px-4 py-3 text-left text-sm font-medium text-gray-800 hover:bg-white/10 dark:text-gray-100"
                >
                  {item.label}
                </button>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navigation;