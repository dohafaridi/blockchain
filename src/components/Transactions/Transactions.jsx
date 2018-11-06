import React from "react";

const Transactions = ({ Transactions }) =>
  Transactions ? (
    <ul>
      {Transactions.map(transaction => (
        <li key={transaction.id}>{transaction.title}</li>
      ))}
    </ul>
  ) : null;

export default Transactions;
