import Logo from "../../assets/images/logo.svg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="flex justify-between items-center border border-gray-600 px-12 ">
      <div className="">
        <img src={Logo} />
      </div>
      <div className="flex items-center gap-4 font-semibold">
        <nav className="flex gap-4">
          <Link to="/coming-soon">Crypto Taxes</Link>
          <Link to="/coming-soon">Free Tools</Link>
          <Link to="/coming-soon">Resource Center</Link>
        </nav>
        <button className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700  py-[10px] px-[15px] rounded-lg cursor-pointer">
          Get Started
        </button>
      </div>
    </header>
  );
};

export default Header;
