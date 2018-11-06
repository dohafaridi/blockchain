import React from "react";
import { BootstrapTable, TableHeaderColumn } from "react-bootstrap-table";

import "./Transactions.css";

const tableOptions = {
  defaultSortName: "created_at", // default sort column name
  defaultSortOrder: "desc" // default sort order
};

const Transactions = ({ transactions, onSelectOptions }) => {
  return transactions ? (
    <div className="Transactions">
      <BootstrapTable
        data={transactions}
        options={tableOptions}
        selectRow={onSelectOptions}
      >
        <TableHeaderColumn dataField="created_at" dataSort isKey>
          DD-MM-YYYY
        </TableHeaderColumn>
        <TableHeaderColumn dataField="counterparty_name" dataSort>
          Counterparty Name
        </TableHeaderColumn>
        <TableHeaderColumn dataField="operation_type" dataSort>
          Payement Type
        </TableHeaderColumn>
        <TableHeaderColumn dataField="amount" dataSort>
          Amount
        </TableHeaderColumn>
        <TableHeaderColumn dataField="operation_type">A</TableHeaderColumn>
      </BootstrapTable>
    </div>
  ) : (
    <div className="Transactions"> There is no transaction to expose</div>
  );
};

export default Transactions;
