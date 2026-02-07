import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: String,
  price: Number,
  image: String,
  description: String
}, { collection: "products" });

export default mongoose.model("Product", productSchema);