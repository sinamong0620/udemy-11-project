import styles from "./Body.module.css";
import Menu from "../Menu/Menu";
const food_info = [
  {
    foodName: "Sushi",
    countryOfOrigin: "Finest fist and veggies",
    price: 22.99,
  },
  {
    foodName: "Schnitzel",
    countryOfOrigin: "A german specialty!",
    price: 16.5,
  },
  {
    foodName: "Barbecue Burger",
    countryOfOrigin: "American, raw, meaty",
    price: 12.99,
  },
  {
    foodName: "Green Bowl",
    countryOfOrigin: "Healthy...and green...",
    price: 18.99,
  },
];

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

      <div className={styles.menu_array}>
        {food_info.map((props) => (
          <Menu
            key={Math.random()}
            foodName={props.foodName}
            countryOfOrigin={props.countryOfOrigin}
            price={props.price}
          />
        ))}
      </div>
    </div>
  );
};
export default Body;
