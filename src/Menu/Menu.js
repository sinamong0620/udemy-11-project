import React, { useReducer, useContext } from "react";
import styles from "./Menu.module.css";
import TotalAmountContext from "../context/TotalAmountContext";

const menureducer = (state, action) => {
  if (action.type === "USER_INPUT") {
    return { number: action.number };
  }
};
const Menu = (props) => {
  const menuCtx = useContext(TotalAmountContext);
  const [menuAmount, menuAmountDispatch] = useReducer(menureducer, {
    number: 0,
  });
  const amountCountHandler = (e) => {
    menuAmountDispatch({ type: "USER_INPUT", number: e.target.value });
    console.log(menuAmount);
  };
  const submitHandler = (e) => {
    e.preventDefault(); //새로고침 막기
    menuCtx.onSumAmount(menuAmount);
  };

  return (
    <>
      <div className={styles.content_menu_array}>
        <div className={styles.content_menu_array_info}>
          <div>{props.foodName}</div>
          <div>{props.countryOfOrigin}</div>
          <div>{`$${props.price}`}</div>
        </div>
        <div>
          <form onSubmit={submitHandler}>
            <label>Amount</label>
            <input
              type="number"
              min="0"
              value={menuAmount.number}
              onChange={amountCountHandler}
            />
            <div>
              <button>+Add</button>
            </div>
          </form>
        </div>
      </div>
      <hr></hr>
    </>
  );
};
export default Menu;
