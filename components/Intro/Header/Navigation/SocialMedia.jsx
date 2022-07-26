import React from "react";
import { motion } from "framer-motion";
import styles from "../../../../styles/DesktopNavigation.module.scss";
import FacebookIcon from "../../../../media/facebookLogo.jsx";
import InstagramIcon from "../../../../media/instagramLogo.jsx";
import YoutubeIcon from "../../../../media/youtubeLogo.jsx";
export default function SocialMedia({}) {
  return (
    <motion.div className={styles.socialMediaContainer}>
      <motion.a
        href="https://www.facebook.com/S.T.E.A.Mteamracing"
        target="blank"
      >
        <FacebookIcon />
      </motion.a>
      <motion.a
        href="https://www.instagram.com/s.t.e.a.m_racing/"
        target="blank"
      >
        <InstagramIcon />
      </motion.a>
      <motion.a
        href="https://www.youtube.com/channel/UCEl-jLV6AGHn2xP1D9ONtgQ"
        target="blank"
      >
        <YoutubeIcon />
      </motion.a>
    </motion.div>
  );
}
