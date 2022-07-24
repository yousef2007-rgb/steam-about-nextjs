import styles from "../../styles/Footer.module.scss";
const Footer = () => {
  return (
    <div className={styles.FooterContainer}>
      <a href="/" className={styles.logo}>
        STEAM
      </a>
      <p>
        +<span>@2022 STEAM</span>
        <span>
          Made by{" "}
          <a href="https://github.com/yousef2007-rgb/" target="_blank">
            Yousef Aburadi
          </a>
        </span>
        +
      </p>
    </div>
  );
};
export default Footer;
