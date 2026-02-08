import ProductCard from "../components/ProductCard";
import Navbar from "../components/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchProducts } from "../features/Product/productSlice.js";

export default function Products() {
    const dispatch = useDispatch();
    const { products, isLoading, error } = useSelector((state) => state.product);

    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);

    if (isLoading) return <div className="text-center py-10">Loading...</div>;
    if (error) return <div className="text-center py-10 text-red-500">Error: {error}</div>;

    return (
        <>
            <div className="min-h-screen bg-gradient-to-r from-[#61203D] to-[#B56565] px-4 sm:px-8 md:px-16 lg:px-24 xl:px-36">
    <Navbar />
    <div className="container mx-auto px-2 sm:px-4 py-8 md:py-10">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-8 md:mb-10 text-center text-white font-playfair">
            Exclusive Collection
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
            {products && products.length > 0 ? (
                products.map((product) => (
                    <ProductCard key={product._id} product={product} />
                ))
            ) : (
                <p className="text-center col-span-full text-white">
                    No products available
                </p>
            )}
        </div>
    </div>
</div>
        </>
    );
}