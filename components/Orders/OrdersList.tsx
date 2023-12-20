"use client";
import React, { useEffect, useState } from "react";
import Order from "./Order";
import axios from "axios";
import { Button, CircularProgress } from "@mui/material";

export default function OrdersList() {
  const user = JSON.parse(localStorage.getItem("user") as string);
  const [state, setState] = useState(false);
  const [orders, setOrders] = useState([]);

  const deleteOrders = async () => {
    try {
      await axios
        .delete("/api/order")
        .then(() => setState(!state))
        .catch((err) => console.log(err.message));
    } catch (error: any) {
      console.log(error.message);
    }
  };
  const getOrders = async () => {
    await axios
      .get(`/api/order?userId=${user.id}`)
      .then((res) => {
        setState(!state);
        setOrders(res.data);
      })
      .catch((err) => console.log(err.message));
  };

  useEffect(() => {
    getOrders();
  }, []);
  return (
    <>
      <div className="flex justify-end w-full px-5">
        <Button variant="outlined" size="small" onClick={()=>deleteOrders()}>
          Delete Orders
        </Button>
      </div>
      <div className="w-full grid grid-cols-9 gap-5 place-items-center border-b-2">
        <div className="flex items-center">S.no</div>
        <div>Order ID</div>
        <div>Products</div>
        <div>Address</div>
        <div>Items</div>
        <div>Price</div>
        <div>Date</div>
        <div>Status</div>
        <div>Action</div>
      </div>
      <div className="h-screen overflow-auto mb-5">
        {state == false ? (
          <div className="grid grid-cols-1 place-items-center">
            <CircularProgress />
          </div>
        ) : (
          orders &&
          orders.map((item: any) => {
            return <Order key={item._id} item={item} />;
          })
        )}
      </div>
    </>
  );
}
