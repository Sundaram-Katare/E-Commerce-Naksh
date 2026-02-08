
export default function HeroSub() {
    return (
        <div className="w-full bg-transparent px-4 sm:px-6 md:px-10 lg:px-16 py-8">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-playfair text-white mb-6">
                Curated for You
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
                {/* Left Video Card */}
                <div className="relative w-full h-56 sm:h-72 md:h-80 lg:h-full rounded-xl overflow-hidden shadow-lg">
                    <img
                        src="https://img.freepik.com/premium-photo/portrait-young-gorgeous-woman-dressed-jewelry-set-necklace-ring-bracelet-earrings-pretty-blue-eyed-model-is-demonstrating-attractive-makeup-manicure_353119-75.jpg"
                        alt="Hero"
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Right Products */}
                <div className="flex flex-col gap-4">
                    {/* Item 1 */}
                    <div className="flex items-center bg-white/90 rounded-xl p-4 shadow-md gap-4">
                        <div className="w-20 h-20 sm:w-24 sm:h-24 bg-gray-100 rounded-lg flex items-center justify-center overflow-hidden">
                            <img
                                src="https://images.unsplash.com/photo-1608042314453-ae338d80c427"
                                alt="Bracelet"
                                className="w-full h-full object-contain"
                            />
                        </div>
                        <div>
                            <h3 className="text-base sm:text-lg font-semibold text-gray-800 font-playfair">
                                Luxe Cuff Bracelet
                            </h3>
                            <p className="text-sm text-gray-600">
                                Underrated elegance for every day
                            </p>
                        </div>
                    </div>

                    {/* Item 2 */}
                    <div className="flex items-center bg-white/90 rounded-xl p-4 shadow-md gap-4">
                        <div className="w-20 h-20 sm:w-24 sm:h-24 bg-gray-100 rounded-lg flex items-center justify-center overflow-hidden">
                            <img
                                src="https://images.unsplash.com/photo-1588449668365-d15e397f6787"
                                alt="Studs"
                                className="w-full h-full object-contain"
                            />
                        </div>
                        <div>
                            <h3 className="text-base sm:text-lg font-semibold text-gray-800 font-playfair">
                                Cosmos Studs
                            </h3>
                            <p className="text-sm text-gray-600">
                                Timeless endlessly versatile
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
