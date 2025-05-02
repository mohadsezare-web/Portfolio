export default function RightSection(){
    return(
        <div className="sm:w-[100%] lg:w-[50%] lg:h-[88%] sm:p-20 lg:p-28 pt-40 bg-[#121212]">
            <h2 className="text-pink-100 text-[30px] font-semibold">Skills :</h2>
            <figure className="flex grow gap-11">
                <img className="w-[100px] h-[100px] object-cover transition-transform duration-300 hover:scale-125" src="/img1.png" alt="" />
                <img className="w-[100px] h-[100px] object-cover transition-transform duration-300 hover:scale-125" src="/img2.png" alt="" />
                <img className="w-[100px] h-[100px] object-cover transition-transform duration-300 hover:scale-125" src="/img3.png" alt="" />
                <img className="w-[100px] h-[100px] object-cover transition-transform duration-300 hover:scale-125" src="/img4.png" alt="" />
            </figure>
            <ul className=" flex p-6 gap-12 text-yellow-50">
                <li className="ml-2.5">HTML</li>
                <li className="ml-14">CSS</li>
                <li className="ml-9">JAVASCRIPT</li>
                <li className="ml-4">REACT</li>
            </ul>
            <figure className="flex grow mt-10 gap-11">
                <img className="w-[100px] h-[100px] transition-transform duration-300 hover:scale-125" src="/img5.png" alt="" />
                <img className="w-[100px] h-[100px] object-cover transition-transform duration-300 hover:scale-125" src="/img6.png" alt="" />
                <img className="w-[100px] h-[100px] object-cover transition-transform duration-300 hover:scale-125" src="/img7.jpg" alt="" />
            </figure>
            <ul className=" flex p-6 gap-10 text-yellow-50">
                <li>TAILWIND</li>
                <li className="ml-3">BOOTSTAP</li>
                <li className="ml-6">NEXT.JS</li>
            </ul>
        </div>
    )
}