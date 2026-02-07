import ProductModel from "../models/ProductModel.js";

export const getProducts = async (req, res) => {
    try {
        const products = await ProductModel.find({});
        return res.status(200).json(products);
    } catch (err) {
        return res.status(500).json({ message: "Internal Server Error" });
    }
};