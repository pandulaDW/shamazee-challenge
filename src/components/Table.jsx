import React from "react";
import { FaRegMoneyBillAlt } from "react-icons/fa";
import styles from "../styles/table.module.scss";

const Table = ({ amount, method, spread, validNum }) => {
  return (
    <div className={styles.container}>
      <h1>Donation Amount: {validNum ? `$${amount}` : "Invalid"}</h1>
      <h2>Split using {method} method</h2>
      {spread.length > 0 && (
        <table>
          <thead>
            <tr>
              {new Array(10).fill(1).map((el, id) => (
                <th key={id}>
                  <FaRegMoneyBillAlt /> Day {id + 1}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr>
              {spread.map((el, id) => (
                <td key={id}>${el}</td>
              ))}
            </tr>
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Table;
