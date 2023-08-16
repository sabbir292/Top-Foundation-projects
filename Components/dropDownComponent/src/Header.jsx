import { Link } from "react-router-dom";
import Dropdown from "./Dropdown";

const Header = () => {
  return (
    <header className="bg-black text-white md:flex md:justify-between p-5 lg:px-[20%] md:px-[10%]" >
      <div className="header-r1">
        <p className="logo">Logo</p>
        <button className="sign-up md:hidden">SignUp</button>
      </div>
      <div className="nav menu-style-up1 scrollbar-hidden relative">
        <li>
          <Link>Home</Link>
        </li>
        <li>
          <Link>Home</Link>
        </li>
        <Dropdown />
        <li>
          <Link>Home</Link>
        </li>
        <Dropdown />
      </div>
      <button className="hidden md:block sign-up">Signup</button>
    </header>
  );
};

export default Header;
