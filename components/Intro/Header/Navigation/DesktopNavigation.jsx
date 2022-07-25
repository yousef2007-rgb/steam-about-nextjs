import SocialMedia from "./SocialMedia";
import Navigation from "./Navigation";
import styles from "../../../../styles/DesktopNavigation.module.scss";
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
    <motion.div className={styles.DesktopNavigationContainer}>
      <Navigation container={container} item={item} />
      <SocialMedia />
    </motion.div>
  );
}
