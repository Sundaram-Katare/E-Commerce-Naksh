import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <>
         <nav className="flex items-center justify-between mx-16 my-4 p-4">
            <div className="text-3xl font-semibold font-pacifico text-red-700 flex items-center">
                Flashy
            </div>

            <Link className="flex space-x-2 items-center"
                  to={"/products"}
            >
                Products
            </Link>

            <Link>
                CART
            </Link>
         </nav>
        </>
    )
}