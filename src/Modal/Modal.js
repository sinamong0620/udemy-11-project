import React from "react";
import styles from "./Modal.module.css";

const Modal = (props) => {
  return (
    <div className={styles.ModalContainer}>
      <div className={styles.ModalYourCartContainer}>
        <div className={styles.ModalYourCart}>
          <div className={styles.ModalMyProduct}>
            <div>
              <div className={styles.ModalMyProductName}>Schnitzel</div>
              <div className={styles.ModalMyProjectPrice}>$16.5</div>
            </div>
            <div className={styles.ModalMyProductCount}>x2</div>
          </div>
          <div>
            <button className={styles.ModalMyProjuctCountButton}>-</button>
            <button className={styles.ModalMyProjuctCountButton}>+</button>
          </div>
        </div>
        <hr className={styles.ModalHrLine}></hr>
        <div className={styles.ModalTotalContainer}>
          <div>Total Amount</div>
          <div>{`$${"33.00"}`}</div>
        </div>
        <button
          className={styles.ModalCloseButton}
          onClick={props.onModalhanlder}
        >
          close
        </button>
        <button>order</button>
      </div>
    </div>
  );
};
export default Modal;
