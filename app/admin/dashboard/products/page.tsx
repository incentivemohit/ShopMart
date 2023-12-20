import Products from "@/components/Products/Products";
import AddProduct from "@/components/admin/Products/AddProduct";
import SearchComponent from "@/components/utils/SearchComponent";
import UserIcon from "@/components/utils/UserIcon";
import React from "react";
export default function page() {
  return (
    <div>
      <div className="flex justify-between items-center p-3">
        <SearchComponent />
        <div className="flex items-center gap-2">
          <AddProduct /> <UserIcon />
        </div>
      </div>
      <div>
        <Products />
      </div>
    </div>
  );
}
