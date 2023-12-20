import React from "react";
import ArrowDropUpOutlinedIcon from "@mui/icons-material/ArrowDropUpOutlined";
import ArrowDropDownOutlinedIcon from "@mui/icons-material/ArrowDropDownOutlined";
import Header from "@/components/admin/Header/Header";

export default function page() {
  return (
    <>
      <div>
        <Header/>
        <section className="flex justify-evenly items-center  px-3">
          <div className="shadow-lg bg-pink-200 w-52 rounded-xl p-2 flex flex-col gap-2">
            <p className="text-xs">Ecommerce Revenue</p>
            <p className="text-2xl">$245,450</p>

            <div className=" flex justify-between items-center">
              <span className="flex items-center text-green-500 bg-white rounded-full px-1">
                <ArrowDropUpOutlinedIcon />
                <p className="text-xs">14.9%</p>
              </span>
              <span>
                <p className="text-xs">(43.32 %)</p>
              </span>
            </div>
          </div>
          <div className="bg-indigo-100  w-52 shadow-lg  rounded-xl p-2 flex flex-col gap-2">
            <p className="text-xs">New Customers</p>
            <p className="text-2xl">684</p>
            <span className="flex items-center w-fit text-red-500 bg-white rounded-full px-1">
              <ArrowDropDownOutlinedIcon />
              <p className="text-xs">14.9%</p>
            </span>
          </div>
          <div className="bg-pink-200 w-52 shadow-lg rounded-xl p-2 flex flex-col gap-2">
            <p className="text-xs">Report Purchase Rate</p>
            <p className="text-2xl">75.12%</p>
            <div className="flex justify-between items-center">
              <span className="flex items-center text-green-500 bg-white rounded-full px-1">
                {" "}
                <ArrowDropUpOutlinedIcon />
                <p className="text-xs">25.9%</p>
              </span>
              <span>
                <p className="text-xs">(+23.32 %)</p>
              </span>
            </div>
          </div>
          <div className="bg-gray-200 w-52 shadow-lg rounded-xl p-2 flex flex-col gap-2">
            <p className="text-xs">Average Order Value</p>
            <p className="text-2xl">$245,450</p>
            <div className="flex justify-between items-center">
              <span className="flex items-center text-green-500 bg-white rounded-full px-1">
                <ArrowDropUpOutlinedIcon />
                <p className="text-xs">14.9%</p>
              </span>
              <span>
                <p className="text-xs">(+43.32 %)</p>
              </span>
            </div>
          </div>
          <div className="bg-indigo-100 w-52 shadow-lg rounded-xl p-2 flex flex-col gap-2">
            <p className="text-xs">Conversion rate</p>
            <p className="text-2xl">32.56 %</p>
            <span className="flex items-center w-fit text-red-500 bg-white rounded-full px-1">
              <ArrowDropDownOutlinedIcon />
              <p className="text-xs"> 14.9%</p>
            </span>
          </div>
        </section>
      </div>
    </>
  );
}
