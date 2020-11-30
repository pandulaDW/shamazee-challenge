import React from "react";

const Table = ({ amount, method }) => {
  return (
    <div>
      <h1>Amount: {amount}</h1>
      <h1>Method: {method}</h1>
    </div>
  );
};

export default Table;
