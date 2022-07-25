import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
export default function Navigation({ container, item }) {
  return (
    <motion.nav variants={container} initial="hidden" animate="show">
      <Link to="/" variants={item}>
        About
      </Link>
    </motion.nav>
  );
}
