import React from 'react';
import { motion } from 'framer-motion';

export const FrameMotion = ({ component: Component, children, initial, animate, transition, styles, ...props }) => {
  return (
    <motion.div
      initial={initial}
      animate={animate}
      transition={transition}
      className={styles}
    >
      { Component ? <Component {...props} /> : children }
    </motion.div>
  );
};

export const FrameHoverTap = ({ component: Component, children, whileTap, whileHover, ...props }) => {
  return (
    <motion.div
      whileTap={whileTap}
      whileHover={whileHover}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      { Component ? <Component {...props} /> : children }
    </motion.div>
  );
};