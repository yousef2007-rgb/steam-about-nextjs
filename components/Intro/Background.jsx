import React from "react";
import { motion } from "framer-motion";
export default function Background({}) {
  return (
    <div className={styles.IntroBackground}>
      <video autoPlay muted loop>
        <source
          src="https://themes.fourthwall.com/themes/assets/11d2f253-34b7-4fdc-b01b-17868cd74972/assets/video-bg-light.mp4?v=364d6351-2cdd-8622-b962-d429a0989974"
          type="video/mp4"
        />
        Your browser does not support HTML5 video.
      </video>
    </div>
  );
}
