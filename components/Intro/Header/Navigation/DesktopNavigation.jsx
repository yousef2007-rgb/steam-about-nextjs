import React from "react";
import styles from "../../../../styles/DesktopNavigation.module.scss";
import { ReactComponent as FacebookIcon } from "../../../../media/logo-facebook.svg";
import { ReactComponent as InstagramIcon } from "../../../../media/logo-instagram.svg";
import { ReactComponent as YoutubeIcon } from "../../../../media/logo-youtube.svg";
import { motion } from "framer-motion";
export default function DesktopNavigation() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        duration: 3,
      },
    },
  };
  const item = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  };

  return (
    <motion.div className="DesktopNavigation-container">
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
  );
}
