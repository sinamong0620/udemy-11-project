import Header from "./Header/Header";
import Body from "./Body/Body";
import Modal from "./Modal/Modal";
import "./App.module.css";
import { useState } from "react";
import CartProvider from "./context/CartProvider";

function App() {
  const [modalValue, setModalValue] = useState(false);
  const modalValuehandler = () => {
    const value = modalValue ? false : true;
    setModalValue(value);
  };

  return (
    <CartProvider>
      {modalValue && <Modal onModalhanlder={modalValuehandler} />}
      <Header onModalhanlder={modalValuehandler} />
      <Body />
    </CartProvider>
  );
}

export default App;
