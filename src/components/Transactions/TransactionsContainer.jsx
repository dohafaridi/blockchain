import React, { Component } from "react";
import { connect } from "react-redux";

import Transactions from "./Transactions";
import {
  fetchTransactions,
  fetchTransactionsFromLocalMock,
  getSelectedTransactions
} from "../../actions/transactions";

class TransactionsContainer extends Component {
  constructor(props) {
    super(props);

    this.handleRowSelection = this.handleRowSelection.bind(this);
  }

  componentDidMount() {
    // This call does not work due to a cross domain issue
    //this.props.fetchTransactions();

    // this.props.dispatch(fetchTransactionsFromLocalMock());
    this.props.fetchTransactionsFromLocalMock();
  }

  handleRowSelection(row) {
    this.props.getSelectedTransactions(row);
  }

  render() {
    const { transactions } = this.props;
    return (
      <Transactions
        transactions={transactions}
        onSelectOptions={{
          mode: "radio",
          clickToSelect: true,
          onSelect: this.handleRowSelection
        }}
      />
    );
  }
}

const mapStateToProps = state => ({
  transactions: state.transactions.data
});

const mapDispatchToProps = dispatch => ({
  getSelectedTransactions: selectedTransactions =>
    dispatch(getSelectedTransactions(selectedTransactions)),
  fetchTransactionsFromLocalMock: () =>
    dispatch(fetchTransactionsFromLocalMock()),
  fetchTransactions: () => dispatch(fetchTransactions())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TransactionsContainer);
