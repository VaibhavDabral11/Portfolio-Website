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
        <div className="email-me-btn fixed bottom-8 left-10 z-50 flex h-10 w-10 cursor-pointer items-center rounded-full bg-[#0f141e4d] text-white transition-all duration-500 hover:w-24 hover:bg-[#0f141e]">
          <EmailIcon className="relative left-2 text-[#fff]" />
          <span className="email-me-text px-2 text-center text-xs font-semibold">
            Contact Me
          </span>
        </div>
      </a>
      <div
        id="heading-cryptodora-section"
        className="relative h-screen w-full bg-white"
      >
        <div className="flex">
          <NavbarProjects />
          <Rightbar />
          <div className="cryptodora-img flex items-center justify-around sm:top-48 sm:mt-2 sm:flex-wrap sm:pt-10">
            <div>
              <h1 className="name-text inline-block text-6xl font-bold text-[#0f141e]">
                CryptoDora
              </h1>
              <h4 className="name-text mt-4 text-center font-serif italic text-[#878a8f]">
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
                className="cursor-pointer transition-all duration-1000 hover:scale-105 sm:mt-8 sm:w-full"
              />
            </a>
          </div>
        </div>

        <div className="sm: relative top-2/3 flex w-full justify-around font-bold tracking-wider text-[#878a8f] sm:top-80 sm:block sm:text-center">
          <h4 className="role-title-text sm:w-full">
            <span className="role-text font-bold tracking-widest text-[#00c8e7]">
              ROLE &nbsp;
            </span>
            FRONTEND DEVELOPER
          </h4>

          <h4 className="role-title-text sm:my-4 sm:w-full">
            <span className="role-text font-bold tracking-widest text-[#00c8e7]">
              CONTEXT &nbsp;
            </span>
            PERSONAL PROJECT
          </h4>

          <h4 className="role-title-text sm:w-full">
            <span className="role-text font-bold tracking-widest text-[#00c8e7]">
              PERIOD &nbsp;
            </span>
            3 MONTHS
          </h4>
        </div>

        <div className="introduction-section w-full bg-white">
          <h1 className="name-text z-10 pt-12 text-center text-6xl font-bold text-[#0f141e] sm:relative sm:bottom-60 sm:mt-2 sm:text-4xl">
            Introduction
          </h1>
          <div className="flex justify-center">
            <p className="name-text relative z-10 w-1/3 pt-6 text-justify font-serif tracking-widest text-[#0f141e] sm:bottom-56 sm:w-full sm:px-10">
              CryptoDora is an all in one stop for crypto users, which provides
              real-time cryptocurrency charts, news and market information. You
              can track your winning crypto portfolio anywhere you go even on
              mobile. <br />
              <br />I made this using React Js ⚛️ + Tailwind CSS. In addition
              used React Query for fetching, React Router for routing, Chart Js,
              Axios, Jest, MUI, bunch of rest APIs and Firebase as my realtime
              database, authentication & for hosting. If you&apos;re interested
              in my work,{" "}
              <a href="#footer">
                <span className="cursor-pointer font-serif font-semibold italic tracking-widest underline-offset-4 hover:underline">
                  Let&apos;s have a chat
                </span>{" "}
              </a>
              😊
            </p>
          </div>

          <div className="z-10 flex justify-center pt-6 pb-10 sm:block">
            <div className="visit-website-btn z-10 flex w-40 justify-center border-2 border-[#0f141e] bg-transparent font-semibold text-[#0f141e] transition-all duration-300 hover:bg-[#0f141e] hover:text-white sm:relative sm:bottom-48 sm:mx-auto sm:mb-20 sm:w-80 sm:p-0">
              <a
                className="name-text relative left-5 z-10 flex items-center justify-center font-bold tracking-wider"
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
            className="cryptodora-svg-img relative bottom-28 right-5 z-0"
            alt="img-text"
          ></Image>
        </div>

        <div
          id="analysis-outer-section"
          className="analysis-outer-section mb-20 w-full text-center sm:relative sm:-top-40 sm:mt-4"
        >
          <div className="analysis-heading-section sm:my-8">
            <h4 className="case-studies-text font-serif text-sm text-[#b19386]">
              ANALYSIS & PREPARATION
            </h4>
            <h1 className="case-studies-text text-3xl font-bold text-[#4a4a4a] sm:mt-2">
              Branding
            </h1>
          </div>

          <div className="analysis-section z-50 flex w-full items-center justify-center sm:block">
            <div className="mr-40 w-1/3 sm:relative sm:-top-24 sm:m-0 sm:w-full">
              <h1 className="name-text text-left text-4xl font-bold text-[#0f141e] sm:w-full sm:text-center">
                Build with crypto peeps in mind, and Love.
              </h1>
              <div className="my-8 h-1 w-1/4 bg-[#0f141e] sm:relative sm:left-12 sm:flex sm:w-3/4 sm:px-10"></div>
              <p className="case-studies-text text-left font-serif text-lg leading-relaxed tracking-wider text-[#0f141e] sm:w-full sm:px-6 sm:text-center">
                First CryptoDora is a{" "}
                <span className="case-studies-text font-semibold tracking-normal text-[#00c8e7]">
                  complex crypto website
                </span>
                : which provides realtime crypto charts, news, alerts, live chat
                section and complex diagrams for users.
                <br /> <br /> As the{" "}
                <span className="case-studies-text font-semibold tracking-normal text-[#00c8e7] underline">
                  Lead Frontend Developer
                </span>
                , my main task was to build the&nbsp;
                <span className="case-studies-text font-semibold tracking-normal text-[#00c8e7]">
                  entire application
                </span>
                , which means I&apos;m responsible of the entire Look, Feel &
                the Logic behind the application. <br /> <br /> I built{" "}
                <span className="case-studies-text font-semibold tracking-normal text-[#00c8e7]">
                  CryptoDora
                </span>{" "}
                also considering it&apos;s responsive behavior for mobile
                devices, including a light theme mode and tons of filler
                features...
              </p>
            </div>

            <div className="">
              <Image
                src={ProjectImg2}
                className="w-96 scale-150 sm:mx-auto sm:-mt-10 sm:w-2/3 sm:scale-125"
                alt="project-img"
              ></Image>
            </div>
          </div>
          <div className="colors-section flex w-full flex-wrap justify-evenly sm:hidden">
            <div className="z-20 h-40 w-40 rounded-full bg-[#1b2028] transition-all duration-500 hover:shadow-2xl hover:drop-shadow-2xl"></div>
            <div className="z-20 h-40 w-40 rounded-full bg-[#00cccb] transition-all duration-500 hover:shadow-2xl hover:drop-shadow-2xl"></div>
            <div className="z-20 h-40 w-40 rounded-full bg-[#ffd910] transition-all duration-500 hover:shadow-2xl hover:drop-shadow-2xl"></div>
            <div className="z-20 h-40 w-40 rounded-full bg-[#f0f0f0] transition-all duration-500 hover:shadow-2xl hover:drop-shadow-2xl"></div>
            <div className="z-20 h-40 w-40 rounded-full bg-[#31353F] transition-all duration-500 hover:shadow-2xl hover:drop-shadow-2xl"></div>
          </div>

          <div className="colors-section flex w-full flex-wrap justify-evenly sm:hidden">
            <div className="case-studies-text z-20 mt-3 h-4 w-40 rounded-full font-serif text-gray-500 transition-all duration-500 hover:text-red-500">
              $ebony-black
            </div>
            <div className="case-studies-text z-20 mt-3 h-4 w-40 rounded-full font-serif text-gray-500 transition-all duration-500 hover:text-red-500">
              $egg-blue
            </div>
            <div className="case-studies-text z-20 mt-3 h-4 w-40 rounded-full font-serif text-gray-500 transition-all duration-500 hover:text-red-500">
              $shiny-yellow
            </div>
            <div className="case-studies-text z-20 mt-3 h-4 w-40 rounded-full font-serif text-gray-500 transition-all duration-500 hover:text-red-500">
              $catskill-white
            </div>
            <div className="case-studies-text z-20 mt-3 h-4 w-40 rounded-full font-serif text-gray-500 transition-all duration-500 hover:text-red-500">
              $raw-gray
            </div>
          </div>

          <div
            style={{ width: "1px" }}
            className="hr-line-cryptodora absolute left-72 m-0 h-1/3 bg-[#b19386] opacity-30 sm:hidden"
          ></div>
          <div
            style={{ width: "1px" }}
            className="hr-line-cryptodora absolute left-1/2 w-1 bg-[#b19386] opacity-30  sm:hidden"
          ></div>
          <div
            style={{ width: "1px" }}
            className="hr-line-cryptodora absolute right-72 w-1 bg-[#b19386] opacity-30  sm:hidden"
          ></div>
        </div>

        <div
          id="next-work-section"
          className="next-work-section flex h-40 w-full items-center justify-center transition-all duration-700"
        >
          <div>
            <h4 className="name-text mb-4 text-center leading-4 tracking-widest text-[#878a8f] sm:relative sm:bottom-48">
              PORTFOLIO APP
            </h4>

            <div className="flex w-full items-center justify-between">
              <Link
                href="/heading-portfolio-section"
                as={`/Portfolio/#heading-portfolio-section`}
              >
                <h1
                  id="see-next-work"
                  className="work-together-text text-6xl font-extrabold sm:relative sm:-top-48 sm:text-4xl"
                >
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
