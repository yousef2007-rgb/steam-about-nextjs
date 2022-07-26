import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
export default function Navigation({ container, item }) {
  return (
    <motion.nav variants={container} initial="hidden" animate="show">
      <Link href="/" variants={item}>
        About
      </Link>
      <Link href="/socialmedia" variants={item}>
        SocialMedia
      </Link>
    </motion.nav>
  );
}
