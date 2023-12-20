"use server";
import User from "@/models/userModel";
import conn from "@/db/config";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import Jwt from "jsonwebtoken";
import { cookies } from "next/headers";

const generateToken = (userId: string) => {
  return Jwt.sign({ _id: userId }, process.env.JWT_SECRET_KEY as string);
};

export async function POST(request: Request) {
  try {
    await conn();
    const { email, password } = await request.json();
    let user = await User.findOne({ email: email });

    if (!user) {
      return NextResponse.json({ message: "User doesn't exists" ,status:false});
    }
    const match = await bcrypt.compare(password, user.password);

    if (!match) {
      return NextResponse.json({ message: "password doesn't match" });
    }

    let token = generateToken(user._id);

    cookies().set("token", token);

    return NextResponse.json({
      message: "logged In",
      id: user._id,
      email: user.email,
      role: user.role,
      status:true
    });
  } catch (error: any) {
    console.log(error.message);
  }
}
