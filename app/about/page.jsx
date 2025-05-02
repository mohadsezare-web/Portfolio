import Header from "@/component/Header";
import LeftSection from "./leftSection";
import RightSection from "./rightSection";

export default function About(){
    return(
       <section className="w-full sm:h-[105vh] lg:h-[100vh] bg-[#121212]">
         <Header/>
        <div className="lg:flex w-full  lg:h-[88%]">
        <LeftSection/>
        <RightSection/>
        </div>
       </section>
    )
}