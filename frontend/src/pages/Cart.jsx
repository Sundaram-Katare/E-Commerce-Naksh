import Navbar from "../components/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchCart, updateCartQuantity, deleteFromCart } from "../features/Cart/cartSlice.js";
import { fetchProducts } from "../features/Product/productSlice.js";

export default function Cart() {
    const dispatch = useDispatch();
    const { cartItems, isLoading, error } = useSelector((state) => state.cart);
    const { products } = useSelector((state) => state.product);

    useEffect(() => {
        dispatch(fetchCart());
        dispatch(fetchProducts());
    }, [dispatch]);

    const handleIncreaseQuantity = (cartId, currentQuantity) => {
        dispatch(updateCartQuantity({ cartId, quantity: currentQuantity + 1 }));
    };

    const handleDecreaseQuantity = (cartId, currentQuantity) => {
        if (currentQuantity > 1) {
            dispatch(updateCartQuantity({ cartId, quantity: currentQuantity - 1 }));
        }
    };

    const handleDelete = (cartId) => {
    dispatch(deleteFromCart(cartId)).then(() => {
        dispatch(fetchCart());
    });
};

    const getProductDetails = (productId) => {
        return products.find(p => p._id === productId);
    };

    const calculateTotal = () => {
        return cartItems.reduce((total, item) => {
            const product = getProductDetails(item.productId);
            return total + (product ? product.price * item.quantity : 0);
        }, 0).toFixed(2);
    };

    if (isLoading) return <div className="text-center py-10">Loading...</div>;

    return (
        <>
            <div className="min-h-screen bg-gradient-to-r from-[#61203D] to-[#B56565]">
                <Navbar />
                <div className="container mx-auto px-4 py-10 max-w-4xl">
                    <h1 className="text-6xl font-bold mb-10 text-center text-white font-playfair">Shopping Cart</h1>
                    
                    {error && <div className="text-center py-10 text-red-500 bg-white rounded-lg mb-4">Error: {error}</div>}
                    
                    {cartItems.length === 0 ? (
                        <div className="text-center py-10 text-white bg-white/10 rounded-lg">
                            <p className="text-2xl">Your cart is empty</p>
                        </div>
                    ) : (
                        <div className="space-y-4">
                            {cartItems.map((item) => {
                                const product = getProductDetails(item.productId);
                                if (!product) return null;
                                
                                return (
                                    <div key={item._id} className="bg-white rounded-lg shadow-md p-6 flex items-center justify-between">
                                        <div className="flex items-center space-x-6 flex-1">
                                            {product.image && (
                                                <img 
                                                    src={product.image} 
                                                    alt={product.name}
                                                    className="w-24 h-24 object-cover rounded-lg"
                                                />
                                            )}
                                            <div className="flex-1">
                                                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                                                    {product.name}
                                                </h3>
                                                <p className="text-gray-600 mb-2">
                                                    ${product.price}
                                                </p>
                                                <div className="flex items-center space-x-3">
                                                    <button 
                                                        onClick={() => handleDecreaseQuantity(item._id, item.quantity)}
                                                        className="bg-gray-300 hover:bg-gray-400 text-gray-800 py-1 px-3 rounded-lg"
                                                    >
                                                        −
                                                    </button>
                                                    <span className="text-lg font-semibold">{item.quantity}</span>
                                                    <button 
                                                        onClick={() => handleIncreaseQuantity(item._id, item.quantity)}
                                                        className="bg-gray-300 hover:bg-gray-400 text-gray-800 py-1 px-3 rounded-lg"
                                                    >
                                                        +
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <div className="text-right">
                                            <p className="text-xl font-bold text-green-600 mb-4">
                                                ${(product.price * item.quantity).toFixed(2)}
                                            </p>
                                            <button 
                                                onClick={() => handleDelete(item._id)}
                                                className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-lg transition-colors duration-200"
                                            >
                                                Delete
                                            </button>
                                        </div>
                                    </div>
                                );
                            })}
                            
                            <div className="bg-white rounded-lg shadow-md p-6 mt-6">
                                <div className="flex justify-between items-center">
                                    <h2 className="text-2xl font-bold text-gray-800">Total:</h2>
                                    <p className="text-3xl font-bold text-green-600">${calculateTotal()}</p>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}