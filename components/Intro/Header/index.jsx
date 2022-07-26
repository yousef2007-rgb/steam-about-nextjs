import styles from "../../../styles/Header.module.scss";
import MobileNavigation from "./Navigation/MobileNavigation";
import Link from "next/link";
//import Logo from "../Images/logo.svg";

import DesktopNavigation from "./Navigation/DesktopNavigation";
export default function Header() {
  return (
    <div className={styles.HeaderContainer}>
      <Link href="/" className={styles.logo}>
        STEAM
      </Link>
      <DesktopNavigation />
      <MobileNavigation />
    </div>
  );
}
