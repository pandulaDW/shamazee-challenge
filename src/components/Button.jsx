import React from "react";
import { BsArrowRight } from "react-icons/bs";
import styles from "../styles/button.module.scss";

const Button = () => {
  return (
    <button className={styles.button}>
      <BsArrowRight />
    </button>
  );
};

export default Button;
