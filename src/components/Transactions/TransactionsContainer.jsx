import React, { Component } from "react";
import { connect } from "react-redux";

import Transactions from "./Transactions";
import TransactionsDetail from "../TransactionsDetail/TransactionsDetail";
import { fetchTransactions } from "../../actions/transactions";

class TransactionsContainer extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.dispatch(fetchTransactions());
  }

  componentWillReceiveProps(nextProps) {}

  render() {
    const transactions = [];
    console.log(this.props.transactions);
    return null;
    return (
      <div>
        <Transactions transactions={transactions} />
        <TransactionsDetail transactions={transactions} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  transactions: state.transactions
});

export default connect(mapStateToProps)(TransactionsContainer);
