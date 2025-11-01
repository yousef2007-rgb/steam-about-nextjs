import React from "react";
import styles from "../../styles/Intro.module.scss";
import { motion } from "framer-motion";
export default function Background({}) {
  return (
    <div className={styles.IntroBackground}>
      <video autoPlay muted loop>
        <source
          src="https://cdn.fourthwall.com/sr-creators/resources/5a12e460-1e27-4680-b206-77074242703a/RackMultipart20250320-81-gjs25c.mp4"
          type="video/mp4"
        />
        Your browser does not support HTML5 video.
      </video>
    </div>
  );
}
