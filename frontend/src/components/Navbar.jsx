import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Navbar() {
    const cartItems = useSelector((state) => state.cart.cartItems);
    const cartCount = cartItems.length;

    return (
        <>
         <nav className="flex items-center font-playfair justify-between mx-32 p-4 bg-[#4F1F1F] text-white rounded-full py-2 ">
            <div className="text-3xl font-semibold font-playfair text-white flex items-center">
                Flashy
            </div>

            <Link className="flex space-x-2 items-center"
                  to={"/products"}
            >
                Products
            </Link>

            <Link className="relative flex items-center space-x-2" to={"/cart"}>
                <span>CART</span>
                {cartCount > 0 && (
                    <span className="absolute -top-2 -right-3 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                        {cartCount}
                    </span>
                )}
            </Link>
         </nav>
        </>
    )
}