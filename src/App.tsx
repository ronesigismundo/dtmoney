import React, { useEffect, useState } from "react";
import Modal from 'react-modal'
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { NewTransactionModal } from "./components/NewTransactionModal";
import { api } from "./services/api";
import { GlobalStyle } from "./styles/global";

Modal.setAppElement('#root');

export function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);

  function HandleOpenNewTransactionModal() {
    setIsNewTransactionModalOpen(true)
  }

  function HandleCloseNewTransactionModal() {
    setIsNewTransactionModalOpen(false)
  }

  useEffect(()=>{
    api.get('transactions')
      .then(response => console.log(response.data))
  },[]);
  return (
    <>
      <Header onOpenNewTransactionModal={HandleOpenNewTransactionModal} />
      <Dashboard />

      <NewTransactionModal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={HandleCloseNewTransactionModal}
      />

      <GlobalStyle />
    </>
  );
}