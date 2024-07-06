import React, { useEffect, useState } from "react";
import useAuth from "../../../../Hooks/useAuth";
import SubMyOrders from "./SubMyOrders";
import "./MyOrders.css";
const MyOrders = () => {
  const [orders, setOrders] = useState([]);
  const { user } = useAuth();
  useEffect(() => {
    fetch(
      `https://airplane-server-side.onrender.com/orders?email=${user.email}`
    )
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, []);
  return (
    <div className="container">
      <h1 className="text-primary">My Orders</h1>
      <div className="order-container py-3">
        <div className="order-container">
          {orders.map((order) => (
            <SubMyOrders key={order._id} order={order}></SubMyOrders>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyOrders;
