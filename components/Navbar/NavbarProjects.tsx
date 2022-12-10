import { FC, useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import Link from "next/link";

const NavbarProjects: FC = () => {

    const [active, setActive] = useState(false);

    const handleMenu = () => {
        setActive(!active)
    }

  return (
        <>
      <div className="justify-around mt-6 w-full flex sm:pl-1 sm:pr-5">
          <div className="hover:text-gray-400 flex items-center bg-clip-text text-center sm:-mt-2">
              <Link href="/">
            <div className="cursor-pointer navbar-home sm:px-4">
                <h2 className="text-black name-text navbar-name font-bold text-2xl sm:text-md sm:text-left">
              Yasindu&nbsp;Nethmina
                </h2>
                <h4 className=" text-gray-800 name-text navbar-name tracking-wider font-semibold text-sm sm:text-xs sm:tracking-normal sm:w-60 sm:text-left sm:ml-1">
              Frontend Web & Mobile Developer
                </h4>
            </div>
        </Link>
        </div>

        <div className="flex w-1/2 text-[#4c4f65] text-lg font-bold transition-all duration-300 ease-in-out delay-150 justify-around">
          <Link
            href="/"
            className="link link-underline h-8 link-underline-black name-text hover:text-[#1c1d25] cursor-pointer sm:hidden"
          >
            Home
          </Link>
            <Link
                href="#analysis-outer-section"
            className="link link-underline h-8 link-underline-black name-text hover:text-[#1c1d25] cursor-pointer sm:hidden"
          >
            Branding
          </Link>
            <Link
            href="#footer"
            className="link link-underline h-8 link-underline-black name-text hover:text-[#1c1d25] cursor-pointer sm:hidden"
          >
            Contact
            </Link>
        </div>
          <button onClick={handleMenu} className="hidden sm:block mb-1">
            <MenuIcon style={{fontSize: "2rem", color: "#0f141e"}} />
        </button>

      <div className={active ? "menu-bar-active absolute left-4 hidden text-left top-6 mt-12 mb-5 z-40" : "menu-bar hidden absolute left-4 text-left mt-12 z-40"}>
            <div className="z-40">
                <Link href="/" className="text-[#0f141e] font-semibold">Home</Link>
            </div>
              <div className="my-1">
                  <Link href="#analysis-outer-section" className="text-[#0f141e] font-semibold">Branding</Link>
              </div>
                <div>
                    <Link href="#footer" className="text-[#0f141e] font-semibold">Contact</Link>
                </div>
          </div>
      </div>
        </>
  );
};

export default NavbarProjects;
