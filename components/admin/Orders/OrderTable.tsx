import React from "react";
import OrderTableData from "./OrderTableData";

export default function OrderTable() {
  return (
    <>
      <div className="grid grid-cols-7 border-b-2 pb-1">
        <div className="flex items-center">S.no</div>
        <div>Order ID</div>
        <div>Product Name</div>
        <div>Address</div>
        <div>Date</div>
        <div>Price</div>
        <div>Status</div>
      </div>
      <OrderTableData />
      <OrderTableData />
      <OrderTableData />
      <OrderTableData />
    </>
  );
}
