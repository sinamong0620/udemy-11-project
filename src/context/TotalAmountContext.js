import React, { useState } from "react";

const TotalAmountContext = React.createContext({
  count: 0,
  onSumAmount: (amount) => {},
});

export const TotalAmountContextProvider = (props) => {
  const [totalValue, setTotalValue] = useState(0);

  const sumAmountHandler = (number) => {
    // setTotalValue(totalValue + price);
    setTotalValue((prevState) => {
      return prevState + Number(number.number);
    });
    console.log(totalValue);
  };
  return (
    <TotalAmountContext.Provider
      value={{ totalValue: totalValue, onSumAmount: sumAmountHandler }}
    >
      {props.children}
    </TotalAmountContext.Provider>
  );
};

export default TotalAmountContext;
