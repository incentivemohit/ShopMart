import mongoose from "mongoose";

const conn = async () => {
  try {
    await mongoose
      .connect("mongodb://localhost:27017/shopmart")
      .then(() => console.log("connected"))
      .catch((err: Error) => console.log(err.message));
  } catch (error) {
    console.log(error);
  }
};

export default conn;
