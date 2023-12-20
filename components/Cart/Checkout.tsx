"use client";
import { RootState } from "@/redux/store";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import TextFieldComponent from "@/app/utils/ResuableComponent/TextFieldComponent";
import TextField from "@mui/material/TextField";
import axios from "axios";
import { useRouter } from "next/navigation";
import { Button, CircularProgress } from "@mui/material";
import { reset } from "@/redux/slices/productSlice";

export default function Checkout() {
  const products = useSelector((state: RootState) => state.cart.cartproducts);
  const totalAmount = useSelector((state: RootState) => state.cart.totalAmount);
  const [state, setState] = useState(false);
  const [orderDetails, setOrderDetails] = useState({
    firstName: "",
    lastName: "",
    address: "",
    phone: "",
    country: "",
    state: "",
    pincode: "",
  });
  const user = JSON.parse(localStorage.getItem("user") as string);
  const dispatch = useDispatch();
  const router = useRouter();
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setOrderDetails({
      ...orderDetails,
      [e.target.name]: e.target.value,
    });
  };

  const Checkout = async () => {
    try {
      setState(true);
      const order = {
        userId: user.id,
        firstName: orderDetails.firstName,
        lastName: orderDetails.lastName,
        address: orderDetails.address,
        phone: orderDetails.phone,
        state: orderDetails.state,
        pincode: orderDetails.pincode,
        country: orderDetails.country,
        status: "pending",
        totalAmount: totalAmount,
        cartProducts: products,
      };

      await axios
        .post("/api/order", order)
        .then(() => {
          setTimeout(() => {
            setState(false);
          }, 1500);
          router.push("/orders");
          setOrderDetails({
            firstName: "",
            lastName: "",
            address: "",
            phone: "",
            state: "",
            country: "",
            pincode: "",
          });
          dispatch(reset([]));
        })
        .catch((err) => console.log(err.message));
    } catch (error: any) {
      console.log(error.message);
    }
  };

  return (
    <>
      <div className="w-1/3 border p-2 h-fit">
        <p className="text-center text-lg font-semibold pb-2">
          Fill Your Details Here
        </p>
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-2">
            <TextFieldComponent
              label="First Name"
              name={"firstName"}
              value={orderDetails.firstName}
              handleChange={handleChange}
            />
            <TextFieldComponent
              label="Last Name"
              name={"lastName"}
              value={orderDetails.lastName}
              handleChange={handleChange}
            />
          </div>

          <TextField
            multiline
            id="outlined-multiline-flexible"
            label="Address"
            className="w-full"
            rows={2}
            name={"address"}
            value={orderDetails.address}
            onChange={handleChange}
          />

          <div className="flex items-center gap-2">
            <TextFieldComponent
              label="Phone no."
              name={"phone"}
              value={orderDetails.phone}
              handleChange={handleChange}
            />
            <TextFieldComponent
              label="Country"
              name={"country"}
              value={orderDetails.country}
              handleChange={handleChange}
            />
          </div>
          <div className="flex items-center gap-2">
            <TextFieldComponent
              label="State"
              name={"state"}
              value={orderDetails.state}
              handleChange={handleChange}
            />
            <TextFieldComponent
              label="Pincode"
              name={"pincode"}
              value={orderDetails.pincode}
              handleChange={handleChange}
            />
          </div>
        </div>
        <div className="p-3 bg-white">
          <p className="lg:text-xl">Total Item : {products.length}</p>
          <p className="lg:text-xl">Total Amount(in Rs.) : {totalAmount}</p>
          <p className="lg:text-xl text-green-600">Free delievery on Rs.1000</p>
          <Button
            className="mt-5 bg-red-800  w-full rounded-full p-2"
            onClick={Checkout}
            variant="contained"
          >
            {state ? (
              <CircularProgress />
            ) : (
              <p className="text-xl text-white">Order Now</p>
            )}
          </Button>
        </div>
      </div>
    </>
  );
}
