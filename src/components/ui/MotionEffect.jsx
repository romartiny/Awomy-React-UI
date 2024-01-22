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

export const FrameTap = ({ component: Component, children, whileTap, ...props }) => {
  return (
    <motion.div
      whileTap={whileTap}
    >
      { Component ? <Component {...props} /> : children }
    </motion.div>
  );
};

export const FrameHover = ({ component: Component, children, whileHover, ...props }) => {
  return (
    <motion.div
      whileHover={whileHover}
    >
      { Component ? <Component {...props} /> : children }
    </motion.div>
  );
};
