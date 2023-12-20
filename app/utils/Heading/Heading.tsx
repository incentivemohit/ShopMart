import React from "react";

export default function Heading({ heading }: { heading: string }) {
  return (
    <h3 className="text-lg bg-slate-100 text-center font-semibold">
      {heading}
    </h3>
  );
}
