import Image from "next/image";
import React from "react";

export default function Aboutus() {
    return (
        <div className={"bg-white h-[100vh] flex flex-col justify-between pb-4"}>
            <h1 className={"text-[36px] leading-tight text-[#BE1215] font-poppins font-semibold text-center"}>About
                Us</h1>
            <div className={"flex flex-col h-[70%] justify-between ml-20"}>
                <div className={"mx-auto w-[1554px] xl:h-[171px] flex flex-row  justify-between items-center "}>
                    <div
                        className={"xl:w-[700px] flex flex-col justify-center relative group overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"}>
                        <Image src={"/kitchen.png"} alt={"about"} width={519} height={709}
                               className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"/>
                        <div
                            className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors duration-300"/>
                    </div>
                    <div className="xl:w-[700px] flex flex-col justify-center relative">
                        <div className="max-w-2xl font-poppins">
                            <h2 className="font-playball text-[#BE1215] text-2xl md:text-3xl mb-3">
                                Mj's is a premium taste
                            </h2>
                            <p className="text-[#BE1215] text-lg md:text-xl font-medium">
                                Founded by siblings Mia and Jake, <span className="italic"> MJ's is the
                                culmination of a lifelong dream to share their family’s </span><br/>
                                <span className="font-medium">Culinary</span> heritage with the world
                            </p>

                            {/* Decorative Scroll */}
                            <svg
                                className="mt-4 w-32 h-8 text-[#BE1215]"
                                viewBox="0 0 100 20"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M0 10C20 10 20 0 40 0C60 0 60 10 80 10C100 10 100 0 120 0"
                                    stroke="currentColor"
                                    strokeWidth="1"
                                />
                                <path
                                    d="M0 10C20 10 20 20 40 20C60 20 60 10 80 10C100 10 100 20 120 20"
                                    stroke="currentColor"
                                    strokeWidth="1"
                                />
                            </svg>
                        </div>
                    </div>
                </div>
                <div className={"mx-auto w-[1554px] xl:h-[171px] flex flex-row  justify-between items-center"}>
                    <div className="xl:w-[700px] flex flex-col justify-center relative">
                        <div className="max-w-2xl font-poppins">
                            <h2 className="font-poppins text-[#BE1215] text-2xl md:text-3xl mb-3">
                                Our menu blends international flavors with local, seasonal produce
                            </h2>
                            <p className="text-[#BE1215] text-lg md:text-xl font-medium">
                                From signature wood-fired pizzas to fragrant curries and decadent desserts <span
                                className="italic"> every dish offers an unforgettable dining experience in a warm ,</span><br/>
                                <span className="font-medium">Welcoming</span>  atmosphere.
                            </p>

                            {/* Decorative Scroll */}
                            <div className="mt-8 flex items-center justify-center space-x-2 ">
                                <div className="h-px w-8 bg-[#BE1215]"/>
                                <div className="h-1 w-1 rounded-full bg-[#BE1215]"/>
                                <div className="h-px w-8 bg-[#BE1215]"/>
                            </div>

                        </div>
                    </div>
                    <div
                        className={"xl:w-[700px] flex flex-col justify-center relative group overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"}>
                        <Image src={"/pasta.png"} alt={"about"} width={519} height={709}
                               className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"/>
                        <div
                            className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors duration-300"/>
                    </div>
                </div>
            </div>
        </div>
    );
};