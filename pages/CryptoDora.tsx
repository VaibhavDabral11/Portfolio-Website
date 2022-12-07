import * as React from "react";
import Image from "next/image";
import NavbarProjects from "../components/Navbar/NavbarProjects";
import Rightbar from "../components/RightBar/Rightbar";
import Footer from "../components/Footer/Footer";
import ProjectImg from "../images/all-devices-white.png";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import CryptoDoraSvg from "../images/CryptoDora.svg";
export interface IAppProps {}

export const CryptoDora = (props: IAppProps) => {
  return (
    <>
      <div className="bg-white relative h-screen w-full">
        <div className="flex">
          <NavbarProjects />
          <Rightbar />
          <div className="cryptodora-img flex justify-around items-center">
            <div>
              <h1 className="text-[#0f141e] name-text inline-block font-bold text-6xl">
                CryptoDora
              </h1>
              <h4 className="mt-4 text-center italic name-text font-serif text-[#878a8f]">
                The Next generation Crypto Tracking System.
              </h4>
            </div>
            <a
              href="https://cryptodora-app.web.app/"
              target="_blank"
              rel="noreferrer"
            >
              <Image
                src={ProjectImg}
                alt="cryptodora img"
                className="hover:scale-105 transition-all duration-1000 cursor-pointer"
              />
            </a>
          </div>
        </div>

        <div className="flex justify-around relative top-2/3 w-full text-[#878a8f] font-bold tracking-wider">
          <h4 className="role-title-text">
            <span className="text-[#00c8e7] role-text font-bold tracking-widest">
              ROLE &nbsp;
            </span>
            FRONTEND DEVELOPER
          </h4>

          <h4 className="role-title-text">
            <span className="text-[#00c8e7] role-text font-bold tracking-widest">
              CONTEXT &nbsp;
            </span>
            PERSONAL PROJECT
          </h4>

          <h4 className="role-title-text">
            <span className="text-[#00c8e7] role-text font-bold tracking-widest">
              PERIOD &nbsp;
            </span>
            3 MONTHS
          </h4>
        </div>

        <div className="w-full introduction-section bg-white">
          <h1 className="text-6xl font-bold pt-12 text-center z-10 name-text text-[#0f141e]">
            Introduction
          </h1>
          <div className="flex justify-center">
            <p className="font-serif w-1/3 pt-6 z-10 relative text-justify name-text tracking-widest text-[#0f141e]">
              Lato aims to be a modern, solid and easy-to-use web-based software
              to manage content. With its intuitive dashboard and hand-crafted
              UI, Lato helps every customer to easily manage every kind of
              content he/she needs.
            </p>
          </div>

          <div className="flex justify-center pt-6 pb-10 z-10">
            <div className="visit-website-btn bg-transparent z-10 flex justify-center hover:bg-[#0f141e] hover:text-white transition-all duration-300 w-40 font-semibold text-[#0f141e] border-2 border-[#0f141e]">
              <a
                className="flex items-center relative z-10 tracking-wider left-5 name-text font-bold justify-center"
                href="https://cryptodora-app.web.app/"
                target="_blank"
                rel="noreferrer"
              >
                Visit Website
              </a>
              <span className="visit-website-arrow z-10">
                <ArrowRightAltIcon style={{ fontSize: "44px" }} />
              </span>
            </div>
          </div>

          <Image
            src={CryptoDoraSvg}
            className="relative bottom-28 right-5 z-0 cryptodora-svg-img"
            alt="img-text"
          ></Image>
        </div>

        <div className="h-screen case-studies-section w-full text-center">
          <div className="analysis-heading-section">
            <h4 className="font-serif text-sm  text-[#b19386]">
              ANALYSIS & PREPARATION
            </h4>
            <h1 className="text-3xl text-[#4a4a4a] font-bold">Branding</h1>
          </div>

          <div className="flex justify-around">
            <div>
              <h1>Build with customers in mind, and Love.</h1>
            </div>
          </div>
          <div
            style={{ width: "1px" }}
            className="hr-line-cryptodora hr-line h-screen m-0 absolute left-72 opacity-30 bg-[#b19386]"
          ></div>
          <div
            style={{ width: "1px" }}
            className="hr-line-cryptodora hr-line w-1 absolute left-1/2 opacity-30 bg-[#b19386]"
          ></div>
          <div
            style={{ width: "1px" }}
            className="w-1 hr-line-cryptodora hr-line absolute right-72 opacity-30 bg-[#b19386]"
          ></div>
        </div>

        <div className="footer-cryptodora">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default CryptoDora;

