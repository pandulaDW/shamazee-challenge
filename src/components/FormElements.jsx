import React from "react";
import Button from "./Button";

import styles from "../styles/form.module.scss";

const FormElements = (props) => {
  const {
    validNum,
    handleInputElement,
    handleRadioButton,
    handleButtonClick,
  } = props;

  return (
    <div className={styles.form}>
      <div className={styles.inputElement}>
        <label htmlFor="value">Enter your donation amount:</label>
        <input
          type="text"
          name="value"
          style={{ color: !validNum && "red" }}
          onChange={handleInputElement}
          className={styles.inputText}
        />
      </div>
      <div className={styles.radioButtons}>
        <div className={styles.radio}>
          <input
            type="radio"
            value="equal"
            name="method"
            defaultChecked
            onChange={handleRadioButton}
          />
          <p>equal</p>
        </div>
        <div className={styles.radio}>
          <input
            type="radio"
            value="more_odd"
            name="method"
            onChange={handleRadioButton}
          />
          <p>more.odd</p>
        </div>
      </div>
      <Button clickHandler={handleButtonClick} validNum={validNum} />
    </div>
  );
};

export default FormElements;
