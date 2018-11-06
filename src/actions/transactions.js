import { fetchJson } from "../helpers";
import { TRANSACTIONS_JSON_URL } from "../constants";

export const GET_TRANSACTIONS = "GET_TRANSACTIONS";

export const getTransactions = transactions => ({
  type: GET_TRANSACTIONS,
  transactions
});

export const fetchTransactions = () => dispatch =>
  fetchJson(TRANSACTIONS_JSON_URL).then(transactions => dispatch(getTransactions(transactions)));
