import { useContext } from "react";
import React from "react";
import ReactDOM from "react-dom";
import styles from "./Modal.module.css";
import TotalAmountContext from "../context/TotalAmountContext";
import CartItem from "../Menu/CartItem";

const Modal_ = (props) => {
  const cartCtx = useContext(TotalAmountContext);
  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;
  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };
  const cartItemAddHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };
  const cartItems = (
    <ul>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          id={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  );
  return (
    <div className={styles.ModalContainer}>
      <div className={styles.ModalYourCartContainer}>
        <div className={styles.ModalYourCart}>
          <div>{cartItems}</div>
        </div>

        <div className={styles.ModalTotalContainer}>
          <div>Total Amount</div>
          <div>{totalAmount}</div>
        </div>

        <button
          className={styles.ModalCloseButton}
          onClick={props.onModalhanlder}
        >
          close
        </button>

        {hasItems && <button>order</button>}
      </div>
    </div>
  );
};

// ReactDOM.createPortal();
const Modal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <Modal_ onModalhanlder={props.onModalhanlder} />,
        document.getElementById("modal-root")
      )}
    </>
  );
};
export default Modal;
