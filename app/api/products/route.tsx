import conn from "@/db/config";
import Product from "@/models/productModel";
import { NextRequest, NextResponse } from "next/server";
import { products } from "./data";

export async function POST(request: Request) {
  try {
    await conn();
    // const productData = await request.json();

    // const user = await Product.findOne(productData);

    products.map(product=>{
      new Product(product).save()
    })
    // const product = new Product(products);

    // await product.save();

    return NextResponse.json("product added");
    // if (!user) {
    //   const product = new Product(products);

    //   await product.save();

    //   return NextResponse.json("product added");
    // }

    // return NextResponse.json("product already added");
  } catch (error: any) {
    return NextResponse.json(error.message);
  }
}

export async function DELETE(request: NextRequest) {
  try {
    await conn();
    const productId = request.nextUrl.searchParams.get("productId");

    const product = await Product.findByIdAndDelete({ _id: productId });

    if (product) {
      return NextResponse.json("Product Deleted");
    } else {
      return NextResponse.json("Product not found");
    }
  } catch (error: any) {
    return NextResponse.json(error.message);
  }
}

export async function PUT(request: NextRequest) {
  try {
    await conn();
    const productId = request.nextUrl.searchParams.get("productId");
    const productData = await request.json();

    const userExist = await Product.findByIdAndUpdate(
      { _id: productId },
      { $set: productData },
      { new: true }
    );

    if (userExist) {
      return NextResponse.json("Product Updated");
    }

    return NextResponse.json("Can't Update");
  } catch (error: any) {
    return NextResponse.json(error.message);
  }
}

export async function GET() {
  try {
    await conn();

    const products = await Product.find({});

    if (!products) {
      return NextResponse.json("No Products");
    }

    return NextResponse.json(products);
  } catch (error: any) {
    return NextResponse.json(error.message);
  }
}
