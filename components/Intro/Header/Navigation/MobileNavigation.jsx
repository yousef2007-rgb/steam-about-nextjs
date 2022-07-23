import React from "react";
import styles from "../../../../styles/MobileNavigation.module.scss";
import { ReactComponent as FacebookIcon } from "../../../../media/logo-facebook.svg";
import { ReactComponent as InstagramIcon } from "../../../../media/logo-instagram.svg";
import { ReactComponent as YoutubeIcon } from "../../../../media/logo-youtube.svg";
import { ReactComponent as MenuIcon } from "../../../../media/menu-outline.svg";
import { ReactComponent as CloseIcon } from "../../../../media/close-outline.svg";

import { motion } from "framer-motion";
import { useState, useRef, useEffect } from "react";
export default function MobileNavigation() {
  const [navigationVisablity, setNavigationVisablity] = useState("hide");
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
    <motion.div className="MobileNavigation-container">
      <MenuIcon
        className="menu-icon"
        onClick={() => {
          setNavigationVisablity("show");
        }}
        whileTap={{
          scale: 0.9,
        }}
      />
      <motion.div
        className="back-drop"
        ref={backDrop}
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: navigationVisablity === "hide" ? 0 : 1,
        }}
      >
        <motion.div
          className="navigation-wrapper"
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
          <CloseIcon
            className="close-icon"
            onClick={() => setNavigationVisablity("hide")}
            whileTap={{
              scale: 0.9,
            }}
          />
          <motion.nav variants={container} initial="hidden" animate="show">
            <a to="/" variants={item}>
              About
            </a>
            <a to="/aboutcar" variants={item}>
              About Our Car
            </a>
            <a
              href="https://www.instagram.com/direct/t/340282366841710300949128239848356913819"
              variants={item}
            >
              Contact us
            </a>
          </motion.nav>
          <motion.div className="social-media-container">
            <motion.a
              href="https://www.facebook.com/S.T.E.A.Mteamracing"
              target="_blank"
            >
              <FacebookIcon />
            </motion.a>
            <motion.a
              href="https://www.instagram.com/steamracing2022"
              target="_blank"
            >
              <InstagramIcon />
            </motion.a>
            <motion.a
              href="https://www.youtube.com/channel/UCEl-jLV6AGHn2xP1D9ONtgQ"
              target="_blank"
            >
              <YoutubeIcon />
            </motion.a>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
