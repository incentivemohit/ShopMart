"use client";
import axios from "axios";
import { useRouter } from "next/navigation";
import React from "react";

export default function Logout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const handleLogout = async () => {
    try {
      await axios
        .get(`http://localhost:3000/api/auth/signup`)
        .then(() => {
          localStorage.removeItem("user");
          router.replace("/auth/login");
        })
        .catch((err) => console.log(err.message));
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div onClick={handleLogout} className="cursor-pointer">
      {children}
    </div>
  );
}
