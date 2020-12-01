import React from "react";
import { BsArrowRight } from "react-icons/bs";
import Tippy from "@tippyjs/react";

import "tippy.js/dist/tippy.css";
import styles from "../styles/button.module.scss";

const Button = ({ clickHandler, validNum }) => {
  const tippyContent = validNum ? "click to proceed" : "invalid input";

  return (
    <Tippy content={tippyContent}>
      <button className={styles.button} onClick={clickHandler}>
        <BsArrowRight />
      </button>
    </Tippy>
  );
};

export default Button;
