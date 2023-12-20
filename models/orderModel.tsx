import mongoose, { Schema } from "mongoose";

const orderSchema = new Schema(
  {
    userId: {
      type: mongoose.Types.ObjectId,
      ref: "User",
    },
    firstName: {
      type: String,
    },
    lastName: {
      type: String,
    },
    address: {
      type: String,
    },
    phone: {
      type: String,
    },
    state: {
      type: String,
    },
    pincode: {
      type: String,
    },
    country: {
      type: String,
    },
    status: {
      type: String,
    },
    totalAmount: { type: Number },
    cartProducts: [
      {
        type: mongoose.Types.ObjectId,
        ref: "Cart",
      },
    ],
  },
  { timestamps: true }
);

const Order = mongoose.models.Order || mongoose.model("Order", orderSchema);

export default Order;
