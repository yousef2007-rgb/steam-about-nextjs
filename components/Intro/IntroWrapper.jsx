import React from "react";
import ArrowDown from "../../media/arrow-down-outline.svg";
import { motion } from "framer-motion";
export default function IntroWrapper({ headerVarient, pagesContainerVarient }) {
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
          {props.content}
          <ArrowDown />
        </a>
      </motion.div>
    </motion.div>
  );
}
