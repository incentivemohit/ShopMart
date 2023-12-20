import Link from "next/link";
import React from "react";
import NavLink from "./NavLink";

export default function Navbar() {
  return (
    <div className="fixed z-10 bg-white w-full md:flex justify-between items-center py-2 pr-5">
      <div className="flex justify-between items-center">
        <Link
          href="/"
          style={{ fontFamily: "Pacifico ,cursive" }}
          className="font-bold text-bold md:pl-4 md:text-2xl  "
        >
          ShopMart
        </Link>
      </div>

      <NavLink />
    </div>
  );
}
