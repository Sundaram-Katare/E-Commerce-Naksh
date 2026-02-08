import { useDispatch } from "react-redux";
import { addToCart, fetchCart } from "../features/Cart/cartSlice.js";

export default function ProductCard({ product }) {
    const dispatch = useDispatch();

    const handleAddToCart = async () => {
    const result = await dispatch(addToCart({ productId: product._id, quantity: 1 }));
    if (!result.payload?.error) {
        dispatch(fetchCart());
    }
};

    return (
        <div className="bg-white rounded-lg shadow-md font-playfair hover:shadow-lg transition-shadow duration-300 overflow-hidden flex flex-col h-full">
    <div className="bg-gray-200 h-40 sm:h-44 md:h-48 flex items-center justify-center">
        {product.image ? (
            <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
            />
        ) : (
            <span className="text-gray-400">No Image</span>
        )}
    </div>

    <div className="p-4 flex flex-col flex-grow">
        <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-2 line-clamp-2">
            {product.name}
        </h3>

        <p className="text-gray-600 text-sm mb-4 line-clamp-2 flex-grow">
            {product.description}
        </p>

        <div className="flex justify-between items-center mt-auto">
            <span className="text-xl sm:text-2xl font-bold text-green-600">
                ${product.price}
            </span>

            <button
                onClick={handleAddToCart}
                className="bg-black hover:bg-blue-900 text-white py-2 px-3 sm:px-4 rounded-lg transition-colors duration-200 text-sm sm:text-base"
            >
                Add to Cart
            </button>
        </div>
    </div>
</div>
    );
}