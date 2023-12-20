import Image from "next/image";
import React from "react";

export default function ImageComponent({ photo }: { photo: string }) {
  return <img style={{width:"100%",height:"100%"}} src={`${photo}`} alt="Loading..." />;
}
