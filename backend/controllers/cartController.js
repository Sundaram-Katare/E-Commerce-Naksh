import Cart from '../models/CartModel.js';

export const addToCart = async (req, res) => {
  const { productId, quantity } = req.body;

  if (!productId || !quantity) {
    return res.status(400).json({ message: "Invalid data" });
  }

  const item = await Cart.findOne({ productId });

  if (item) {
    item.quantity += quantity;
    await item.save();
  } else {
    await Cart.create({ productId, quantity });
  }

  res.json({ message: "Added to cart" });
};
