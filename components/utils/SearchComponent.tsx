import React, { useState } from "react";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { useDispatch, useSelector } from "react-redux";
import { getUsers, searchProducts } from "@/redux/slices/productSlice";
import { RootState } from "@/redux/store";

export default function SearchComponent() {
  const products = useSelector((state: RootState) => state.cart.products);
  const [search,setSearch]=useState("")
  const dispatch = useDispatch();

  const handleSearch = () => {
    dispatch(searchProducts({products,search}));

    if(search.length<=0){
      dispatch(getUsers())
    }

  };

  return (
    <div className="flex items-center text-black bg-gray-200 rounded-full px-2 pr-3 py-2 w-80">
      <SearchOutlinedIcon fontSize="small" />
      <input
        type="search"
        placeholder="Search..."
        className="text-sm px-1 w-full outline-none bg-gray-200"
        onKeyDown={handleSearch}
        value={search}
        onChange={e=>setSearch(e.target.value)}
      />
    </div>
  );
}
