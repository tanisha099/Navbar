import { CiMenuFries } from "react-icons/ci";
import { MdOutlineCancel } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";
import { useState } from "react";
function App() {
  let [isopen,setisopen] =  useState(false);
  let [isicon,setisicon] =  useState(false);
  return (
    <>
    <nav  className = " py-7 flex flex-row  justify-between md:justify-center px-9 md:py-2  md:px-3 bg-gray-100">
      <div className= {` h-20 px-5 lg:px-24 text-center py-4 md:py-4 lg:py-5  absolute md:relative ${isopen ? 'top-24 w-full left-0 ' : 'top-0'}`}>
        <h1 className="text-3xl  font-medium">ACME</h1>
        <h6 className="text-xs  font-serif font-bold text-green-800">CORPORATION</h6>
      </div>
      <div onClick={() => setisopen(!isopen)} className="  h-8 w-11 md:hidden ml-auto">
        <div  className="  flex justify-center  text-5xl text-black">
          {
            isopen ? 
              <MdOutlineCancel />
            : 
              <CiMenuFries />
          }
        </div>
      </div>
      <div className= {`flex-col md:flex-row flex  w-full md:w-[80%] md:h-20 md:py-5 h-56 text-center  md:justify-evenly md:gap-3 absolute left-0 md:static ${isopen ? 'top-44' : '-top-96'} `} >
      <div>
        <ul className="list-none flex flex-col md:flex-row justify-between px-20 lg:px-1 xl:px-28 md:px-0 text-2xl">
          <li className="py-1 md:px-2 text-xl md:text-2sm lg:text-2xl lg:px-2 xl:text-2xl xl:px-5 text-gray-800   font-sans hover:text-green-800 hover:border-b-2 hover:border-green-900" >
            <a href="#">Catalog</a>
          </li>
          <li className="py-1 md:px-2  md:text-2sm text-xl lg:text-2xl lg:px-2 xl:text-2xl xl:px-5 text-gray-800 font-sans hover:text-green-800 hover:border-b-2 hover:border-green-900">
            <a href="#">Delivery</a>
          </li>
          <li className="py-1 md:px-2 text-xl md:text-2sm lg:text-2xl lg:px-2 xl:text-2xl xl:px-5 text-gray-800 font-sans hover:text-green-800 hover:border-b-2 hover:border-green-900">
            <a href="#">Payment</a>
          </li>
          <li className="py-1 md:px-2 text-xl md:text-2sm lg:text-2xl lg:px-2 xl:text-2xl xl:px-5 text-gray-800 font-sans hover:text-green-800 hover:border-b-2 hover:border-green-900">
            <a href="#">Contact</a>
          </li>
          <li className="py-1 md:px-2 text-xl md:text-2sm lg:text-2xl lg:px-2 xl:text-2xl xl:px-5 text-gray-800 font-sans hover:text-green-800 hover:border-b-2 hover:border-green-900">
            <a href="#">About</a>
          </li>
        </ul>
      </div>
      <div>
        <div className="flex-col flex md:hidden  lg:flex-row text-center lg:flex lg:h-10 justify-center items-center gap-3  pt-7 lg:pt-0">
          <button className=" h-14 w-72  lg:h-11 md:w-32 flex items-center justify-center text-xl border-green-900 border-2 hover:bg-green-900 text-green-900 hover:text-white rounded">
          Sign In
          </button>
          <button className=" h-14 w-72 lg:h-11 md:w-32  flex items-center justify-center text-xl bg-green-900 text-white rounded border-2 hover:text-green-900 hover:border-green-900 hover:bg-transparent">
          Join Now
          </button>
        </div>
        <div className=" hidden md:flex lg:hidden  text-black items-center mx-1 my-0 text-4xl gap-5">
        <IoIosArrowDown onClick={() => setisicon(!isicon)}/>
        <div className={ ` bg-green-800 text-white text-2xl absolute px-2   ${isicon ? 'top-16 right-2  ' : 'hidden'}`}>
          <h2 className=" hover:text-green-400 p-2">Sign In</h2>
          <h2 className=" hover:text-green-400 p-2">Join Now</h2>
        </div>
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
