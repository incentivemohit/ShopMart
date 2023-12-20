"use client";
import React from "react";

import CancelRoundedIcon from "@mui/icons-material/CancelRounded";
import ImageComponent from "@/app/utils/ImageComponent/ImageCompontent";
import { Button } from "@mui/material";
import { useDispatch } from "react-redux";
import {
  decreament,
  increament,
  removeItem,
} from "@/redux/slices/productSlice";

interface CartProductProps {
  productId: string;
  title: string;
  photo: string;
  price: number;
  quantity: number | undefined;
}

export default function CartProduct(props: CartProductProps) {
  const dispatch = useDispatch();
  return (
    <div className="p-2 mb-2 flex items-center gap-3 border border-solid ">
      <div className="w-32 h-32 p-3 lg:w-52 h-38">
        <ImageComponent photo={props.photo} />
      </div>

      <div className="flex flex-col gap-4">
        <div>
          <div className="relative lg:w-60">
            <p className="text-sm md:text-lg lg:text-xl pr-2 truncate ...">
              {props.title}
            </p>

            <CancelRoundedIcon
              className="hover:text-red-800 cursor-pointer absolute top-0 right-0 "
              onClick={() => dispatch(removeItem(props.productId))}
            />
          </div>

          <div className="flex mt-3 gap-2 items-center">
            <Button
              variant="outlined"
              className="w-12 h-10"
              onClick={() => dispatch(decreament(props.productId))}
            >
              <span className="text-5xl">-</span>
            </Button>
            <span className="text-xl">{props.quantity}</span>
            <Button
              variant="outlined"
              className="w-12 h-10"
              onClick={() => dispatch(increament(props.productId))}
            >
              <span className="text-4xl">+</span>
            </Button>
          </div>
        </div>
        <p className="text-lg md:text-lg lg:text-2xl">Rs. {props.price}</p>
      </div>
    </div>
  );
}
