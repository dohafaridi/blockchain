import React from "react";

import Sidebar from "./components/Sidebar";
import Transactions from "./components/Transactions";

import storeProvider from "./hoc/storeProvider";
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Sidebar />
        <Transactions />
      </div>
    );
  }
}

export default storeProvider(App);
