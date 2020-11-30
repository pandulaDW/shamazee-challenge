import React, { useState } from "react";
import styles from "../styles/form.module.scss";
import Button from "./Button";
import Table from "./Table";

const FormElements = () => {
  const [amount, setAmount] = useState(0);
  const [method, setMethod] = useState("equal");

  const handleRadioButton = (e) => {
    setMethod(e.target.value);
  };

  return (
    <>
      <div className={styles.form}>
        <input
          type="text"
          name="value"
          onChange={(e) => setAmount(e.target.value)}
        />
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
        <Button />
      </div>
      <Table amount={amount} method={method} />
    </>
  );
};

export default FormElements;
