import React, { useState } from "react";
import { computeSplit } from "../computeSplit";
import { validatePositiveInteger } from "../utils";
import FormElements from "./FormElements";
import Table from "./Table";

const MainContainer = () => {
  const [amount, setAmount] = useState(0);
  const [method, setMethod] = useState("equal");
  const [spread, setSpread] = useState([]);
  const [validNum, setValidNum] = useState(true);

  const handleRadioButton = (e) => {
    setMethod(e.target.value);
  };

  const handleInputElement = (e) => {
    if (!validatePositiveInteger(e.target.value)) {
      setValidNum(false);
    } else {
      setValidNum(true);
    }
    setAmount(e.target.value);
  };

  const handleButtonClick = () => {
    if (!validNum) {
      return;
    }
    const donationSpread = computeSplit(amount, method);
    setSpread(donationSpread);
  };

  return (
    <>
      <FormElements
        validNum={validNum}
        handleInputElement={handleInputElement}
        handleRadioButton={handleRadioButton}
        handleButtonClick={handleButtonClick}
      />
      <Table
        amount={amount}
        method={method}
        spread={spread}
        validNum={validNum}
      />
    </>
  );
};

export default MainContainer;
