import { FC } from "react";
import MenuIcon from "@mui/icons-material/Menu";

const Navbar: FC = () => {
  return (
    <>
      <div className="justify-around mt-6 w-full flex sm:pl-1 sm:pr-5">
        <div className="hover:text-gray-400 items-center flex bg-clip-text text-center">
          <div className="cursor-pointer navbar-home">
            <h2 className="text-black name-text navbar-name font-bold text-2xl sm:text-sm">
              Yasindu&nbsp;Nethmina
            </h2>
            <h4 className=" text-gray-800 name-text navbar-name tracking-wider font-semibold text-sm sm:text-xs sm:tracking-normal">
              Frontend Web & Mobile Developer
            </h4>
          </div>
        </div>

        <div className="flex w-1/2 text-[#4c4f65] text-lg font-bold transition-all duration-300 ease-in-out delay-150 justify-around">
          <a
            href="#case-studies"
            className="link link-underline h-8 link-underline-black name-text hover:text-[#1c1d25] cursor-pointer sm:hidden"
          >
            Case Studies
          </a>
          <a
            href="#about-me"
            className="link link-underline h-8 link-underline-black name-text hover:text-[#1c1d25] cursor-pointer sm:hidden"
          >
            About Me
          </a>
          <a
            href="#contact"
            className="link link-underline h-8 link-underline-black name-text hover:text-[#1c1d25] cursor-pointer sm:hidden"
          >
            Contact
          </a>
        </div>
        <button className="hidden sm:visible">
          <MenuIcon />
        </button>
      </div>
    </>
  );
};

export default Navbar;
