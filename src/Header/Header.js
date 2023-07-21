import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header_style}>
      <span>ReactMeals</span>
      <div className={styles.header_style_your_cart}>
        <img src="/shopping-cart.png" alt="cartlogo" />
        <div>Your Cart</div>
        <div className={styles.header_style_your_cart_item_total}>0</div>
      </div>
    </header>
  );
};
export default Header;
