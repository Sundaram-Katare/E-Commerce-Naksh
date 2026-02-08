import Product from '../models/ProductModel.js';
import mongoose from 'mongoose';

export const validateAddToCart = async (req, res, next) => {
  try {
    const { productId, quantity } = req.body;

    if (!productId || quantity === undefined) {
      return res.status(400).json({
        success: false,
        message: "productId and quantity are required"
      });
    }

    if (!mongoose.Types.ObjectId.isValid(productId)) {
      return res.status(400).json({
        success: false,
        message: "Invalid product ID format"
      });
    }

    if (!Number.isInteger(quantity) || quantity < 1) {
      return res.status(400).json({
        success: false,
        message: "Quantity must be a positive integer"
      });
    }

    if (quantity > 1000) {
      return res.status(400).json({
        success: false,
        message: "Quantity cannot exceed 1000 items per request"
      });
    }

    const product = await Product.findById(productId);
    if (!product) {
      return res.status(404).json({
        success: false,
        message: "Product not found"
      });
    }

    req.product = product;

    next();
  } catch (error) {
    console.error("Validation error:", error);
    res.status(500).json({
      success: false,
      message: "Server error during validation"
    });
  }
};