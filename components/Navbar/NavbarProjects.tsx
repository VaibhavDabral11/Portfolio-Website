import { FC, useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import Link from "next/link";

const NavbarProjects: FC = () => {
  const [active, setActive] = useState(false);

  const handleMenu = () => {
    setActive(!active);
  };

  return (
    <>
      <div className="z-50 mt-6 flex w-full justify-around sm:pl-1 sm:pr-5">
        <div className="flex items-center bg-clip-text text-center hover:text-gray-400 sm:-mt-2">
          <Link href="/">
            <div className="navbar-home cursor-pointer sm:px-4">
              <h2 className="name-text navbar-name sm:text-md text-2xl font-bold text-black sm:text-left">
                Yasindu&nbsp;Nethmina
              </h2>
              <h4 className=" name-text navbar-name text-sm font-semibold tracking-wider text-gray-800 sm:ml-1 sm:w-60 sm:text-left sm:text-xs sm:tracking-normal">
                Frontend Web & Mobile Developer
              </h4>
            </div>
          </Link>
        </div>

        <div className="flex w-1/2 justify-around text-lg font-bold text-[#4c4f65] transition-all delay-150 duration-300 ease-in-out">
          <Link
            href="/"
            className="link link-underline link-underline-black name-text h-8 cursor-pointer hover:text-[#1c1d25] sm:hidden"
          >
            Home
          </Link>
          <Link
            href="#analysis-outer-section"
            className="link link-underline link-underline-black name-text h-8 cursor-pointer hover:text-[#1c1d25] sm:hidden"
          >
            Branding
          </Link>
          <Link
            href="#footer"
            className="link link-underline link-underline-black name-text h-8 cursor-pointer hover:text-[#1c1d25] sm:hidden"
          >
            Contact
          </Link>
        </div>
        <button onClick={handleMenu} className="mb-1 hidden sm:block">
          <MenuIcon style={{ fontSize: "2rem", color: "#0f141e" }} />
        </button>

        <div
          className={
            active
              ? "menu-bar-active absolute left-4 top-6 z-40 mt-12 mb-5 hidden text-left"
              : "menu-bar absolute left-4 z-40 mt-12 hidden text-left"
          }
        >
          <div className="z-40">
            <Link
              href="/"
              className="absolute -top-16 left-64 mr-2 mt-1 font-semibold text-[#0f141e]"
            >
              Home
            </Link>
          </div>
          <div className="absolute -top-10 left-64 mr-2 mt-1">
            <Link
              href="#analysis-outer-section"
              className="font-semibold text-[#0f141e]"
            >
              Branding
            </Link>
          </div>
          <div className="absolute -top-4 left-64 mr-2 mt-1">
            <Link
              href="#see-next-work"
              className="font-semibold text-[#0f141e]"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavbarProjects;
