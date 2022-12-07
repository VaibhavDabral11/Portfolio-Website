import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import NavbarProjects from "../components/Navbar/NavbarProjects";
import Rightbar from "../components/RightBar/Rightbar";
import Footer from "../components/Footer/Footer";
import ProjectImg from "../images/all-devices-white.png";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import CryptoDoraSvg from "../images/CryptoDora.svg";
export interface IAppProps {}
import TrendingFlatIcon from "@mui/icons-material/TrendingFlat";

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

        <div className="analysis-outer-section w-full text-center mb-20">
          <div className="analysis-heading-section">
            <h4 className="font-serif text-sm case-studies-text text-[#b19386]">
              ANALYSIS & PREPARATION
            </h4>
            <h1 className="text-3xl text-[#4a4a4a] case-studies-text font-bold">
              Branding
            </h1>
          </div>

          <div className="analysis-section flex justify-center w-full items-center z-50">
            <div className="w-1/3 mr-40">
              <h1 className="font-bold text-[#0f141e] name-text text-left text-4xl">
                Build with customers in mind, and Love.
              </h1>
              <div className="bg-[#0f141e] w-1/4 h-1 my-8"></div>
              <p className="font-serif tracking-wider text-left leading-relaxed text-lg case-studies-text text-[#0f141e]">
                First Lato is{" "}
                <span className="text-[#00c8e7] font-semibold tracking-normal case-studies-text">
                  modular
                </span>
                : every part of the application is a separate module with its
                purpose.
                <br /> <br /> As the{" "}
                <span className="text-[#00c8e7] font-semibold tracking-normal case-studies-text">
                  Lead Frontend Developer
                </span>
                , my main task is to build the{" "}
                <span className="text-[#00c8e7] font-semibold tracking-normal underline case-studies-text">
                  lato_view module
                </span>
                , which is responsible of the entire Look and Feel of the
                application. <br /> <br /> I built the{" "}
                <span className="text-[#00c8e7] font-semibold tracking-normal case-studies-text">
                  entire CryptoDora app
                </span>{" "}
                including a responsive custom theme, a custom flex grid system,
                custom form validation, dynamic themes and more.
              </p>
            </div>

            <div className="">
              <Image
                src={ProjectImg}
                className="w-96 scale-150"
                alt="project-img"
              ></Image>
            </div>
          </div>
          <div className="w-full colors-section flex flex-wrap justify-evenly">
            <div className="w-40 h-40 rounded-full z-20 bg-[#1b2028] hover:shadow-2xl hover:drop-shadow-2xl transition-all duration-500"></div>
            <div className="w-40 h-40 rounded-full z-20 bg-[#00cccb] hover:shadow-2xl hover:drop-shadow-2xl transition-all duration-500"></div>
            <div className="w-40 h-40 rounded-full z-20 bg-[#ffd910] hover:shadow-2xl hover:drop-shadow-2xl transition-all duration-500"></div>
            <div className="w-40 h-40 rounded-full z-20 bg-[#f0f0f0] hover:shadow-2xl hover:drop-shadow-2xl transition-all duration-500"></div>
            <div className="w-40 h-40 rounded-full z-20 bg-[#31353F] hover:shadow-2xl hover:drop-shadow-2xl transition-all duration-500"></div>
          </div>

          <div className="w-full colors-section flex flex-wrap justify-evenly">
            <div className="w-40 h-4 rounded-full z-20 transition-all case-studies-text duration-500 font-serif mt-3 text-gray-500 hover:text-red-500">
              $ebony-black
            </div>
            <div className="w-40 h-4 rounded-full z-20 transition-all case-studies-text duration-500 font-serif mt-3 text-gray-500 hover:text-red-500">
              $egg-blue
            </div>
            <div className="w-40 h-4 rounded-full z-20 transition-all case-studies-text duration-500 font-serif mt-3 text-gray-500 hover:text-red-500">
              $shiny-yellow
            </div>
            <div className="w-40 h-4 rounded-full z-20 transition-all case-studies-text duration-500 font-serif mt-3 text-gray-500 hover:text-red-500">
              $catskill-white
            </div>
            <div className="w-40 h-4 rounded-full z-20 transition-all case-studies-text duration-500 font-serif mt-3 text-gray-500 hover:text-red-500">
              $raw-gray
            </div>
          </div>

          <div
            style={{ width: "1px" }}
            className="hr-line-cryptodora h-1/3 m-0 absolute left-72 opacity-30 bg-[#b19386]"
          ></div>
          <div
            style={{ width: "1px" }}
            className="hr-line-cryptodora w-1 absolute left-1/2 opacity-30 bg-[#b19386]"
          ></div>
          <div
            style={{ width: "1px" }}
            className="w-1 hr-line-cryptodora absolute right-72 opacity-30 bg-[#b19386]"
          ></div>
        </div>

        <div className="next-work-section w-full flex items-center justify-center h-40 transition-all duration-700">
          <div>
            <h4 className="text-[#878a8f] text-center name-text mb-4 tracking-widest leading-4">
              PORTFOLIO APP
            </h4>

            <div className="flex justify-between items-center w-full">
              <Link href="/">
                <h1 className="font-extrabold text-6xl work-together-text">
                  {" "}
                  SEE NEXT WORK
                  <TrendingFlatIcon
                    className="name-text work-section-arrow "
                    style={{ fontSize: "4rem" }}
                  />
                </h1>
              </Link>
            </div>
          </div>
        </div>

        <div className="footer-cryptodora">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default CryptoDora;

