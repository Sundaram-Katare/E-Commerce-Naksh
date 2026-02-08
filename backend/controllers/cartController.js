import Cart from '../models/CartModel.js';
import Product from '../models/ProductModel.js';

export const addToCart = async (req, res) => {
  const { productId, quantity } = req.body;

  if (!productId || !quantity) {
    return res.status(400).json({ message: "Invalid data" });
  }

  try {
    const item = await Cart.findOne({ productId });

    if (item) {
      item.quantity += quantity;
      await item.save();
    } else {
      await Cart.create({ productId, quantity });
    }

    res.json({ message: "Added to cart" });
  } catch (err) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const getCart = async (req, res) => {
  try {
    const cartItems = await Cart.find({});
    res.json(cartItems);
  } catch (err) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const updateCart = async (req, res) => {
  const { id } = req.params;
  const { quantity } = req.body;

  if (!quantity || quantity < 1) {
    return res.status(400).json({ message: "Invalid quantity" });
  }

  try {
    const item = await Cart.findByIdAndUpdate(id, { quantity }, { new: true });
    if (!item) {
      return res.status(404).json({ message: "Item not found" });
    }
    res.json(item);
  } catch (err) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const deleteFromCart = async (req, res) => {
  const { id } = req.params;

  try {
    const item = await Cart.findByIdAndDelete(id);
    if (!item) {
      return res.status(404).json({ message: "Item not found" });
    }
    res.json({ message: "Deleted from cart" });
  } catch (err) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};