

export default function ProductCard({ product }) {
    return (
        <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden">
            <div className="bg-gray-200 h-48 flex items-center justify-center">
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
            <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-2">
                    {product.name}
                </h3>
                <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                    {product.description}
                </p>
                <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-green-600">
                        ${product.price}
                    </span>
                    <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg transition-colors duration-200">
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    );
}