import {Input} from "./ui/input"
import {Instagram, Phone} from "lucide-react"
import Link from "next/link"
import React from "react"

export default function Footer() {
    return (
        <footer className="w-full bg-[#FFB5B5] px-6 py-8 mt-48">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Links Section */}
                <div>
                    <h3 className="font-poppins font-semibold text-[20px] mb-4">Links</h3>
                    <nav className="flex flex-col space-y-2 font-poppins font-normal">
                        <Link href="/" className="hover:underline">
                            Home
                        </Link>
                        <Link href="#menu" className="hover:underline">
                            Menu
                        </Link>
                        <Link href="#about" className="hover:underline">
                            About Us
                        </Link>
                        <Link href="#contact" className="hover:underline">
                            Contact Us
                        </Link>
                    </nav>
                </div>

                {/* Restaurant Location */}
                <div>
                    <h3 className="font-poppins font-semibold text-[20px] mb-4">Restaurant location</h3>
                    <p>Ground floor, West Building</p>
                    <p>Nairobi, Kenya</p>
                </div>

                {/* Newsletter Signup */}
                <div>
                    <h3 className="font-poppins font-semibold text-[20px] mb-4">Sign up to our newsletter</h3>
                    <Input
                        type="email"
                        placeholder="Enter your Email"
                        className="bg-white mb-4"
                    />
                    <div className="flex flex-col font-poppins font-semibold text-[20px]">
                        <p>Contact us:</p>
                        <div className={"flex space-x-4 items-center"}>
                            <Link href="https://instagram.com" className="hover:opacity-80">
                                <Instagram className="h-5 w-5"/>
                            </Link>
                            <Link href="tel:" className="hover:opacity-80">
                                <Phone className="h-5 w-5"/>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Copyright */}
            <div className="text-center mt-8 text-sm">
                © 2024. All rights reserved
            </div>
        </footer>
    )
}