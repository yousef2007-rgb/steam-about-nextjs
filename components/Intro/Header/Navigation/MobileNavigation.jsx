import styles from "../../../../styles/MobileNavigation.module.scss";
import MenuIcon from "../../../../media/menuIcon";
import CloseIcon from "../../../../media/closeIcon";
import Navigation from "./Navigation";
import SocialMedia from "./SocialMedia";
import { motion } from "framer-motion";
import { useState, useRef, useEffect } from "react";
export default function MobileNavigation() {
  const [navigationVisablity, setNavigationVisablity] = useState("show");
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5,
      },
    },
  };
  const item = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  };

  const backDrop = useRef();
  useEffect(() => {
    backDrop.current.style.display =
      navigationVisablity === "hide" ? "none" : "block";
  });

  return (
    <motion.div className={styles.MobileNavigationContainer}>
      <div
        className={styles.menuIcon}
        onClick={() => {
          setNavigationVisablity("show");
        }}
      >
        <MenuIcon />
      </div>
      <motion.div
        className={styles.backDrop}
        ref={backDrop}
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: navigationVisablity === "hide" ? 0 : 1,
        }}
      >
        <motion.div
          className={styles.navigationWrapper}
          initial={{
            x: "100vw",
          }}
          animate={{
            x: navigationVisablity === "hide" ? "100vh" : 0,
          }}
          transition={{
            type: "twean",
            when: "beforeChildren",
            staggerChildren: 0.2,
          }}
        >
          <div
            className={styles.closeIcon}
            onClick={() => setNavigationVisablity("hide")}
          >
            <CloseIcon />
          </div>
          <Navigation container={container} item={item} />
          <div className={styles.socialMediaContainer}>
            <SocialMedia />
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
