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
            <Navbar />
            <div className="min-h-screen bg-gray-50">
                <div className="container mx-auto px-4 py-10">
                    <h1 className="text-4xl font-bold mb-10 text-center">Products</h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {products && products.length > 0 ? (
                            products.map((product) => (
                                <ProductCard key={product._id} product={product} />
                            ))
                        ) : (
                            <p className="text-center col-span-full">No products available</p>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}