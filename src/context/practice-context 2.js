import React from "react";

const api = React.createContext({ color: "dark" });
export const Real = (props) => (
  <api.Provider value={{ age: 20 }}>
    <div>{props.children}</div>
  </api.Provider>
);
console.log(api);
console.log(Real);
export default api;
