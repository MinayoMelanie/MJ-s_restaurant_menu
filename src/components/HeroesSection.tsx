import Image from "next/image"

export default function HeroesSection() {
    return (
        <section className="relative w-full overflow-hidden bg-white mt-48 ">
            <div className={"text-[#BE1215] z-20 absolute left-[30rem] text-center "}>
                <h1 className="text-[48px] font-normal text-center text-[#BE1215] font-playball">
                    Welcome to MJ ‘s, where every meal tells a story
                </h1>
            </div>
            {/* Top SVG Wave */}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="absolute top-0 left-0 w-full z-10 ">
                <path fill="#ffffff" fill-opacity="1"
                      d="M0,192L80,165.3C160,139,320,85,480,96C640,107,800,181,960,192C1120,203,1280,149,1360,122.7L1440,96L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
                      ></path>
            </svg>

            {/* Background Image */}
            <div className="relative mt-[7rem] mb-20 ">
                <Image
                    src="/Heroes.png"
                    alt="Heroes"
                    width={400} // Actual width of the image
                    height={300} // Actual height of the image
                    layout="responsive"
                    className="max-h-[600px] w-[100%] h-auto object-cover rounded-lg shadow-2xl"
                />
            </div>

            {/* Bottom SVG Wave */}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className={"absolute bottom-0 left-0 w-full"}>
                <path fill="#ffffff" fill-opacity="1"
                      d="M0,192L80,165.3C160,139,320,85,480,96C640,107,800,181,960,192C1120,203,1280,149,1360,122.7L1440,96L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
                      ></path>
            </svg>

            <div className={"absolute bottom-32 left-[26rem] w-[311px] h-[56px] text-black bg-[#72D3FC] text-center py-4 font-poppins font-semibold text-[20px]"}>
                <button className={""}>
                    Order Now
                </button>
            </div>
        </section>
    )
}