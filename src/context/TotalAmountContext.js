import React, { useState } from "react";

const TotalAmountContext = React.createContext({
  items: [], //아이템 목록 관리
  totalAmount: 0,
  addItem: (amount) => {}, //목록 추가 함수
  removeItem: (id) => {}, //목록 제거 함수
});

export default TotalAmountContext;
