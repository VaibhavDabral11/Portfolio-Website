import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import NavbarProjects from "../components/Navbar/NavbarProjects";
import Rightbar from "../components/RightBar/Rightbar";
import Footer from "../components/Footer/Footer";
import ProjectImg1 from "../images/PortfolioImg1.png";
import ProjectImg2 from "../images/Portfolioimg2.png";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import PortfolioBgImg from "../images/Portfolio.svg";
export interface IAppProps {}
import TrendingFlatIcon from "@mui/icons-material/TrendingFlat";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import EmailIcon from "@mui/icons-material/Email";

export const Portfolio = (props: IAppProps) => {
  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    scrollUp();
  }, []);

  return (
    <>
      {/* Email Me Btn */}
      <a href="mailto:yasindunethmina1938096@gmail.com">
        <div className="email-me-btn cursor-pointer fixed flex items-center bg-[#0f141e4d] hover:w-24 hover:bg-[#0f141e] text-white transition-all duration-500 z-50 bottom-8 left-10 rounded-full w-10 h-10">
          <EmailIcon className="text-[#fff] relative left-2" />
          <span className="email-me-text text-xs px-2 text-center font-semibold">
            Contact Me
          </span>
        </div>
      </a>
      <div className="bg-white relative h-screen w-full">
        <div className="flex">
          <NavbarProjects />
          <Rightbar />
          <div className="cryptodora-img flex justify-around items-center">
            <div>
              <h1 className="text-[#0f141e] name-text inline-block font-bold text-6xl">
                Portfolio
              </h1>
              <h4 className="mt-4 text-center italic name-text font-serif text-[#878a8f]">
                Amazing portfolio website with stunning projects.
              </h4>
            </div>
            <Link href="/">
              <Image
                src={ProjectImg1}
                alt="cryptodora img"
                className="hover:scale-105 transition-all duration-1000 cursor-pointer"
              />
            </Link>
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
            2022
          </h4>
        </div>

        <div className="w-full introduction-section bg-white">
          <h1 className="text-6xl font-bold pt-12 text-center z-10 name-text text-[#0f141e]">
            Introduction
          </h1>
          <div className="flex justify-center">
            <p className="font-serif w-1/3 pt-6 z-10 relative text-justify name-text tracking-widest text-[#0f141e]">
              This is the website that you&apos;re viewing right now, I made
              this to showcase my web development skills and projects to my
              stunning clients. <br />
              <br />I made this using Next js (Simply, React Js SUPERCHARGED ⚡)
              + Tailwind CSS, also used firebase for hosting, MUI... If
              you&apos;re interested in my work,{" "}
              <a href="#footer">
                <span className="font-semibold font-serif tracking-widest italic hover:underline underline-offset-4 cursor-pointer">
                  Let&apos;s have a chat
                </span>{" "}
              </a>
              😊
            </p>
          </div>

          <div className="flex justify-center pt-6 pb-10 z-10">
            <div className="visit-website-btn bg-transparent z-10 flex justify-center hover:bg-[#0f141e] hover:text-white transition-all duration-300 w-40 font-semibold text-[#0f141e] border-2 border-[#0f141e]">
              <Link
                className="flex items-center relative z-10 tracking-wider left-5 name-text font-bold justify-center"
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
            className="relative bottom-28 right-5 z-0 cryptodora-svg-img"
            alt="img-text"
          ></Image>
        </div>

        <div
          id="analysis-outer-section"
          className="analysis-outer-section w-full text-center mb-20"
        >
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
                Build with amazing clients in mind, and Love.
              </h1>
              <div className="bg-[#0f141e] w-1/4 h-1 my-8"></div>
              <p className="font-serif tracking-wider text-left leading-relaxed text-lg case-studies-text text-[#0f141e]">
                First this is a{" "}
                <span className="text-[#00c8e7] font-semibold tracking-normal case-studies-text">
                  modern website
                </span>
                : every part of the application is specially designed to
                showcase my skills.
                <br /> <br /> As the{" "}
                <span className="text-[#00c8e7] font-semibold tracking-normal case-studies-text">
                  Developer{" "}
                </span>
                of this website, my main goal was to build this website & show
                my{" "}
                <span className="text-[#00c8e7] font-semibold tracking-normal underline case-studies-text">
                  previous projects
                </span>
                , that I&apos;m responsible for. So you&apos;re watching my
                amazing portfolio website right now 😎 Hah!
                <br /> <br /> I built this website also considering it&apos;s{" "}
                <span className="text-[#00c8e7] font-semibold tracking-normal case-studies-text">
                  responsive behavior
                </span>{" "}
                ,{" "}
                <a
                  href="https://www.linkedin.com/in/yasinduneth/"
                  target="_blank"
                  rel="noreferrer"
                  className="font-semibold hover:underline underline-offset-4"
                >
                  {" "}
                  DM
                </a>{" "}
                me through{" "}
                <a
                  href="https://www.linkedin.com/in/yasinduneth/"
                  target="_blank"
                  rel="noreferrer"
                  className="font-semibold hover:underline underline-offset-4 decoration-[#0a66c2]"
                >
                  <span className="text-[#0a66c2] ">LinkedIn</span>
                </a>{" "}
                if you want to have a chat with me!
              </p>
            </div>

            <div className="">
              <Image
                src={ProjectImg2}
                className="w-96 scale-150"
                alt="project-img"
              ></Image>
            </div>
          </div>
          <div className="w-full colors-section flex flex-wrap justify-evenly">
            <div className="w-40 h-40 rounded-full z-20 bg-[#1b2028] hover:shadow-2xl hover:drop-shadow-2xl transition-all duration-500"></div>
            <div className="w-40 h-40 rounded-full z-20 bg-[#00cccb] hover:shadow-2xl hover:drop-shadow-2xl transition-all duration-500"></div>
            <div className="w-40 h-40 rounded-full z-20 bg-[#fff] hover:shadow-2xl drop-shadow-2xl transition-all duration-500"></div>
            <div className="w-40 h-40 rounded-full z-20 bg-[#f0f0f0] hover:shadow-2xl hover:drop-shadow-2xl transition-all duration-500"></div>
            <div className="w-40 h-40 rounded-full z-20 bg-[#878e8f] hover:shadow-2xl hover:drop-shadow-2xl transition-all duration-500"></div>
          </div>

          <div className="w-full colors-section flex flex-wrap justify-evenly">
            <div className="w-40 h-4 rounded-full z-20 transition-all case-studies-text duration-500 font-serif mt-3 text-gray-500 hover:text-red-500">
              $ebony-black
            </div>
            <div className="w-40 h-4 rounded-full z-20 transition-all case-studies-text duration-500 font-serif mt-3 text-gray-500 hover:text-red-500">
              $egg-blue
            </div>
            <div className="w-40 h-4 rounded-full z-20 transition-all case-studies-text duration-500 font-serif mt-3 text-gray-500 hover:text-red-500">
              $shiny-white
            </div>
            <div className="w-40 h-4 rounded-full z-20 transition-all case-studies-text duration-500 font-serif mt-3 text-gray-500 hover:text-red-500">
              $catskill-white
            </div>
            <div className="w-40 h-4 rounded-full z-20 transition-all case-studies-text duration-500 font-serif mt-3 text-gray-500 hover:text-red-500">
              $rough-gray
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

        <div
          id="next-work-section"
          className="next-work-section w-full flex items-center justify-center h-40 transition-all duration-700"
        >
          <div>
            <h4 className="text-[#878a8f] text-center name-text mb-4 tracking-widest leading-4">
              CRYPTODORA APP
            </h4>

            <div
              className="flex justify-between items-center w-full"
              onClick={scrollUp}
            >
              <Link href="/CryptoDora">
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

export default Portfolio;
