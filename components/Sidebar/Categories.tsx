"use client";
import React, { useEffect, useState } from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import Heading from "@/app/utils/Heading/Heading";

export default function Categories() {
  const [value, setValue] = React.useState("1");
  const [categories, setCategories] = useState<string[]>();

  const getCategories = async () => {
    const productsList = await fetch(
      "https://fakestoreapi.com/products/categories"
    );
    const data: string[] = await productsList.json();

    setCategories(data);
  };
  useEffect(() => {
    getCategories();
  }, []);

  return (
    <>
      <div className="flex flex-col">
        <Heading heading="Category" />

        <FormControl>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="female"
            name="radio-buttons-group"
          >
            {categories &&
              categories.map((item) => {
                return (
                  <FormControlLabel
                    value={item}
                    control={<Radio />}
                    label={item}
                  />
                );
              })}
          </RadioGroup>
        </FormControl>
      </div>
    </>
  );
}
