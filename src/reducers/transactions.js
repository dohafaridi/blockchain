import { GET_TRANSACTIONS } from "../actions/transactions";

const initialState = {
  data: []
};

const transactionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_TRANSACTIONS:
      return {
        data: action.transactions
      };

    default:
      return state;
  }
};

export default transactionsReducer;
