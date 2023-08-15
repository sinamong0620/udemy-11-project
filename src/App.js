import Header from "./Header/Header";
import Body from "./Body/Body";
import Modal from "./Modal/Modal";
import "./App.module.css";
import { useState } from "react";

function App() {
  const [modalValue, setModalValue] = useState(true);
  const modalValuehandler = () => {
    const value = modalValue ? false : true;
    setModalValue(value);
  };
  return (
    <>
      {modalValue && <Modal onModalhanlder={modalValuehandler} />}
      <Header onModalhanlder={modalValuehandler} />
      <Body />
    </>
  );
}

export default App;
