import { FC, useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import Link from "next/link";

const Navbar: FC = () => {

    const [active, setActive] = useState(false);

    const handleMenu = () => {
    setActive(!active)
    }

  return (
    <>
      <div className="justify-around mt-6 w-full flex sm:pl-1 sm:pr-5">
          <div className="hover:text-gray-400 flex items-center bg-clip-text text-center sm:-mt-2">
            <div className="cursor-pointer navbar-home sm:px-4">
                <h2 className="text-black name-text navbar-name font-bold text-2xl sm:text-md sm:text-left">
              Yasindu&nbsp;Nethmina
                </h2>
                <h4 className=" text-gray-800 name-text navbar-name tracking-wider font-semibold text-sm sm:text-xs sm:tracking-normal sm:w-60 sm:text-left sm:ml-1">
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
          <button onClick={handleMenu} className="hidden sm:block mb-1">
            <MenuIcon style={{fontSize: "2rem", color: "#0f141e"}} />
        </button>

          <div className={active ? "menu-bar-active absolute right-2 hidden text-center mt-12 z-40" : "menu-bar hidden absolute right-2 text-center mt-12"}>
            <div className="z-40">
                <Link href="#case-studies-mobile" className="text-[#0f141e] font-semibold">Case Studies</Link>
            </div>
              <div className="my-3">
                  <a href="#about-me" className="text-[#0f141e] font-semibold">About Me</a>
              </div>
                <div>
                    <a href="#contact" className="text-[#0f141e] font-semibold">Contact</a>
                </div>
          </div>
      </div>
    </>
  );
};

export default Navbar;
