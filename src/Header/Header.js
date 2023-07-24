import React, { useContext } from "react";
import styles from "./Header.module.css";
import TotalAmountContext from "../context/TotalAmountContext";

const Header = (props) => {
  const menuCtx = useContext(TotalAmountContext);

  return (
    <header className={styles.header_style}>
      <span>ReactMeals</span>
      <div className={styles.header_style_your_cart}>
        <img src="/shopping-cart.png" alt="cartlogo" />
        <div>Your Cart</div>
        <div className={styles.header_style_your_cart_item_total}>
          {menuCtx.totalValue}
        </div>
      </div>
    </header>
  );
};
export default Header;
