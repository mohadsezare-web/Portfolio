import Header from "@/component/Header";
import SocialIcons from "./icone";
import ContactForm from "./ContactForm";


export default function Contact(){
    return(
        <div className="w-full h-[100vh] bg-[#121212] ">
            <Header/>
           <div className="lg:w-[50%] pl-10">
           <h2 className="text-pink-100 text-[30px] font-semibold sm:text-center sm:mt-20 lg:text-left lg:ml-16 lg:mt-20">Let's Contact :</h2>
           <p className="text-yellow-50 mt-10 text-[19px] leading-9 sm:text-center lg:text-left lg:ml-16 lg:mt10">"I'd love to hear from you! <br />Whether you have a question, a project in mind, <br /> or just want to say hi, feel free to reach out. You <br /> can contact me through the form below or via email."</p>
           </div>
           <div className="lg:flex">
            <div className="w-[50%] pl-10">
            < SocialIcons/>
            <h3 className="text-pink-100 text-[16px] w-[100%] sm:text-center sm:mt-20 sm:ml-36 lg:text-left lg:ml-16 lg:mt-16">@2025 Mohadese Zare All Rights Reserved.</h3>
            </div>
            <ContactForm/>
           </div>
        </div>
    )
}