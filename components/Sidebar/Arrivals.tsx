import Heading from "@/app/utils/Heading/Heading";
import React from "react";

export default function Arrivals() {
  return (
    <div>
      <Heading heading=" New Arrivals" />
      <ul className="flex flex-col gap-1 my-2">
        <li>Last 30 days</li>
        <li>Last 90 days</li>
      </ul>
    </div>
  );
}
