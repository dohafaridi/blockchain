import React from "react";
import { Route } from "react-router-dom";

import Home from "./components/Home/Home";
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
          <Route exact path="/" component={Home} />
          <Route path="/transactions" component={Transactions} />
          <Route path="/transactions" component={TransactionsDetail} />
        </main>
      </div>
    );
  }
}

export default storeProvider(App);
