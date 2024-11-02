import Image from "next/image";
import React from "react";

export default function Aboutus() {
    return (
        <div className={"bg-white h-[100vh] flex flex-col justify-between pb-4"}>
            <h1 className={"text-[36px] leading-tight text-[#BE1215] font-poppins font-semibold text-center"}>About
                Us</h1>
            <div className={"flex flex-col h-[70%] justify-between"}>
                <div className={"mx-auto w-[1554px] xl:h-[171px] flex flex-row justify-between items-center"}>
                    <div className={"xl:w-[700px] flex flex-col justify-center"}>
                        <Image src={"/kitchen.png"} alt={"about"} width={519} height={709}/>
                    </div>
                    <div className={"xl:w-[700px] flex flex-col justify-center"}>
                        <p className={"font-poppins text-[20px] mt-5  "}>Founded by siblings Mia and Jake, MJ's is the
                            culmination of a lifelong dream to share their family’s culinary heritage with the world.
                             After years of honing their culinary skills in kitchens across the globe—from the bustling streets of Bangkok to the cozy trattorias of
                            Rome—they returned to their hometown, eager to create a space that reflects their journey
                            and invites the community to join in.</p>
                    </div>
                </div>
                <div className={"mx-auto w-[1554px] xl:h-[171px] flex flex-row justify-between items-center"}>
                    <div className={"xl:w-[700px] flex flex-col justify-center"}>
                        <p className={"font-poppins text-[20px] mt-5"}>At MJ's, we pride ourselves on a menu that blends
                            international flavors with local produce. Each dish is crafted with love, showcasing the
                            very best of seasonal ingredients. Whether you're enjoying our signature wood-fired pizzas,
                            savoring a fragrant curry, or indulging in a decadent dessert, we aim to provide an
                            unforgettable dining experience. Our warm, inviting atmosphere is designed to make you feel at home, whether you're
                            celebrating a special occasion or enjoying a casual night out.</p>
                    </div>
                    <div className={"xl:w-[700px] flex flex-col justify-center"}>
                        <Image src={"/pasta.png"} alt={"about"} width={519} height={709}/>
                    </div>
                </div>
            </div>
        </div>
    );
};