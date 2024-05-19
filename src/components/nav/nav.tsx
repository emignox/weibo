import { ImMenu } from "react-icons/im";
import { useState } from "react";
import { IoCloseSharp } from "react-icons/io5";
import { PiShoppingCartFill } from "react-icons/pi";
import { useNavigate } from "react-router-dom";

function Nav({ className }: { className: string }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const styleList = "  list-item text-2xl w-full flex items-center  group ";
  const navigate = useNavigate();

  return (
    <>
      <div
        className={`fixed z-50 flex items-center justify-between w-full px-3 text-3xl font-black ${className} `}
      >
        <p className="cursor-pointer" onClick={() => navigate("/")}>
          weibo...
        </p>
        <ImMenu
          className="text-3xl font-black"
          onMouseEnter={() => setIsMenuOpen(true)}
        />
        <div
          className={`fixed top-0 right-0 z-10 w-64 h-screen p-5 transition-all duration-400 transform ${isMenuOpen ? "translate-x-0 opacity-100 pointer-events-auto" : "translate-x-full opacity-0 pointer-events-none"} bg-white shadow-2xl`}
          onMouseLeave={() => setIsMenuOpen(false)}
        >
          <div className="flex items-center justify-end w-full">
            <IoCloseSharp
              className="text-3xl font-black"
              onClick={() => setIsMenuOpen(false)}
            />
          </div>
          <ul className="flex flex-col items-start justify-center w-full h-2/4 gap-y-5 ">
            <li className={styleList}>Home</li>
            <li className={styleList}>About</li>
            <li className={styleList}>Contacts</li>
            <li className={`group ${styleList}`}>
              Cart
              <PiShoppingCartFill className="inline mx-1 text-2xl duration-300 transform group-hover:translate-x-10" />{" "}
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
export default Nav;
