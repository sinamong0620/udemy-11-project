import { useReducer } from "react";
import TotalAmountContext from "./TotalAmountContext";

const defaultCartState = {
  items: [],
  totalAmount: 0,
};
const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    const updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    ); //현재 내가 추가한 값이 이미 배열 안에 속해있나를 보기위한 변수
    const existingCartItem = state.items[existingCartItemIndex];

    let updatedItems;
    if (existingCartItem) {
      //만일 내가 추가한 항목이 이미 배열(목록)에 존재한다면
      const updatedItem = {
        // 추가한 항목이 배열에 있다면 목록이 이미 있고 수량만 추가된거니깐 수량을 추가해주기
        ...existingCartItem,
        amount: existingCartItem.amount + action.item.amount,
      };
      updatedItems = [...state.items]; //updatedItems는 기존의 배열이기 때문에 그냥 복사
      updatedItems[existingCartItemIndex] = updatedItem;
    } else {
      updatedItems = state.items.concat(action.item);
    }
    return { items: updatedItems, totalAmount: updatedTotalAmount };
  }
  if (action.type === "REMOVE") {
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );
    const existingItem = state.items[existingCartItemIndex];
    const updatedTotalAmount = state.totalAmount - existingItem.price;
    let updatedItems;
    if (existingItem.amount === 1) {
      updatedItems = state.items.filter((item) => item.id !== action.id);
    } else {
      const updatedItem = {
        ...existingItem,
        amount: existingItem.amount - 1,
      };
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    }
    return { items: updatedItems, totalAmount: updatedTotalAmount };
  }

  return defaultCartState;
};
const CartProvider = (props) => {
  const addItemToCartHandler = (item) => {
    dispatchCartAction({ type: "ADD", item: item }); //규약으로 타입은 다 대문자래
  };
  const removeItemFromCartHandelr = (id) => {
    dispatchCartAction({ type: "REMOVE", id: id });
    console.log("이거까진되나?");
  };
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );
  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandelr,
  };

  return (
    <TotalAmountContext.Provider value={cartContext}>
      {props.children}
    </TotalAmountContext.Provider>
  );
};
export default CartProvider;
