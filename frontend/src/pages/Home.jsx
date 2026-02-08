import { Link } from "react-router-dom";
import HeroSub from "../components/HeroSub";
import Navbar from "../components/Navbar";
import { motion } from "framer-motion";

export default function Home() {
    return (
        <>
            <div className="relative min-h-screen bg-gradient-to-r from-[#61203D] to-[#B56565]">
                <Navbar />

                <div className="text-center font-playfair text-[#ffcdcd] 
                                text-[120px] sm:text-[180px] md:text-[260px] lg:text-[350px]
                                min-h-screen flex items-center justify-center relative px-4 sm:px-8 md:px-16">
                    GLORY

                    <div className="absolute inset-0 flex items-center justify-center px-4">
                        <img
                            src="hero1.webp"
                            alt=""
                            className="h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] border-b-4 border-white object-contain"
                        />
                    </div>
                </div>

                <HeroSub />
            </div>

            <motion.div
                className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 md:bottom-8 md:right-8 
                           w-[220px] sm:w-[260px] md:w-[300px]
                           rounded-xl bg-white shadow-xl overflow-hidden grid grid-cols-2 z-50"
                initial={{ opacity: 0, x: 80, y: 80 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
            >
                <img
                    className="w-full h-full object-cover"
                    src="hero2.avif"
                    alt=""
                />

                <div className="flex flex-col items-center justify-center p-3 sm:p-4 text-center">
                    <Link to={"/products"} className="bg-[#61203D] text-white px-3 py-2 rounded-lg text-sm sm:text-base">
                        Shop Now
                    </Link>
                </div>
            </motion.div>
        </>
    );
}
