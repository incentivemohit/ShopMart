import mongoose, { Schema } from "mongoose";

const productSchema = new Schema(
  {
    userId: {
      type: mongoose.Types.ObjectId,
      ref: "User",
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    image: {
      type: String,
    },
    price: {
      type: Number,
    },
    category: {
      type: String,
    },

    rating: {
      rate:{
        type: Number,
      }
    },
    stock: {
      type: Number,
      default:5
    },
    quantity: {
      type: Number,
      default: 1,
    },
  },
  { timestamps: true }
);

const Product = mongoose.models.Product || mongoose.model("Product", productSchema);

export default Product;
