import express from 'express';
import { addToCart, getCart, updateCart, deleteFromCart } from '../controllers/cartController.js';
import { validateAddToCart } from '../middleware/cartValidation.js';

const router = express.Router();

router.post("/add", validateAddToCart, addToCart);
router.get("/", getCart);
router.put("/:id", updateCart);
router.delete("/:id", deleteFromCart);

export default router;