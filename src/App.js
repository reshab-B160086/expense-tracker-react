import React from "react";
import "./App.css";
import Headers from "./components/Headers";
import Balance from "./components/Balance";
import { IncomeExpenses } from "./components/IncomeExpenses";
import { TransactionsList } from "./components/TransactionsList";
import { AddTransactions } from "./components/AddTransactions";
import { GlobalProvider } from "./components/context/GlobalState";

function App() {
  return (
    <GlobalProvider>
      <Headers />
      <div className=".container">
        <Balance />
        <IncomeExpenses />
        <TransactionsList />
        <AddTransactions />
      </div>
    </GlobalProvider>
  );
}
export default App;
