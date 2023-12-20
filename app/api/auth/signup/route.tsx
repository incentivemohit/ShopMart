import bcrypt from "bcrypt";
import User from "@/models/userModel";
import conn from "@/db/config";
import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function POST(request: Request) {
  try {
    await conn();
    const { name, email, password, role } = await request.json();

    let user = await User.findOne({ email });

    if (user) {
      return NextResponse.json({ message: "data already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    user = new User({
      name,
      email,
      password: hashedPassword,
      role,
    });

    await user.save();

    return NextResponse.json({
      message: "logged In",
      id: user._id,
      email: user.email,
      role: user.role,
    });
  } catch (error: any) {
    return NextResponse.json({ message: error.message });
  }
}

export async function GET() {
  cookies().delete("token");

  return NextResponse.json({ message: "logout done" });
}
