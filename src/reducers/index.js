import { combineReducers } from "redux";

import transactions from "./transactions";
import selectedTransactions from "./transactionsDetail";

export default combineReducers({
  transactions,
  selectedTransactions
});
