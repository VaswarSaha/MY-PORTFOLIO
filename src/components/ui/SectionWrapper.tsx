import { ReactNode } from "react";
import { motion, Variants } from "framer-motion";
import clsx from "clsx";

interface SectionWrapperProps {
  children: ReactNode;
  className?: string;
  id?: string;
}

const reveal: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

const SectionWrapper = ({ children, className, id }: SectionWrapperProps) => {
  return (
    <motion.section
      id={id}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={reveal}
      className={clsx("py-20 px-6", className)}
    >
      {children}
    </motion.section>
  );
};

export default SectionWrapper;