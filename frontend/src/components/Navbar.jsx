import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { ShoppingCart } from 'lucide-react';

export default function Navbar() {
    const cartItems = useSelector((state) => state.cart.cartItems);
    const cartCount = cartItems.length;

    return (
        <>
            <nav className="flex items-center font-playfair justify-between mx-4 md:mx-16 lg:mx-32 p-4 bg-[#4F1F1F] text-white rounded-full py-2 flex-wrap gap-2">
                <Link to={"/"} className="text-2xl md:text-3xl font-semibold font-playfair text-white flex items-center">
                    Glory
                </Link>

                <div className="flex items-center gap-4 md:gap-6 text-sm md:text-base">
                    <Link className="flex space-x-2 items-center" to={"/products"}>
                        Products
                    </Link>

                    <Link className="relative flex items-center space-x-2" to={"/cart"}>
                        <span> <ShoppingCart /> </span>
                        {cartCount > 0 && (
                            <span className="absolute -top-2 -right-3 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                                {cartCount}
                            </span>
                        )}
                    </Link>
                </div>
            </nav>
        </>
    )
}