'use client'
import { motion } from "framer-motion"
import Image from "next/image"
import React from "react";

export default function Drinksenu() {
    const drinksCategories = [
        {
            title: "Ice cream",
            image: "/icecream.jpg",
        },
        {
            title: "Fruit delight",
            image: "/fruitdessert.jpg",
        },
        {
            title: "Cake slices",
            image: "/cakeslice.jpg",
        },
        {
            title: "Sundaes",
            image: "/sundaes.jpg",
        },
    ]

    return (
        <div className="min-h-screen bg-white ">
            {/* Hero Section */}
            <section className="relative pt-20 overflow-hidden">
                <div className="relative h-[30vh] sm:h-[40vh] md:h-[50vh] lg:h-[60vh] xl:h-[70vh]">
                    <Image
                        src="/dessertbanner.jpg"
                        alt="Menu banner"
                        layout="fill"
                        objectFit="cover"
                        quality={100}
                        priority
                        className="object-top fixed top-0 left-0"
                    />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors duration-300"/>
                    <motion.div
                        initial={{opacity: 0, y: 20}}
                        animate={{opacity: 1, y: 0}}
                        transition={{duration: 0.8}}
                        className="absolute inset-0 flex flex-col justify-end items-center p-4 sm:p-6 md:p-8 text-center"
                    >
                        <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif mb-2 sm:mb-3 md:mb-4">
                            Our Menu
                        </h1>
                        <p className="text-white/90 text-sm sm:text-base md:text-lg lg:text-xl max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl mx-auto">
                        Start Your Day Right: Dive into a Symphony of Flavors with Our Irresistible Breakfast Creations That Will Keep You Energized!
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Drinks Categories */}
            <section className="container mx-auto px-4 py-16 md:py-24">
                <motion.div
                    initial={{opacity: 0, y: 20}}
                    animate={{opacity: 1, y: 0}}
                    transition={{duration: 0.6}}
                    className="text-center mb-16 "
                >
                    <h2 className="text-2xl md:text-3xl font-serif text-[#DC2626] mb-4 ">DRINKS MENU</h2>
                    <div className="h-0.5 w-20 bg-[#DC2626] mx-auto"/>
                </motion.div>

                {/* Horizontal Layout for Drink Categories */}
                <div className="flex overflow-x-auto space-x-8">
                    {drinksCategories.map((category, index) => (
                        <motion.div
                            key={category.title}
                            initial={{opacity: 0, y: 20}}
                            animate={{opacity: 1, y: 0}}
                            transition={{duration: 0.6, delay: index * 0.1}}
                            className="group relative min-w-[200px] rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                        >
                            <div className="relative aspect-[4/3] h-64"> {/* Fixed height to maintain uniformity */}
                                <Image
                                    src={category.image}
                                    alt={category.title}
                                    layout="fill" 
                                    objectFit="cover" 
                                    className="transition-transform duration-300 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors duration-300" />
                                <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-6">
                                    <h3 className="text-2xl md:text-3xl font-serif mb-2">{category.title}</h3>
                                    <button className="mt-4 px-6 py-2 border-2 border-white hover:bg-white hover:text-black transition-colors duration-300">
                                        View {category.title}
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>
        </div>
    )
}