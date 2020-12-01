import React from "react";
import { FaHandsHelping } from "react-icons/fa";
import styles from "../styles/Header.module.scss";

const Header = () => {
  return (
    <div className={styles.header}>
      <FaHandsHelping className={styles.icon} />
      <h1>Charity Splitter</h1>
    </div>
  );
};

export default Header;
