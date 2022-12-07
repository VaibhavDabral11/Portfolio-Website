import { FC } from "react";
import Link from "next/link";

const NavbarProjects: FC = () => {
  return (
    <>
      <div className="justify-around pt-6 w-full bg-transparent flex">
        <div className="items-center flex text-center">
          <Link href="/">
            <div className="cursor-pointer navbar-home">
              <h2 className="text-[#0f141e] name-text navbar-name font-bold text-2xl">
                Yasindu Nethmina
              </h2>
              <h4 className="text-[#0f141e]  name-text navbar-name tracking-wider font-semibold text-sm">
                Frontend Web & Mobile Developer
              </h4>
            </div>
          </Link>
        </div>

        <div className="flex w-1/2 text-[#4c4f65] text-lg font-bold transition-all duration-300 ease-in-out delay-150 justify-around">
          <Link href="/">
            <h4 className="link link-underline h-8 link-underline-black name-text hover:text-[#0f141e] cursor-pointer">
              Home
            </h4>
          </Link>
          <Link
            href="#analysis-outer-section"
            className="link link-underline h-8 link-underline-black name-text hover:text-[#0f141e] cursor-pointer"
          >
            Branding
          </Link>
          <Link
            href="#footer"
            className="link link-underline h-8 link-underline-black name-text hover:text-[#0f141e] cursor-pointer"
          >
            Contact
          </Link>
        </div>
      </div>
    </>
  );
};

export default NavbarProjects;
