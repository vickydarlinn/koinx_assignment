import Logo from "../../assets/images/logo.svg";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";

import { useState } from "react";


const Header = () => {
  const [isShowingMenu, setIsShowingMenu] = useState(false);
  return (
    <header className=" fixed left-0 top-0 flex w-screen items-center justify-between bg-white md:px-12 px-4 shadow-sm z-50">
      <div className="">
        <img src={Logo} />
      </div>
      <div className=" items-center gap-4 font-semibold hidden md:flex">
        <nav className="flex gap-4">
          <Link to="/coming-soon">Crypto Taxes</Link>
          <Link to="/coming-soon">Free Tools</Link>
          <Link to="/coming-soon">Resource Center</Link>
        </nav>
        <button className="cursor-pointer rounded-lg bg-gradient-to-r from-blue-500 via-blue-600  to-blue-700 px-[15px] py-[10px] text-white">
          Get Started
        </button>
      </div>
      
    {isShowingMenu ?
    <div className=" md:hidden cursor-pointer w-6 h-auto text-[#0B182F]" onClick={()=>setIsShowingMenu(false)}>
      <ImCross className="w-full h-auto" />
      </div>:
      <div className="md:hidden cursor-pointer w-8 h-auto text-[#0B182F]"  onClick={()=>setIsShowingMenu(true)} >
      <GiHamburgerMenu className="w-full h-auto"/>
      </div>}
   {isShowingMenu&&  <div className="fixed md:hidden left-0 top-16 h-screen w-screen bg-gray-600 z-50 text-white">
    <nav className="flex flex-col items-center gap-4 py-4">
          <Link onClick={()=>setIsShowingMenu(false)} to="/coming-soon">Crypto Taxes</Link>
          <div className="border-t w-full border-white"></div>
          <Link  onClick={()=>setIsShowingMenu(false)} to="/coming-soon">Free Tools</Link>
          <div className="border-t w-full border-white"></div>

          <Link  onClick={()=>setIsShowingMenu(false)} to="/coming-soon">Resource Center</Link>
          <div className="border-t w-full border-white"></div>
          <button  onClick={()=>setIsShowingMenu(false)} className="cursor-pointer rounded-lg bg-gradient-to-r from-blue-500 via-blue-600  to-blue-700 px-[15px] py-[10px] text-white w-[calc(100vw-20px)] ">
          Get Started
        </button>
        </nav>
     
    </div>}
    </header>
  );
};

export default Header;
