
import { MdOutlineMenu } from "react-icons/md";
import { MdOutlineCancel } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import { useState } from "react";
import Logo from "./assets/Logo.png";
function App() {
  let [isopen,setisopen] =  useState(false);
  let [isicon,setisicon] =  useState(false);
  return (
    <>
    <nav  className = "  flex flex-row py-0 px-9 lg:py-1 justify-between  bg-black ">
      <div className=   {`text-center h-14 w-16 my-1 lg:hidden  ${isopen ? 'opacity-0 ' : 'bg-opacity-85'} `}>
     <img className="h-full w-full" src={Logo} alt="" />
      </div>
      <div onClick={() => setisopen(!isopen)} >
        <div  className="  flex justify-center my-3 lg:hidden  text-white text-4xl">
          {
            isopen ? 
              <RxCross2 />
            : 
              <MdOutlineMenu />
          }
        </div>
      </div>
      <div className= {`flex-col lg:flex-row lg:justify-evenly lg:px-5 lg:static flex w-full text-center transition-all duration-500 bg-black  md:justify-evenly md:gap-3 absolute left-0 ${isopen ? 'top-14' : '-top-[420px]'} `} >
       <div className=" md:flex lg:flex-row  lg:mt-0  lg:w-full lg:justify-around justify-between">
        <div className="lg:flex lg:flex-row flex justify-center lg:py-0 items-center h-20  w-full lg:h-16 md:w-24  md:pl-6 ">
          <img className="w-24 md:w-full " src={Logo} alt="" />
        </div>
      <div className=" lg:px-2  lg:py-0">
        <ul className="list-none flex  lg:flex-row flex-col md:flex-row justify-between text-center md:pt-0 md:px-10 lg:my-0   md:my-4 text-2xl lg:text-xl lg:pt-1 xl:pt-0 xl:text-2xl md:text-2xl pt-3">
          <li className=" font-normal py-1 md:px-3 lg:py-3 text-white  hover:text-gray-500  hover:rotate-6 " >
            <a className="tracking-widest lg:tracking-normal" href="#">Catalog</a>
          </li>
          <li className=" font-normal py-1 md:px-3 lg:py-3  text-white hover:text-gray-500  hover:rotate-6">
            <a className="tracking-widest lg:tracking-normal " href="#">Delivery</a>
          </li>
          <li className=" font-normal py-1 md:px-3 lg:py-3  text-white hover:text-gray-500 hover:rotate-6">
            <a className="tracking-widest lg:tracking-normal" href="#">Payment</a>
          </li>
          <li className="font-normal py-1 md:px-3 lg:py-3  text-white hover:text-gray-500 hover:rotate-6 ">
            <a  className="tracking-widest lg:tracking-normal"href="#">Contact</a>
          </li>
          <li className=" font-normal py-1 md:px-3 lg:py-3  text-white hover:text-gray-500 hover:rotate-6">
            <a className="tracking-widest lg:tracking-normal" href="#">About</a>
          </li>
        </ul>
        </div>
      </div>
      <div> 
        <div className="flex-col flex md:flex-row md:justify-end lg:px-1 md:px-11 pb-5 lg:pb-0 text-center lg:h-10 justify-center items-center gap-3  py-2 lg:pt-5">
          <button className=" h-11 w-40 xl:h-11 xl:w-28 lg:h-11 lg:w-28 lg:text-2sm xl:text-xl md:h-11 md:w-36  flex items-center justify-center text-xl bg-white border-2  hover:border-white hover:text-white hover:bg-transparent  rounded">
          Sign In
          </button>
          <button className=" h-11 w-40 xl:h-11 xl:w-28 lg:h-11 lg:w-28  lg:text-2sm xl:text-xl md:h-11 md:w-36 flex items-center justify-center text-xl bg-white border-2  hover:border-white hover:text-white hover:bg-transparent  rounded">
          Join Now
          </button>
        </div>
        <div>
        </div>
      </div>
      </div>
    </nav>
    </>
  )
}

export default App
