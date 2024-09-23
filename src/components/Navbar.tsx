import logo from "../assets/logo.svg";

const navList = ["features", "pricing", "resources"];

const Navbar = () => {
  return (
    <nav className="flex flex-row justify-between mt-5">
      <div className="flex flex-row gap-10 md:gap-5 items-center">
        <img src={logo} alt="image of our logo" />

        <ul className="flex flex-row justify-between gap-3 text-[#9E9AA8] text-lg ">
          {navList.map((item, index) => (
            <li
              key={index}
              className="cursor-pointer font-bold hover:text-gray-500 transition-all capitalize"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>

      <div className="flex flex-row gap-7">
        <button className="btn btn-outline-primary md:hidden semimd:block text-[#9E9AA8] hover:text-gray-500 font-semibold text-lg transition-all">
          Login
        </button>

        <button className="btn btn-primary rounded-full bg-[#2BD0D0] w-[100px] h-[40px] text-white font-semibold text-lg hover:bg-[#9AE3E3] transition-all">
          Sign Up
        </button>
      </div>
    </nav>
  );
};
export default Navbar;
