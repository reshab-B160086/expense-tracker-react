import React from "react";
import "./App.css";
import Headers from "./components/Headers";
import Balance from "./components/Balance";
import { IncomeExpenses } from "./components/IncomeExpenses";
import { TransactionsList } from "./components/TransactionsList";
import { AddTransactions } from "./components/AddTransactions";

function App() {
  return (
    <div>
      <Headers />
      <div className=".container">
        <Balance />
        <IncomeExpenses />
        <TransactionsList />
        <AddTransactions />
      </div>
    </div>
  );
}
export default App;
