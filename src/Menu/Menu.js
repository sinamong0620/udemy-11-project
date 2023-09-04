import React, { useReducer, useContext, useRef, useState } from "react";
import styles from "./Menu.module.css";
import TotalAmountContext from "../context/TotalAmountContext";

const Menu = (props) => {
  const [amountIsValid, setAmountIsValid] = useState(true);
  const amountInputRef = useRef();
  const menuCtx = useContext(TotalAmountContext);

  const submitHandler = (e) => {
    e.preventDefault(); //새로고침 막기
    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNumber = +enteredAmount;

    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNumber > 5 ||
      enteredAmountNumber < 1
    ) {
      setAmountIsValid(false);
      return;
    }

    menuCtx.addItem({
      id: props.id,
      name: props.foodName,
      amount: enteredAmountNumber,
      price: props.price,
    });
    console.log(menuCtx);
  };
  const price = `$${props.price.toFixed(2)}`; //가격의 형식 정함, 소수점 이하 두 자리 수까지만 렌더링

  return (
    <>
      <div className={styles.content_menu_array}>
        <div className={styles.content_menu_array_info}>
          <div>{props.foodName}</div>
          <div>{props.countryOfOrigin}</div>
          <div>{price}</div>
        </div>
        <div>
          <form onSubmit={submitHandler}>
            <label>Amount</label>
            <input type="number" min={0} ref={amountInputRef} />
            <div>
              <button>+Add</button>
              {!amountIsValid && <p>Please enter a valid amount (1-5)</p>}
            </div>
          </form>
        </div>
      </div>
      <hr></hr>
    </>
  );
};
export default Menu;
