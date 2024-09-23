import { useState } from "react";
import logo from "../assets/logo.svg";
import { RxHamburgerMenu } from "react-icons/rx";

const navList = ["features", "pricing", "resources"];

const Navbar = () => {
  const [isOpen, toggle] = useState(false);

  return (
    <>
      <nav className="flex flex-row justify-between mt-5">
        <div className="flex flex-row gap-10 md:gap-5 items-center">
          <img src={logo} alt="image of our logo" />

          <ul className="hidden md:flex flex-row justify-between gap-3 text-[#9E9AA8] text-lg ">
            {navList.map((item, index) => (
              <li
                key={index}
                className="cursor-pointer font-semibold hover:text-gray-500 transition-all capitalize"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="hidden md:flex flex-row gap-7">
          <button className="btn btn-outline-primary md:hidden semimd:block text-[#9E9AA8] hover:text-gray-500 font-semibold text-lg transition-all">
            Login
          </button>

          <button className="btn btn-primary rounded-full bg-[#2BD0D0] w-[100px] h-[40px] text-white font-semibold text-lg hover:bg-[#9AE3E3] transition-all">
            Sign Up
          </button>
        </div>

        <RxHamburgerMenu
          className="md:hidden h-[24px] w-[24px] text-[#9E9AA8]"
          onClick={() => toggle(!isOpen)}
        />
      </nav>
      {isOpen && <NavbarMobile />}
    </>
  );
};

const NavbarMobile = () => {
  return (
    <div className="bg-[#3A3054] md:hidden px-2 py-7 rounded-md mt-4 flex flex-col gap-5 items-center">
      <ul className="flex flex-col justify-between items-center gap-3 text-white text-lg ">
        {navList.map((item, index) => (
          <li
            key={index}
            className="cursor-pointer font-semibold hover:text-gray-500 transition-all capitalize"
          >
            {item}
          </li>
        ))}
      </ul>

      <hr className="border-gray-500 opacity-50 w-[85%]" />

      <div className="flex flex-col gap-7 w-[85%]">
        <button className="btn btn-outline-primary w-full text-white hover:text-gray-500 font-semibold text-lg transition-all">
          Login
        </button>

        <button className="btn btn-primary rounded-full w-full bg-[#2BD0D0] h-[40px] text-white font-semibold text-lg hover:bg-[#9AE3E3] transition-all">
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default Navbar;
