import mongoose, { Schema } from "mongoose";

const cartSchema = new Schema(
  {
    productId: {
      type: mongoose.Types.ObjectId,
      ref:"Product"
    },
    userId: {
      type: String,
    },
    quantity: {
      type: Number,
    },
  },
  { timestamps: true }
);

const Cart = mongoose.models.Cart || mongoose.model("Cart", cartSchema);

export default Cart;
