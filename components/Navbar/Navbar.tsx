import { FC } from "react";
import DarkModeIcon from "@mui/icons-material/DarkMode";

const Navbar: FC = () => {
  return (
    <>
      <div className="justify-around mt-6 w-full flex">
        <div className="hover:text-gray-400 items-center flex bg-clip-text text-center">
          <div className="cursor-pointer navbar-home">
            <h2 className="text-black name-text navbar-name font-bold text-2xl">
              Yasindu Nethmina
            </h2>
            <h4 className=" text-gray-800 name-text navbar-name tracking-wider font-semibold text-sm">
              Frontend Web & Mobile Developer
            </h4>
          </div>
        </div>

        <div className="flex w-1/2 text-[#4c4f65] text-lg font-bold transition-all duration-300 ease-in-out delay-150 justify-around">
          <h4 className="link link-underline h-8 link-underline-black name-text hover:text-[#1c1d25] cursor-pointer">
            Case Studies
          </h4>
          <h4 className="link link-underline h-8 link-underline-black name-text hover:text-[#1c1d25] cursor-pointer">
            Experiments
          </h4>
          <h4 className="link link-underline h-8 link-underline-black name-text hover:text-[#1c1d25] cursor-pointer">
            Contact
          </h4>
          <button className="link link-underline h-8 link-underline-black name-text relative bottom-1 hover:text-[#1c1d25] cursor-pointer">
            <DarkModeIcon />
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
