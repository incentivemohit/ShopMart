"use client";
import { useDispatch, useSelector } from "react-redux";
import ProductCard from "./ProductCard";
import { useEffect } from "react";
import { getUsers } from "@/redux/slices/productSlice";
import { RootState } from "@/redux/store";


export default  function Products() {
  const products = useSelector((state: RootState) => state.cart.products);
const dispatch =useDispatch()
  useEffect(() => {
    dispatch(getUsers())
  }, [])
  return (
    <>
      <div className="grid grid-cols-3 gap-1">
        {products && products.length !== 0 ? (
          products.map((data: any) => {
            return (
              <ProductCard
                key={data._id}
                _id={data._id}
                userId={data.userId}
                title={data.title}
                image={data.image}
                description={data.description}
                rating={data.rating}
                category={data.category}
                price={data.price}
                quantity={1}
              />
            );
          })
        ) : (
          <p className="text-3xl">No products</p>
        )}
      </div>
    </>
  );
}
