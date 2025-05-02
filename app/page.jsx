import Header from "../component/Header"


export default function para(){
  return(
    <div style={{backgroundColor:'#121212',width:'100%',height:'100vh'}}>
      <Header/>
      <div className="sm:mt-[40%] lg:mt-[18%]">
      <figure className="w-full mt-[-200px] flex justify-center ">
        <img className="w-52 h-auto object-cover rounded-full" src="/My-img.png" alt="my photo" />
      </figure>
      <h1 className="bg-gradient-to-r from-pink-300 via-yellow-50 to-amber-200  text-transparent bg-clip-text w-full text-center sm:text-[40px] lg:text-5xl font-bold pt-8">Hey, i'm Mohadese Zare</h1>
      <h2 className="text-pink-200 w-full text-center sm:text-[30px] lg:text-3xl font-semibold pt-6">Front End Developer</h2>
      <p className="text-center sm:text-[17px] lg:text-[20px] text-pink-100  py-6">Code is my canvas — I design, build, and polish every pixel with purpose</p>
      </div>
    </div>
  )
}