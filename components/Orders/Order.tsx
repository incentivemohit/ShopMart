import ImageComponent from "@/app/utils/ImageComponent/ImageCompontent";
import React from "react";
import ModeEditOutlineOutlinedIcon from "@mui/icons-material/ModeEditOutlineOutlined";
import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";
import OrderedProducts from "./OrderedProducts";

export default function Order({ item }: any) {
  const user = JSON.parse(localStorage.getItem("user") as string);
  let i = 1;
  return (
    <>
      <div className="grid grid-cols-9 gap-5 py-2 place-items-center text-md hover:bg-gray-100 cursor-pointer">
        <div className="pl-2">{i++}</div>
        <div className="text-md">{item._id}</div>
        <div>
          <OrderedProducts cartProducts={item.cartProducts} />
        </div>
        <div>{item.address}</div>

        <div>{item.cartProducts.length}</div>
        <div>${item.totalAmount}</div>
        <div>{item.createdAt}</div>
        <div className="bg-green-200 w-fit rounded-full px-2 ">Completed</div>
        <div className="flex items-center gap-5 justify-center">
         {
          user && user.role? <span className="bg-gray-300 p-2 rounded-full">
          <ModeEditOutlineOutlinedIcon />
        </span>:null
         }
          <span className="bg-gray-300 p-2 rounded-full">
            <DeleteForeverOutlinedIcon />
          </span>
        </div>
      </div>
    </>
  );
}
