import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import clsx from 'clsx';

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

const Card = ({ children, className, hover = true }: CardProps) => {
  return (
    <motion.div
      className={clsx(
        'bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6',
        hover && 'hover:shadow-2xl transition-shadow duration-300',
        className
      )}
      whileHover={hover ? { y: -5 } : undefined}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
};

export default Card;