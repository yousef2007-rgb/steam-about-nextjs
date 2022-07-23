import React from "react";
import styles from "../../../styles/Header.module.scss";
import MobileNavigation from "./Navigation/MobileNavigation";
//import Logo from "../Images/logo.svg";

import DesktopNavigation from "./Navigation/DesktopNavigation";
export default function Header() {
  return (
    <div className="Header-container">
      <a href="/" className="logo">
        STEAM
      </a>
      <DesktopNavigation />
      <MobileNavigation />
    </div>
  );
}
