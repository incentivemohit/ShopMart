"use client";
import React from "react";
import Rating from "@mui/material/Rating";
import ModeEditOutlineOutlinedIcon from "@mui/icons-material/ModeEditOutlineOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import { Card } from "@chakra-ui/react";
import ImageComponent from "@/app/utils/ImageComponent/ImageCompontent";
import { useDispatch } from "react-redux";
import { addProduct } from "@/redux/slices/productSlice";
import { Product } from "@/app/utils/types/types";

export default function Product(props: Product) {
  const user = JSON.parse(localStorage.getItem("user") as string);
  const dispatch = useDispatch();
  return (
    <>
      <Card className={`p-2 cursor-pointer bg-white text-black`}>
        <div
          className={`w-32 h-36 md:w-36 md:h-36 lg:w-72 lg:h-64 mx-auto relative ${
            user && user.role ? null : "hover:scale-75"
          }`}
        >
          <ImageComponent photo={`${props.image}`} />
          <p className="hidden md:text-md  bg-red-600 absolute top-2 left-2 px-2 rounded-full text-white">
            {props.category}
          </p>
        </div>

        <div className="w-full px-2 py-2">
          <p className="text-sm md:text-sm lg:w-52 pb-1 lg:truncate ...">
            {props.title}
          </p>

          <Rating
            name="size-small"
            defaultValue={3}
            className="text-[14px] md:text-[22px]"
          />
          <div className="md:flex md:items-center md:justify-between lg:flex justify-between">
            <p className="text-lg text-center md:text-lg lg:text-2xl">
              ${props.price}
            </p>

            {user && user.role ? (
              <div className="flex items-center gap-2">
                <span className="bg-gray-200 p-2 rounded-full">
                  <ModeEditOutlineOutlinedIcon />
                </span>
                <span className="bg-gray-200 p-2 rounded-full">
                  <DeleteOutlineOutlinedIcon />
                </span>
              </div>
            ) : (
              <p
                onClick={() => dispatch(addProduct(props))}
                className=" p-1 text-center text-sm md:text-sm px-3 lg:text-lg bg-orange-600 text-white rounded-full hover:bg-blue-800"
              >
                Add
              </p>
            )}
          </div>
        </div>
      </Card>
    </>
  );
}
