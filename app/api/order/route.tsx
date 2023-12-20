import conn from "@/db/config";
import Cart from "@/models/cartModel";
import Order from "@/models/orderModel";
import { NextRequest, NextResponse } from "next/server";

interface Product {
  productId: string;
  userId: string;
  quantity: number;
}

export async function POST(request: NextRequest) {
  try {
    await conn();
    const newOrder = await request.json();

    const { cartProducts, ...orderDetails } = newOrder;

    for (let i = 0; i < cartProducts.length; i++) {
      const { _id, quantity } = cartProducts[i];
      const cart = new Cart({
        productId: _id,
        userId: newOrder.userId,
        quantity,
      });
      await cart.save();
    }

    const cart = await Cart.find({ userId: newOrder.userId });
    const order = new Order({ ...orderDetails });

    for (let i = 0; i < cart.length; i++) {
      order.cartProducts.push(cart[i]._id);
      await order.save();
    }
    await order.save();

    return NextResponse.json("order completed");
  } catch (error: any) {
    return NextResponse.json(error.message);
  }
}

export async function GET(request: NextRequest) {
  try {
    await conn();

    const id = request.nextUrl.searchParams.get("userId");

    const order = await Order.find({ userId: id }).populate({
      path: "cartProducts",
      populate: { path: "productId" },
    });

    // const orderDetails = [];

    // order.map((item) => {
    //   orderDetails.push({
    //     cartProducts: item.cartProducts,
    //     addres: item.address,
    //     totalItems: item.totalItems,
    //     totalAmount: item.totalAmount,
    //     orderId: item._id,
    //     orderedAt: item.createdAt,
    //   });
    // });

    return NextResponse.json(order);
  } catch (error: any) {
    return NextResponse.json(error.message);
  }
}
