import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import NavbarProjects from "../components/Navbar/NavbarProjects";
import Rightbar from "../components/RightBar/Rightbar";
import Footer from "../components/Footer/Footer";
import PortfolioImg1 from "../images/PortfolioImg.png";
import PortfolioImg from "../images/PortfolioImg1.png";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import PortfolioBgImg from "../images/Portfolio.svg";
import TrendingFlatIcon from "@mui/icons-material/TrendingFlat";
import EmailIcon from "@mui/icons-material/Email";

export interface IAppProps {}

export const Portfolio = (props: IAppProps) => {
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
        id="heading-portfolio-section"
        className="relative h-screen w-full bg-white"
      >
        <div className="flex">
          <NavbarProjects />
          <Rightbar />
          <div className="cryptodora-img flex items-center justify-around sm:top-60 sm:mt-2 sm:flex-wrap sm:pt-10">
            <div className="relative left-20 sm:left-5 sm:mt-16">
              <h1 className="name-text inline-block text-6xl font-bold text-[#0f141e] sm:relative sm:left-2">
                Portfolio
              </h1>
              <h4 className="name-text mt-4 text-center font-serif italic text-[#878a8f] sm:relative sm:right-6">
                Amazing portfolio website with stunning projects.
              </h4>
            </div>
            <Link href="/">
              <Image
                src={PortfolioImg}
                alt="cryptodora img"
                className="relative left-28 w-3/4 cursor-pointer transition-all duration-1000 hover:scale-105 sm:left-0 sm:mx-auto sm:mt-8 sm:mb-20 sm:w-full"
              />
            </Link>
          </div>
        </div>

        <div className="relative top-2/3 flex w-full justify-around font-bold tracking-wider text-[#878a8f] sm:top-80 sm:mt-20 sm:block sm:text-center">
          <h4 className="role-title-text">
            <span className="role-text font-bold tracking-widest text-[#00c8e7]">
              ROLE &nbsp;
            </span>
            FRONTEND DEVELOPER
          </h4>

          <h4 className="role-title-text sm:my-2">
            <span className="role-text font-bold tracking-widest text-[#00c8e7] sm:my-4">
              CONTEXT &nbsp;
            </span>
            PERSONAL PROJECT
          </h4>

          <h4 className="role-title-text">
            <span className="role-text font-bold tracking-widest text-[#00c8e7]">
              PERIOD &nbsp;
            </span>
            2022 DECEMBER
          </h4>
        </div>

        <div className="introduction-section w-full bg-white">
          <h1 className="name-text z-10 pt-12 text-center text-6xl font-bold text-[#0f141e] sm:relative sm:bottom-56 sm:-mt-2 sm:text-4xl">
            Introduction
          </h1>
          <div className="flex justify-center">
            <p className="name-text relative z-10 w-1/3 pt-6 text-justify font-serif tracking-widest text-[#0f141e] sm:bottom-56 sm:w-full sm:px-10">
              This is the website that you&apos;re viewing right now, I made
              this to showcase my web development skills and projects to my
              stunning clients. <br />
              <br />I made this using Next js (Simply, React Js SUPERCHARGED ⚡)
              with Typescript, also used Vercel for hosting, MUI, Framer Motion,
              TailwindCSS... If you&apos;re interested in my work,{" "}
              <a href="#footer">
                <span className="cursor-pointer font-serif font-semibold italic tracking-widest underline-offset-4 hover:underline">
                  Let&apos;s have a chat
                </span>{" "}
              </a>
              😊
            </p>
          </div>

          <div className="z-10 flex justify-center pt-6 pb-10 sm:block">
            <div className="visit-website-btn z-10 flex w-40 justify-center border-2 border-[#0f141e] bg-transparent font-semibold text-[#0f141e] transition-all duration-300 hover:bg-[#0f141e] hover:text-white sm:relative sm:bottom-48 sm:mx-auto sm:mb-10 sm:w-80 sm:p-0">
              <Link
                className="name-text relative left-5 z-10 flex items-center justify-center font-bold tracking-wider"
                href="/"
              >
                Visit Website
              </Link>
              <span className="visit-website-arrow z-10">
                <ArrowRightAltIcon style={{ fontSize: "44px" }} />
              </span>
            </div>
          </div>

          <Image
            src={PortfolioBgImg}
            className="cryptodora-svg-img relative bottom-28 right-5 z-0"
            alt="img-text"
          ></Image>
        </div>

        <div
          id="analysis-outer-section"
          className="analysis-outer-section mb-20 w-full text-center sm:relative sm:-top-40"
        >
          <div className="analysis-heading-section sm:mt-12 sm:mb-8">
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
                Build with amazing clients in mind, and Love.
              </h1>
              <div className="my-8 h-1 w-1/4 bg-[#0f141e] sm:relative sm:left-12 sm:flex sm:w-3/4 sm:px-10"></div>
              <p className="case-studies-text text-left font-serif text-lg leading-relaxed tracking-wider text-[#0f141e] sm:w-full sm:px-6 sm:text-center">
                This is a{" "}
                <span className="case-studies-text font-semibold tracking-normal text-[#00c8e7]">
                  modern website
                </span>
                : every part of the application is specially designed to
                showcase my skills.
                <br /> <br /> As the{" "}
                <span className="case-studies-text font-semibold tracking-normal text-[#00c8e7]">
                  Lead Developer{" "}
                </span>
                of this website, my main goal was to build this website & show
                my{" "}
                <span className="case-studies-text font-semibold tracking-normal text-[#00c8e7] underline">
                  previous projects
                </span>
                , that I&apos;m responsible for. So you&apos;re watching my
                amazing portfolio website right now 😎 Hah!
                <br /> <br /> I built this website also considering it&apos;s{" "}
                <span className="case-studies-text font-semibold tracking-normal text-[#00c8e7]">
                  responsive behavior with bunch of cool animations!
                </span>{" "}
                ,{" "}
                <a
                  href="https://www.linkedin.com/in/yasinduneth/"
                  target="_blank"
                  rel="noreferrer"
                  className="font-semibold underline-offset-4 hover:underline"
                >
                  {" "}
                  DM
                </a>{" "}
                me through{" "}
                <a
                  href="https://www.linkedin.com/in/yasinduneth/"
                  target="_blank"
                  rel="noreferrer"
                  className="font-semibold decoration-[#0a66c2] underline-offset-4 hover:underline"
                >
                  <span className="text-[#0a66c2] ">LinkedIn</span>
                </a>{" "}
                if you want to have a chat with me!
              </p>
            </div>

            <div className="">
              <Image
                src={PortfolioImg1}
                className="w-96 scale-150 sm:mx-auto sm:-mt-10 sm:w-2/3 sm:scale-125"
                alt="project-img"
              ></Image>
            </div>
          </div>
          <div className="colors-section flex w-full flex-wrap justify-evenly sm:hidden">
            <div className="z-20 h-40 w-40 rounded-full bg-[#1b2028] transition-all duration-500 hover:shadow-2xl hover:drop-shadow-2xl"></div>
            <div className="z-20 h-40 w-40 rounded-full bg-[#00cccb] transition-all duration-500 hover:shadow-2xl hover:drop-shadow-2xl"></div>
            <div className="z-20 h-40 w-40 rounded-full bg-[#fff] drop-shadow-2xl transition-all duration-500 hover:shadow-2xl"></div>
            <div className="z-20 h-40 w-40 rounded-full bg-[#f0f0f0] transition-all duration-500 hover:shadow-2xl hover:drop-shadow-2xl"></div>
            <div className="z-20 h-40 w-40 rounded-full bg-[#878e8f] transition-all duration-500 hover:shadow-2xl hover:drop-shadow-2xl"></div>
          </div>

          <div className="colors-section flex w-full flex-wrap justify-evenly sm:hidden">
            <div className="case-studies-text z-20 mt-3 h-4 w-40 rounded-full font-serif text-gray-500 transition-all duration-500 hover:text-red-500">
              $ebony-black
            </div>
            <div className="case-studies-text z-20 mt-3 h-4 w-40 rounded-full font-serif text-gray-500 transition-all duration-500 hover:text-red-500">
              $egg-blue
            </div>
            <div className="case-studies-text z-20 mt-3 h-4 w-40 rounded-full font-serif text-gray-500 transition-all duration-500 hover:text-red-500">
              $shiny-white
            </div>
            <div className="case-studies-text z-20 mt-3 h-4 w-40 rounded-full font-serif text-gray-500 transition-all duration-500 hover:text-red-500">
              $catskill-white
            </div>
            <div className="case-studies-text z-20 mt-3 h-4 w-40 rounded-full font-serif text-gray-500 transition-all duration-500 hover:text-red-500">
              $rough-gray
            </div>
          </div>

          <div
            style={{ width: "1px" }}
            className="hr-line-cryptodora absolute left-72 m-0 h-1/3 bg-[#b19386] opacity-30 sm:hidden"
          ></div>
          <div
            style={{ width: "1px" }}
            className="hr-line-cryptodora absolute left-1/2 w-1 bg-[#b19386] opacity-30 sm:hidden"
          ></div>
          <div
            style={{ width: "1px" }}
            className="hr-line-cryptodora absolute right-72 w-1 bg-[#b19386] opacity-30 sm:hidden"
          ></div>
        </div>

        <div
          id="next-work-section"
          className="next-work-section flex h-40 w-full items-center justify-center transition-all duration-700"
        >
          <div className="mt-12">
            <h4 className="name-text mb-4 text-center leading-4 tracking-widest text-[#878a8f] sm:relative sm:bottom-44 ">
              CRYPTODORA APP
            </h4>

            <div className="flex w-full items-center justify-between">
              <Link
                href="/heading-cryptodora-section"
                as={`/CryptoDora/#heading-cryptodora-section`}
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

        <div className="footer-cryptodora sm:-top-40 sm:mt-10">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Portfolio;
