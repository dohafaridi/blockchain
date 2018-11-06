import { fetchJson } from "../helpers";
import { TRANSACTIONS_JSON_URL } from "../constants";
import transactions from "../mock/transactions.json";

export const GET_TRANSACTIONS = "GET_TRANSACTIONS";
export const GET_SELECTED_TRANSACTIONS = "GET_SELECTED_TRANSACTIONS";

export const getTransactions = transactions => ({
  type: GET_TRANSACTIONS,
  transactions
});

export const getSelectedTransactions = selectedTransactions => ({
  type: GET_SELECTED_TRANSACTIONS,
  selectedTransactions
});

export const fetchTransactions = () => dispatch =>
  fetchJson(TRANSACTIONS_JSON_URL).then(transactions =>
    dispatch(getTransactions(transactions))
  );

export const fetchTransactionsFromLocalMock = () => dispatch =>
  dispatch(getTransactions(transactions));
