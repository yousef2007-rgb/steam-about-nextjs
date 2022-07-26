import React from "react";
import styles from "../../styles/Intro.module.scss";
import ArrowDown from "../../media/arrowDownOutline.jsx";
import { motion } from "framer-motion";

export default function IntroWrapper({
  headerVarient,
  pagesContainerVarient,
  content,
}) {
  console.log(ArrowDown);
  return (
    <motion.div className={styles.IntroInnerWrapper}>
      <motion.h1 variants={headerVarient} initial="hidden" animate="show">
        {
          //content added in css
        }
      </motion.h1>
      <motion.div
        className={styles.pagesContainer}
        variants={pagesContainerVarient}
        initial="hidden"
        animate="show"
      >
        <a href="#About">
          {content}
          <ArrowDown />
        </a>
      </motion.div>
    </motion.div>
  );
}
