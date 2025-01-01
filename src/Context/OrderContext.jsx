/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from "react";

const OrdersContext = createContext();

export const useOrders = () => {
  return useContext(OrdersContext);
};

export const OrdersProvider = ({ children }) => {
  const [ordersList, setOrdersList] = useState(null);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [orderDisputeList, setOrderDisputeList] = useState(null);
  const [selectedDispute, setSelectedDispute] = useState(null);
  const [createDispute, setCreateDispute] = useState(false);
  return (
    <OrdersContext.Provider
      value={{
        ordersList,
        setOrdersList,
        selectedOrder,
        setSelectedOrder,
        orderDisputeList,
        setOrderDisputeList,
        selectedDispute,
        setSelectedDispute,
        createDispute,
        setCreateDispute,
      }}
    >
      {children}
    </OrdersContext.Provider>
  );
};
