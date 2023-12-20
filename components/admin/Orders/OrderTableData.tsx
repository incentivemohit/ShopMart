import React from "react";

export default function OrderTableData() {
  return (
    <div className="grid grid-cols-7 my-1 py-2 text-md hover:bg-gray-100 cursor-pointer">
      <div className="pl-2">1</div>
      <div>87843456</div>
      <div>Smart watch</div>
      <div>Shiv vihar</div>
      <div>23/04/2020</div>
      <div>$376.00</div>
      <div className="bg-green-200 w-fit rounded-full px-2 ">Completed</div>
    </div>
  );
}
