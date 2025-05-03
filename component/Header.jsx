import Link from "next/link";

export default function Header(){
    return(
        <header className="bg-[#000000] w-full h-20 flex sm:justify-center lg:justify-between">
            <img src="/logo.PNG" className="w-[200px] h-44 mt-[-48px] sm:hidden lg:block"/>
            <ul className="flex sm:text-sm  sm:justify-center sm:py-8 sm:gap-8 py-2 lg:text-lg lg:justify-end lg:py-6 lg:px-10 lg:gap-5 ">
                <li className="text-pink-100  hover:border-b-2 border-pink-100 transition duration-500"><Link href="./">HOME </Link></li>
                <i className="text-gray-800">/</i>
                <li className=" text-amber-50  hover:text-pink-100 hover:border-b-2 border-pink-100 transition duration-500"><Link href="/about">ABOUT</Link></li>
                <i className="text-gray-800">/</i>
                <li className=" text-amber-50  hover:text-pink-100 hover:border-b-2 border-pink-100 transition duration-500"><Link href="/work">WORK</Link></li>
                <i className="text-gray-800">/</i>
                <li className=" text-amber-50  hover:text-pink-100 hover:border-b-2 border-pink-100 transition duration-500"><Link href="/contact">CONTACT</Link></li>
            </ul>
        </header>
    )
}