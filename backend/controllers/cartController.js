import Cart from '../models/CartModel.js';
import Product from '../models/ProductModel.js';

export const addToCart = async (req, res) => {
  const { productId, quantity } = req.body;

  try {
    let item = await Cart.findOne({ productId });

    if (item) {
      item.quantity += quantity;
      await item.save();
    } else {
      await Cart.create({ productId, quantity });
    }

    res.json({
      success: true,
      message: "Added to cart",
      product: req.product
    });
  } catch (err) {
    console.error("Error adding to cart:", err);
    res.status(500).json({
      success: false,
      message: "Internal Server Error"
    });
  }
};

export const getCart = async (req, res) => {
  try {
    const cartItems = await Cart.find({}).populate('productId');
    res.json({
      success: true,
      data: cartItems
    });
  } catch (err) {
    console.error("Error fetching cart:", err);
    res.status(500).json({
      success: false,
      message: "Internal Server Error"
    });
  }
};

export const updateCart = async (req, res) => {
  const { id } = req.params;
  const { quantity } = req.body;

  if (!quantity || !Number.isInteger(quantity) || quantity < 1) {
    return res.status(400).json({
      success: false,
      message: "Quantity must be a positive integer"
    });
  }

  try {
    const item = await Cart.findByIdAndUpdate(id, { quantity }, { new: true });
    if (!item) {
      return res.status(404).json({
        success: false,
        message: "Item not found"
      });
    }
    res.json({
      success: true,
      data: item
    });
  } catch (err) {
    console.error("Error updating cart:", err);
    res.status(500).json({
      success: false,
      message: "Internal Server Error"
    });
  }
};

export const deleteFromCart = async (req, res) => {
  const { id } = req.params;

  try {
    const item = await Cart.findByIdAndDelete(id);
    if (!item) {
      return res.status(404).json({
        success: false,
        message: "Item not found"
      });
    }
    res.json({
      success: true,
      message: "Deleted from cart"
    });
  } catch (err) {
    console.error("Error deleting from cart:", err);
    res.status(500).json({
      success: false,
      message: "Internal Server Error"
    });
  }
};