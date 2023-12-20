"use client";
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import OrdersList from "@/components/Orders/OrdersList";

import React, { useState } from "react";

export default function page() {
  return (
    <>
      <div>
        <Navbar />
        <div className="flex flex-col gap-5 items-center pt-16">
          <p className=" text-2xl text-center bg-black py-2 text-white w-full">
            Your Orders
          </p>

          <OrdersList />
        </div>
        <Footer />
      </div>
    </>
  );
}
