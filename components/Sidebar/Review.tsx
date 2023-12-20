import Heading from "@/app/utils/Heading/Heading";
import { Rating } from "@mui/material";
import React from "react";

export default function Review() {
  return (
    <div>
      <Heading heading="Avg. Customer Review" />
      <ul className="flex flex-col gap-1 my-2">
        <li>
          <Rating name="size-small" defaultValue={4} size="small" />
          &nbsp;&&nbsp;Up
        </li>
        <li>
          <Rating name="size-small" defaultValue={3} size="small" />
          &nbsp;&&nbsp;Up
        </li>
        <li>
          <Rating name="size-small" defaultValue={2} size="small" />
          &nbsp;&&nbsp;Up
        </li>
        <li>
          <Rating name="size-small" defaultValue={1} size="small" />
          &nbsp;&&nbsp;Up
        </li>
      </ul>
    </div>
  );
}
