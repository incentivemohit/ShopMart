import Link from "next/link";
import React from "react";
import GridViewIcon from "@mui/icons-material/GridView";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import PaymentOutlinedIcon from "@mui/icons-material/PaymentOutlined";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import Logout from "@/components/utils/Logout";

export default function Sidebar() {
  return (
    <>
      <div className="w-1/5 h-screen flex flex-col justify-between  border-r-2 border-b-2">
        <div className="flex flex-col gap-3">
          <p className="text-2xl text-center cursor-pointer py-1 bg-gray-400 text-white ">
            ShopMart
          </p>

          <ul className="text-lg flex flex-col w-full">
            <Link href={"/admin/dashboard"}>
              <li className="py-2 flex justify-center hover:bg-black hover:text-white">
                <span className="flex items-center gap-2 w-1/2">
                  <GridViewIcon fontSize="small" /> Dashboard
                </span>
              </li>
            </Link>

            <Link href={"/admin/dashboard/products"}>
              <li className="py-2 flex justify-center hover:bg-black hover:text-white">
                <span className="flex  items-center gap-2 w-1/2">
                  <LocalMallOutlinedIcon fontSize="small" /> Products
                </span>
              </li>
            </Link>
            <Link href={"/admin/dashboard/orders"}>
              <li className="py-2 flex justify-center items-center gap-2 hover:bg-black hover:text-white">
                <span className="flex  items-center gap-2 w-1/2">
                  <ShoppingCartOutlinedIcon fontSize="small" /> Orders
                </span>
              </li>
            </Link>
            <Link href={"/admin/dashboard/orders"}>
              <li className="py-2 flex justify-center items-center gap-2 hover:bg-black hover:text-white">
                <span className="flex  items-center gap-2 w-1/2">
                  <PaymentOutlinedIcon fontSize="small" /> Payment
                </span>
              </li>
            </Link>
            <Link href={"/admin/dashboard/orders"}>
              <li className="py-2 flex justify-center items-center gap-2 hover:bg-black hover:text-white">
                <span className="flex  items-center gap-2 w-1/2">
                  <PeopleAltOutlinedIcon fontSize="small" /> Customers
                </span>
              </li>
            </Link>
            <Link href={"/admin/dashboard/orders"}>
              <li className="py-2 flex justify-center items-center gap-2 hover:bg-black hover:text-white">
                <span className="flex  items-center gap-2 w-1/2">
                  <NotificationsNoneOutlinedIcon fontSize="small" />{" "}
                  Notifications
                </span>
              </li>
            </Link>
          </ul>
        </div>

        <div>
          <p className="text-center bg-gray-400 text-white py-1 text-lg">
            Account
          </p>
          <ul className="text-lg flex flex-col  w-full">
            <Link href={"/admin/dashboard/products"}>
              <li className="py-2 flex justify-center hover:bg-black hover:text-white">
                <span className="flex  items-center gap-2 w-1/2">
                  <SettingsOutlinedIcon fontSize="small" /> Settings
                </span>
              </li>
            </Link>
            <Link href={"/admin/dashboard/orders"}>
              <li className="py-2 flex justify-center items-center gap-2 hover:bg-black hover:text-white">
                <span className="flex  items-center gap-2 w-1/2">
                  <InfoOutlinedIcon fontSize="small" /> Help
                </span>
              </li>
            </Link>

            <Logout>
              <li className="py-2 flex justify-center hover:bg-black hover:text-white">
                <span className="flex  items-center gap-2 w-1/2">
                  <LogoutOutlinedIcon fontSize="small" /> Logout
                </span>
              </li>
            </Logout>
          </ul>
        </div>
      </div>
    </>
  );
}
