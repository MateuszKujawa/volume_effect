import React from 'react';
import { motion } from 'framer-motion';

const AnimatedOnScroll: React.FC<{
  children: React.ReactNode;
  className?: string;
  animation?: object;
}> = ({ children, className, animation }) => {
  const defaultAnimation = {
    initial: { opacity: 0, y: 50 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.3 },
    transition: { duration: 0.8 },
  };

  return (
    <motion.div
      {...defaultAnimation}
      {...animation}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedOnScroll;
