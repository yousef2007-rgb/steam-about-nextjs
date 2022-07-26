import styles from "../../styles/Footer.module.scss";
import Link from "next/link";
const Footer = () => {
  return (
    <div className={styles.FooterContainer}>
      <Link href="/" className={styles.logo}>
        STEAM
      </Link>
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
