import products from "../data/products.js";
import ProductModel from "../models/ProductModel.js";
import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config({ path: "../.env" });

await mongoose.connect(process.env.MONGO_URI);

const seedProducts = async () => {
    try {
        await ProductModel.deleteMany({});
        await ProductModel.insertMany(products);
        console.log("Products seeded successfully");
    } catch (err) {
        console.error("Error seeding products:", err);
    }
};

seedProducts();