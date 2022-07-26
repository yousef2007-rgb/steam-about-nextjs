import IntroWrapper from "./IntroWrapper";
import Background from "./Background";
import Header from "./Header";
import styles from "../../styles/Intro.module.scss";
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
        <IntroWrapper
          headerVarient={headerVarient}
          pagesContainerVarient={pagesContainerVarient}
        />
      </div>
      <Background />
    </div>
  );
}
