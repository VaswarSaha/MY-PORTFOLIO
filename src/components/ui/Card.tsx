import { ReactNode } from "react";
import { motion } from "framer-motion";
import clsx from "clsx";

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  as?: "div" | "article";
}

export default function Card({ children, className, hover = true, as = "div" }: CardProps) {
  const Comp = motion[as];

  return (
    <Comp
      className={clsx(
        "glass glass-edge rounded-2xl p-6",
        hover && "transition-transform duration-300",
        className
      )}
      whileHover={
        hover
          ? { y: -6, boxShadow: "0 20px 45px -20px rgb(124 92 255 / 0.35)" }
          : undefined
      }
      transition={{ type: "spring", stiffness: 300, damping: 24 }}
    >
      {children}
    </Comp>
  );
}