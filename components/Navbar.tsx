import { FC } from "react";

const Navbar: FC = () => {
  return (
    <>
      <div className="justify-around mt-6 w-full flex">
        <div className="hover:text-gray-400 items-center flex bg-clip-text text-center">
          <div>
            <h2 className="text-black font-bold text-2xl">Yasindu Nethmina</h2>
            <h4 className=" text-gray-800 tracking-wider font-semibold text-sm">
              Frontend Web & Mobile Developer
            </h4>
          </div>
        </div>

        <div className="flex w-1/2 text-[#4c4f65] text-lg font-bold transition-all duration-300 ease-in-out delay-150 justify-around">
          <h4 className="link link-underline h-8 link-underline-black hover:text-[#1c1d25] cursor-pointer">
            Case Studies
          </h4>
          <h4 className="link link-underline h-8 link-underline-black hover:text-[#1c1d25] cursor-pointer">
            Experiments
          </h4>
          <h4 className="link link-underline h-8 link-underline-black hover:text-[#1c1d25] cursor-pointer">
            Contacts
          </h4>
          <h4 className="link link-underline h-8 link-underline-black hover:text-[#1c1d25] cursor-pointer">
            Dark
          </h4>
        </div>
      </div>
    </>
  );
};

export default Navbar;
