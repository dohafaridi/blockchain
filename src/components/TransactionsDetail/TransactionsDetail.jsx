import React, { Component } from "react";
import { connect } from "react-redux";

import "./TransactionsDetail.css";

/**
 * TODO : Create a container/dump component
 */
class TransactionsDetail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedTransactions: []
    };
  }

  /**
   * TODO : this is to handle multiple row selection logic
   * @param nextProps
   */
  componentWillReceiveProps(nextProps) {
    if (nextProps.selectedTransactions !== this.props.selectedTransactions) {
      this.setState({
        selectedTransactions: [
          this.state.selectedTransactions,
          ...nextProps.selectedTransactions
        ]
      });
    }
  }

  render() {
    const { selectedTransactions } = this.props;
    const TransactionsDetailComponent =
      selectedTransactions && selectedTransactions[0].id ? (
        <div className="TransactionsDetail__list">
          {selectedTransactions.map(transaction => (
            <div key={transaction.id} className="TransactionsDetail__list-item">
              {transaction.id}
            </div>
          ))}
        </div>
      ) : (
        <div className="TransactionsDetail__show-detail">
          Click on one or several transactions to see details
        </div>
      );

    return (
      <div className="TransactionsDetail">{TransactionsDetailComponent}</div>
    );
  }
}

const mapStateToProps = state => ({
  selectedTransactions: [state.selectedTransactions.data]
});

export default connect(mapStateToProps)(TransactionsDetail);
