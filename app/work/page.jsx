import Header from "@/component/Header";
import Link from "next/link";

export default function Work(){
    return(
        <section className="w-full h-[100vh] bg-[#121212] ">
            <Header/>
            <h2 className="text-pink-100 text-[30px] font-semibold m-10 sm:text-center lg:text-left lg:ml-20">My Projects :</h2>
            <div className="bg-[#121212] flex flex-wrap lg:justify-between sm:justify-center lg:px-20 lg:pt-14 w-full lg:h-[110vh] sm:h-[300vh] lg:mt-[-30px]">
                <div className="w-[420px] h-[300px] transition-transform duration-300 hover:scale-110">
                    <Link href="https://mohadsezare-web.github.io/parallax2/"><img className="w-full h-full object-cover" src="1image.png" alt="" /></Link>
                </div>
                <div className="w-[420px] h-[300px] transition-transform duration-300 hover:scale-110 ">
                    <Link href="https://mohadsezare-web.github.io/Sport/"><img className="w-full h-full object-cover" src="2image.png" alt="" /></Link>
                </div>
                <div className="w-[420px] h-[300px] transition-transform duration-300 hover:scale-110 ">
                    <Link href="https://mohadsezare-web.github.io/project11/"><img className="w-full h-full object-cover" src="3image.png" alt="" /></Link>
                </div>
                <div className="w-[420px] h-[300px] transition-transform duration-300 hover:scale-110">
                    <Link href="https://mohadsezare-web.github.io/project9-Groceem/"><img className="w-full h-full object-cover" src="4image.png" alt="" /></Link>
                </div>
                <div className="w-[420px] h-[300px] transition-transform duration-300 hover:scale-110">
                    <Link href="https://mohadsezare-web.github.io/project7-Architecture-Company/"><img className="w-full h-full object-cover" src="5image.png" alt="" /></Link>
                </div>
                <div className="w-[420px] h-[300px] transition-transform duration-300 hover:scale-110">
                    <Link href="https://mohadsezare-web.github.io/project8-SKT-Golf/"><img className="w-full h-full object-cover" src="6image.png" alt="" /></Link>
                </div>
            </div>
        </section>
    )
}