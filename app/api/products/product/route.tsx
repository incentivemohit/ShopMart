import conn from "@/db/config";
import Product from "@/models/productModel";
import { NextRequest, NextResponse } from "next/server";

export async function DELETE(request: NextRequest) {
  try {
    await conn();
    const userId = request.nextUrl.searchParams.get("userId");

    const product = await Product.deleteMany({ userId });

    if (product) {
      return NextResponse.json("Products Deleted");
    } else {
      return NextResponse.json("Products not found");
    }
  } catch (error: any) {
    return NextResponse.json(error.message);
  }
}
