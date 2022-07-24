import Header from "./Header";
import styles from "../../styles/Intro.module.scss";
import { ReactComponent as ArrowDown } from "../../media/arrow-down-outline.svg";
import { motion } from "framer-motion";
export default function Intro(props) {
  const headerVarient = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        duration: 3,
      },
    },
  };
  const pagesContainerVarient = {
    hidden: {
      x: "100vw",
    },
    show: {
      x: 0,
      transition: {
        delay: 2.5,
        stiffness: 70,
        type: "spring",
      },
    },
  };

  return (
    <div className={styles.IntroContainer}>
      <div className={styles.IntroWrapper}>
        <Header />
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
      </div>
      <div className={styles.IntroBackground}>
        <video
          autoPlay
          muted
          loop
          class="hero__background-video hero__background-video--light"
        >
          <source
            src="https://themes.fourthwall.com/themes/assets/11d2f253-34b7-4fdc-b01b-17868cd74972/assets/video-bg-light.mp4?v=364d6351-2cdd-8622-b962-d429a0989974"
            type="video/mp4"
          />
          Your browser does not support HTML5 video.
        </video>
      </div>
    </div>
  );
}
