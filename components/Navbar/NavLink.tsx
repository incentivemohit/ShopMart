"use client";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import Badge from "@mui/material/Badge";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import Link from "next/link";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import Tooltip from "@mui/material/Tooltip";
import Logout from "../utils/Logout";
import SearchComponent from "../utils/SearchComponent";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

export default function NavLink() {
  const [loggedIn, setLoggedIn] = useState();

  const cartproducts = useSelector(
    (state: RootState) => state.cart.cartproducts
  );

  useEffect(() => {
    setLoggedIn(JSON.parse(localStorage.getItem("user") as string));
  }, []);
  return (
    <ul className="flex items-center gap-5">
      <li>
        <SearchComponent />
      </li>
      <Link href={"/cart"}>
        <li>
          <Tooltip title="Add to Cart">
            <Badge
              color="error"
              badgeContent={
                cartproducts.length !== 0 ? cartproducts.length : "0"
              }
            >
              <AddShoppingCartIcon />
            </Badge>
          </Tooltip>
        </li>
      </Link>
      {loggedIn && (
        <Link href={"/orders"}>
          <li>
            <Tooltip title="My orders">
              <ShoppingBagOutlinedIcon />
            </Tooltip>
          </li>
        </Link>
      )}
      {loggedIn && (
        <li>
          <Logout>
            <Tooltip title="logout">
              <LogoutOutlinedIcon />
            </Tooltip>
          </Logout>
        </li>
      )}
    </ul>
  );
}
