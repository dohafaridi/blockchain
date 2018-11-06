import { GET_SELECTED_TRANSACTIONS } from "../actions/transactions";

const initialState = {
  data: []
};

const transactionsDetailReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_SELECTED_TRANSACTIONS:
      return {
        data: action.selectedTransactions
      };

    default:
      return state;
  }
};

export default transactionsDetailReducer;
