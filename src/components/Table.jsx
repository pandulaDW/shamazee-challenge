import React from "react";
import { FaRegMoneyBillAlt } from "react-icons/fa";
import styles from "../styles/table.module.scss";

const Table = ({ amount, method, spread }) => {
  return (
    <div className={styles.container}>
      <h1>Donation Amount: ${amount}</h1>
      <h2>Split using {method} method</h2>
      {spread.length > 0 && (
        <table>
          <tr>
            {new Array(10).fill(1).map((el, id) => (
              <th key={id}>
                <FaRegMoneyBillAlt /> Day {id + 1}
              </th>
            ))}
          </tr>
          <tr>
            {spread.map((el, id) => (
              <td key={id}>${el}</td>
            ))}
          </tr>
        </table>
      )}
    </div>
  );
};

export default Table;
