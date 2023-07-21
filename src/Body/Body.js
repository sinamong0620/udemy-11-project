import styles from "./Body.module.css";
const Body = () => {
  return (
    <div className={styles.content_css}>
      <div className={styles.content_introduce_message}>
        <h1>Delicious Food, Delivered To you</h1>
        <div>
          Choose your favorite mael from our broad selection of available meals
          and enjoy a delicious lunch or dinner at home.
        </div>
        <div>
          All our meals are cooked with high-quality ingredients, just-in-time
          and of course by experienced chefs!
        </div>
      </div>

      <div className={styles.content_menu_array}>\</div>
    </div>
  );
};
export default Body;
