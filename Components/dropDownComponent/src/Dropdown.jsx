import { Link } from "react-router-dom";

const Dropdown = () => {
  return (
    <div className="group relative inline-block">
      <button className="menu-style-up1">
        Hover Me
      </button>
      <div className="hidden absolute group-hover:flex flex-col min-w-[160px] bg-black items-start z-10">
        <li className="hover:bg-slate-200 p-2">
          <Link>Item1</Link>
        </li>
        <li className="hover:bg-slate-200 p-2">
          <Link>Item2</Link>
        </li>
        <li className="hover:bg-slate-200 p-2">
          <Link>Item3</Link>
        </li>
      </div>
    </div>
  );
};

export default Dropdown;
