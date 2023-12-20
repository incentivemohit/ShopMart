import ImageComponent from "@/app/utils/ImageComponent/ImageCompontent";
import { Button } from "@mui/material";
import React from "react";

export default function Banner() {
  return (
    <>
      <div className="relative">
        <ImageComponent photo="./assets/images/banner.jpg" />
        <div className="absolute top-1/3 left-10 flex flex-col gap-4">
          <p className="text-4xl">Are you excited for Our Products <br /> and Want to buy ?</p>
          <div className="flex items-center gap-3">
          <Button variant="contained" size="large" href="/auth/login" className="bg-orange-300 text-2xl">Login</Button>
          <Button variant="contained" size="large" href="/auth/signup" className="bg-gray-400 text-2xl">Signup</Button>
          </div>
        </div>
      </div>
    </>
  );
}
