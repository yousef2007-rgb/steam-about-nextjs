import React from "react";
import { motion } from "framer-motion";
export default function Navigation({ container, item }) {
  return (
    <motion.nav variants={container} initial="hidden" animate="show">
      <a href="/" variants={item}>
        About
      </a>
    </motion.nav>
  );
}
