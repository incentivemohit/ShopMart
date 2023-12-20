import React from "react";
import RightNav from "./RightNav";
import SearchComponent from "@/components/utils/SearchComponent";

export default function Header() {
  return (
    <>
      <div className="flex text-xl text-white py-2 px-3 justify-between w-full">
        <SearchComponent />
        <RightNav />
      </div>
    </>
  );
}
