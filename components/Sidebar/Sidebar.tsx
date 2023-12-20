"use client";
import React, { useState } from "react";
import Categories from "./Categories";
import Prices from "./Prices";
import Discounts from "./Discounts";
import Review from "./Review";
import Arrivals from "./Arrivals";

export default function Sidebar() {
  const [categories, setCategories] = useState([]);

  //   const loadProductsByFilter = async (prices) => {
  //     await axios
  //       .get(
  //         `${BASE_URL}/api/v1/products/filter?lowPrice=${prices.start}&highPrice=${prices.end}`
  //       )
  //       .then((res) => {
  //         setProducts(res.data);
  //       })
  //       .catch((err) => {
  //         console.log(err.message);
  //       });
  //   };

  //   const loadProductsByCategory = async (category) => {
  //     await axios
  //       .get(`${BASE_URL}/api/v1/products/category/${category}`)
  //       .then((res) => {
  //         setProducts(res.data);
  //       })
  //       .catch((err) => {
  //         console.log(err.message);
  //       });
  //   };

  //   const loadProducts = async () => {
  //     await axios
  //       .get(`${BASE_URL}/api/v1/categories`)
  //       .then((res) => {
  //         setCategories(res.data);
  //       })
  //       .catch((err) => {
  //         console.log(err.message);
  //       });
  //   };

  return (
    <>
      <div className="flex flex-col justify-center w-1/5 h-fit bg-white text-black border border-1 rounded-lg p-3">
        <Categories />
        <Prices />
        <Discounts />
        <Review />
        <Arrivals />
      </div>
    </>
  );
}
