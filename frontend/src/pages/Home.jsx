import Navbar from "../components/Navbar";


export default function Home() {
    return (
        <>
         <div className="min-h-screen bg-gradient-to-r from-[#61203D] to-[#B56565]">
            <Navbar />
            <div className="bg-gradient-to-r text-center font-playfair text-[#ffcdcd] text-[350px]  from-[#61203D] to-[#B56565] min-h-screen flex items- justify-center relative px-16">
                   GLORY

                <div className="absolute inset-0 flex items-center justify-center">
                   <img src="https://www.pngplay.com/wp-content/uploads/8/Women-Model-Posing-Transparent-Background.png" alt="" className="h-[600px]"/>
                </div>
            </div>
         </div>
        </>
    )
}