import Heading from "@/app/utils/Heading/Heading";
import { Checkbox } from "@chakra-ui/react";
import React from "react";

export default function Discounts() {
  return (
    <>
      <div>
        <Heading heading="Discounts" />
        <ul className="flex flex-col gap-1 my-2">
          <li>
            <Checkbox value="sasuke">5% Off or More</Checkbox>
          </li>
          <li>
            <Checkbox value="sasuke">10% Off or More</Checkbox>
          </li>
          <li>
            <Checkbox value="sasuke">15% Off or More</Checkbox>
          </li>
          <li>
            <Checkbox value="sasuke">20% Off or More</Checkbox>
          </li>
          <li>
            <Checkbox value="sasuke">40% Off or More</Checkbox>
          </li>
          <li>
            <Checkbox value="sasuke">60% Off or More</Checkbox>
          </li>
        </ul>
      </div>
    </>
  );
}
