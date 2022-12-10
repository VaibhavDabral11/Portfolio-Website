import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import NavbarProjects from "../components/Navbar/NavbarProjects";
import Rightbar from "../components/RightBar/Rightbar";
import Footer from "../components/Footer/Footer";
import ProjectImg from "../images/all-devices-white.png";
import ProjectImg2 from "../images/ProjectImg4.png";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import CryptoDoraSvg from "../images/CryptoDora.svg";
export interface IAppProps {}
import TrendingFlatIcon from "@mui/icons-material/TrendingFlat";
import EmailIcon from "@mui/icons-material/Email";

export const CryptoDora = (props: IAppProps) => {
  return (
    <>
      {/* Email Me Btn */}
      <a href="mailto:yasindunethmina1938096@gmail.com">
        <div className="email-me-btn fixed cursor-pointer flex items-center bg-[#0f141e4d] hover:w-24 hover:bg-[#0f141e] text-white transition-all duration-500 z-50 bottom-8 left-10 rounded-full w-10 h-10">
          <EmailIcon className="text-[#fff] relative left-2" />
          <span className="email-me-text text-xs px-2 text-center font-semibold">
            Contact Me
          </span>
        </div>
      </a>
      <div
        id="heading-cryptodora-section"
        className="bg-white relative h-screen w-full"
      >
        <div className="flex">
          <NavbarProjects />
          <Rightbar />
          <div className="cryptodora-img flex justify-around items-center sm:flex-wrap sm:top-48 sm:pt-10 sm:mt-2">
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
                className="hover:scale-105 transition-all duration-1000 cursor-pointer sm:mt-8 sm:w-full"
              />
            </a>
          </div>
        </div>

        <div className="flex justify-around relative top-2/3 w-full text-[#878a8f] font-bold tracking-wider sm:top-80 sm:block sm: sm:text-center">
          <h4 className="role-title-text sm:w-full">
            <span className="text-[#00c8e7] role-text font-bold tracking-widest">
              ROLE &nbsp;
            </span>
            FRONTEND DEVELOPER
          </h4>

            <h4 className="role-title-text sm:my-4 sm:w-full">
            <span className="text-[#00c8e7] role-text font-bold tracking-widest">
              CONTEXT &nbsp;
            </span>
            PERSONAL PROJECT
          </h4>

            <h4 className="role-title-text sm:w-full">
            <span className="text-[#00c8e7] role-text font-bold tracking-widest">
              PERIOD &nbsp;
            </span>
            3 MONTHS
          </h4>
        </div>

        <div className="w-full introduction-section bg-white">
          <h1 className="text-6xl font-bold pt-12 text-center z-10 name-text text-[#0f141e] sm:bottom-60 sm:text-4xl sm:relative sm:mt-2">
            Introduction
          </h1>
          <div className="flex justify-center">
            <p className="font-serif w-1/3 pt-6 z-10 relative text-justify name-text tracking-widest text-[#0f141e] sm:w-full sm:px-10 sm:bottom-56">
              CryptoDora is an all in one stop for crypto users, which provides
              real-time cryptocurrency charts, news and market information. You
              can track your winning crypto portfolio anywhere you go even on
              mobile. <br />
              <br />I made this using React ⚛️ + Tailwind CSS. Also user React
              Query for fetching, React Router for routing, Chart Js, Axios,
              Jest ... MUI and also used firebase for hosting. If you&apos;re
              interested in my work,{" "}
              <a href="#footer">
                <span className="font-semibold font-serif tracking-widest italic hover:underline underline-offset-4 cursor-pointer">
                  Let&apos;s have a chat
                </span>{" "}
              </a>
              😊
            </p>
          </div>

          <div className="flex justify-center pt-6 pb-10 z-10 sm:block">
            <div className="sm:hidden visit-website-btn bg-transparent z-10 flex justify-center hover:bg-[#0f141e] hover:text-white transition-all duration-300 w-40 font-semibold text-[#0f141e] border-2 border-[#0f141e]">
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

        <div
          id="analysis-outer-section"
          className="analysis-outer-section w-full text-center mb-20 sm:relative sm:-top-40 sm:mt-4"
        >
          <div className="analysis-heading-section sm:my-8">
            <h4 className="font-serif text-sm case-studies-text text-[#b19386]">
              ANALYSIS & PREPARATION
            </h4>
            <h1 className="text-3xl text-[#4a4a4a] case-studies-text font-bold sm:mt-2">
              Branding
            </h1>
          </div>

          <div className="analysis-section flex justify-center w-full items-center z-50 sm:block">
            <div className="w-1/3 mr-40 sm:w-full sm:m-0 sm:-top-24 sm:relative">
              <h1 className="font-bold text-[#0f141e] name-text text-left text-4xl sm:w-full sm:text-center">
                Build with crypto peeps in mind, and Love.
              </h1>
              <div className="bg-[#0f141e] w-1/4 h-1 my-8 sm:flex sm:relative sm:w-3/4 sm:px-10 sm:left-12"></div>
              <p className="font-serif tracking-wider text-left leading-relaxed text-lg case-studies-text text-[#0f141e] sm:w-full sm:text-center">
                First CryptoDora is a{" "}
                <span className="text-[#00c8e7] font-semibold tracking-normal case-studies-text">
                  complex crypto website
                </span>
                : which provides realtime crypto charts, news, alerts, chat
                section and complex diagrams for users.
                <br /> <br /> As the{" "}
                <span className="text-[#00c8e7] font-semibold tracking-normal underline case-studies-text">
                  Lead Frontend Developer
                </span>
                , my main task is to build the&nbsp;
                <span className="text-[#00c8e7] font-semibold tracking-normal case-studies-text">
                  entire application
                </span>
                , which means I&apos;m responsible of the entire Look, Feel &
                the Logic of the application. <br /> <br /> I built{" "}
                <span className="text-[#00c8e7] font-semibold tracking-normal case-studies-text">
                  CryptoDora
                </span>{" "}
                also considering it&apos;s responsive behavior, including a
                light theme mode and tons of filler features...
              </p>
            </div>

            <div className="">
              <Image
                src={ProjectImg2}
                className="w-96 scale-150 sm:w-2/3 sm:mx-auto"
                alt="project-img"
              ></Image>
            </div>
          </div>
          <div className="w-full colors-section flex flex-wrap justify-evenly sm:hidden">
            <div className="w-40 h-40 rounded-full z-20 bg-[#1b2028] hover:shadow-2xl hover:drop-shadow-2xl transition-all duration-500"></div>
            <div className="w-40 h-40 rounded-full z-20 bg-[#00cccb] hover:shadow-2xl hover:drop-shadow-2xl transition-all duration-500"></div>
            <div className="w-40 h-40 rounded-full z-20 bg-[#ffd910] hover:shadow-2xl hover:drop-shadow-2xl transition-all duration-500"></div>
            <div className="w-40 h-40 rounded-full z-20 bg-[#f0f0f0] hover:shadow-2xl hover:drop-shadow-2xl transition-all duration-500"></div>
            <div className="w-40 h-40 rounded-full z-20 bg-[#31353F] hover:shadow-2xl hover:drop-shadow-2xl transition-all duration-500"></div>
          </div>

          <div className="w-full colors-section flex flex-wrap justify-evenly sm:hidden">
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
            className="hr-line-cryptodora h-1/3 m-0 absolute left-72 opacity-30 bg-[#b19386] sm:hidden"
          ></div>
          <div
            style={{ width: "1px" }}
              className="hr-line-cryptodora w-1 absolute left-1/2 opacity-30 bg-[#b19386]  sm:hidden"
          ></div>
          <div
            style={{ width: "1px" }}
              className="w-1 hr-line-cryptodora absolute right-72 opacity-30 bg-[#b19386]  sm:hidden"
          ></div>
        </div>

        <div
          id="next-work-section"
          className="next-work-section w-full flex items-center justify-center h-40 transition-all duration-700"
        >
          <div>
            <h4 className="text-[#878a8f] text-center name-text mb-4 tracking-widest leading-4 sm:bottom-48 sm:relative">
              PORTFOLIO APP
            </h4>

            <div className="flex justify-between items-center w-full">
              <Link
                href="/heading-portfolio-section"
                as={`/Portfolio/#heading-portfolio-section`}
              >
                <h1 id="see-next-work" className="font-extrabold text-6xl work-together-text sm:relative sm:-top-48 sm:text-4xl">
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

        <div className="footer-cryptodora sm:-top-40">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default CryptoDora;
