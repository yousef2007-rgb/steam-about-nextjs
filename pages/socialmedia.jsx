import React from "react";
import styles from "../styles/Page.module.scss";
import Intro from "../components/Intro";
import Footer from "../components/Footer";
import FeedContainer from "../components/FeedContainer";
export default function something() {
  return (
    <div className={styles.App}>
      <Intro content="Our Instagram" />
      <FeedContainer />
      <Footer />
    </div>
  );
}
