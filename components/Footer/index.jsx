import styles from "../../styles/Footer.module.scss";
import Link from "next/link";
const Footer = () => {
  return (
    <div className={styles.FooterContainer}>
      <p>
        +<span>@2022 STEAM</span>
        <span>
          Made by{" "}
          <a href="https://github.com/yousef2007-rgb/" target="blank">
            Yousef Aburadi
          </a>
        </span>
        +
      </p>
    </div>
  );
};
export default Footer;
