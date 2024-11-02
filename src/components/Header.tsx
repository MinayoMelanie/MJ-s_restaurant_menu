'use client';
import {Menu, Search, ShoppingCart} from "lucide-react";
import Link from "next/link";
import React from "react";

const navlinks =[
    {name: "Home", href: "#"},
    {name: "Menu", href: "/menu"},
    {name: "Order", href: "/order"},
    {name: "About Us", href: "#about"},
    {name: "Contact Us", href: "#contact"},
];

export default function Header() {

    return(
        <div className={"w-full fixed top-0 left-0 z-40 bg-white xl:h-[171px]"}>

        <div className={"xl:w-[1554px] xl:h-[171px]  mx-auto z-50"}>
            <div>
                <h1 className={"font-playball text-center text-[80px] leading-tight"}>MJ's</h1>
            </div>
            <div className={"flex flex-row justify-between z-40"}>
                <div className={" ml-10 xl:w-[100px]"}>
                    <Menu className={"w-[40px] h-[40px]"} />
                </div>
                <nav className={" xl:w-[700px] mx-auto flex flex-row justify-evenly"}>
                    {navlinks.map((link, index) => (
                        <Link key={index} href={link.href} className={"text-[20px] font-semibold font-poppins hover:text-[#BE1215] focus:text-[#BE1215] focus:underline focus:underline-offset-8 "}>
                            {link.name}
                        </Link>
                    ))}
                </nav>
                <div className={" xl:w-[80px] mr-10 flex flex-row justify-around"}>
                    <Search className={"w-[40px] h-[40px]"} />
                    <ShoppingCart className={"w-[40px] h-[40px]"}/>
                </div>
            </div>
        </div>

        </div>
    )
}