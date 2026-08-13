import { ReactNode } from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import clsx from "clsx";

type Variant = "primary" | "ghost";

interface ButtonProps extends Omit<HTMLMotionProps<"button">, "children"> {
  children: ReactNode;
  variant?: Variant;
  className?: string;
}

export default function Button({
  children,
  variant = "primary",
  className,
  ...props
}: ButtonProps) {
  const base =
    "relative inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold tracking-wide transition-shadow duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 dark:focus-visible:outline-blue-400";

  // NOTE: previously referenced bg-violet / to-cyan / shadow-glow / outline-violet /
  // text-ink, which aren't defined anywhere in globals.css or the Tailwind config,
  // so the button rendered unstyled. Swapped in the blue -> purple gradient and
  // glass treatment already used across Hero, Navigation, and Contact.
  const variants: Record<Variant, string> = {
    primary:
      "text-white bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg shadow-purple-500/30 hover:shadow-xl hover:shadow-purple-500/50",
    ghost: "glass text-gray-900 hover:bg-white/10 dark:text-white",
  };

  return (
    <motion.button
      whileHover={{ y: -2, scale: 1.02 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: "spring", stiffness: 400, damping: 22 }}
      className={clsx(base, variants[variant], className)}
      {...props}
    >
      {children}
    </motion.button>
  );
}
