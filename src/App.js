import React from "react";

import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar";
import Transactions from "./components/Transactions";
import TransactionsDetail from "./components/TransactionsDetail/TransactionsDetail";

import storeProvider from "./hoc/storeProvider";
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <main>
          <Sidebar />
          <Transactions />
          <TransactionsDetail />
        </main>
      </div>
    );
  }
}

export default storeProvider(App);
