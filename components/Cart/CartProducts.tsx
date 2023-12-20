"use client";
import React, { useEffect, useState } from "react";
import CartProduct from "./CartProduct";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { totalBill } from "@/redux/slices/productSlice";

export default function CartProducts() {
  const cartproducts = useSelector(
    (state: RootState) => state.cart.cartproducts
  );

  const dispatch = useDispatch();
  dispatch(totalBill());

  return (
    <div className="overflow-auto h-screen px-2">
      {cartproducts && cartproducts.length !== 0 ? (
        cartproducts.map((item) => {
          return (
            <CartProduct
              productId={item._id}
              title={item.title}
              photo={item.image}
              price={item.price}
              quantity={item.quantity}
            />
          );
        })
      ) : (
        <div className="h-screen flex justify-center items-center">
          <p className="text-2xl">No cartItems Added</p>
        </div>
      )}
    </div>
  );
}
