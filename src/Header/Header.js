import React, { useContext } from "react";
import styles from "./Header.module.css";
import TotalAmountContext from "../context/TotalAmountContext";

const Header = (props) => {
  const menuCtx = useContext(TotalAmountContext);
  //curNumber은 누산기라서 최종 결과가 되는 것이고
  //item은 현재 순회 값이다.
  const numberOfCartItems = menuCtx.items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);
  return (
    <header className={styles.header_style}>
      <span>ReactMeals</span>
      <div className={styles.header_style_your_cart}>
        <img src="/shopping-cart.png" alt="cartlogo" />
        {/* 여기에다 버튼 태그 사용함 */}
        <button onClick={props.onModalhanlder}>Your Cart</button>
        <div className={styles.header_style_your_cart_item_total}>
          {numberOfCartItems}
        </div>
      </div>
    </header>
  );
};
export default Header;
