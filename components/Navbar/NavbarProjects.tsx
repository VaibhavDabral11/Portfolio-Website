import { FC } from "react";

const NavbarProjects: FC = () => {
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
          <a
            href="#case-studies"
            className="link link-underline h-8 link-underline-black name-text hover:text-[#1c1d25] cursor-pointer"
          >
            Home
          </a>
          <a
            href="#about-me"
            className="link link-underline h-8 link-underline-black name-text hover:text-[#1c1d25] cursor-pointer"
          >
            All Works
          </a>
          <a
            href="#contact"
            className="link link-underline h-8 link-underline-black name-text hover:text-[#1c1d25] cursor-pointer"
          >
            Contact
          </a>
        </div>
      </div>
    </>
  );
};

export default NavbarProjects;
