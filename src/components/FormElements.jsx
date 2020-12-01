import React, { useState } from "react";
import { computeSplit } from "../computeSplit";
import Button from "./Button";
import Table from "./Table";
import styles from "../styles/form.module.scss";

const FormElements = () => {
  const [amount, setAmount] = useState(0);
  const [method, setMethod] = useState("equal");
  const [spread, setSpread] = useState([]);

  const handleRadioButton = (e) => {
    setMethod(e.target.value);
  };

  const handleButtonClick = () => {
    const donationSpread = computeSplit(amount, method);
    setSpread(donationSpread);
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
        <Button clickHandler={handleButtonClick} />
      </div>
      <Table amount={amount} method={method} spread={spread} />
    </>
  );
};

export default FormElements;
