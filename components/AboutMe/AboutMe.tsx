import { FC, useState, useEffect } from "react";
import Image from "next/image";
import CarouselImg1 from "../../images/aboutme-img1.jpg";
import CarouselImg2 from "../../images/aboutme-img2.jpg";
import HTMLImg from "../../images/html-5.png";
import JavascriptImg from "../../images/javascript.png";
import SASSImg from "../../images/scss.png";
import NodeImg from "../../images/node-js.png";
import FigmaImg from "../../images/figma-img.png";
import FirebaseImg from "../../images/firebase-logo.png";
import GitImg from "../../images/git-logo.png";
import CSSImg from "../../images/css-icon.png";
import GraphQL from "../../images/graphql-img.png";
import AWS from "../../images/aws-brand.png";
import TypescriptImg from "../../images/typescript--v2.png";
import ReactImg from "../../images/react-native.png";
import MongoDB from "../../images/mongodb-brand.png";
import ReduxImg from "../../images/redux.png";
import TailwindImg from "../../images/tailwind-logo.png";
import NextjsImg from "../../images/nextjs-logo.png";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import AOS from "aos";
import "aos/dist/aos.css";

const AboutMe: FC = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const [active, setActive] = useState(false);

  {
    return (
      <>
        <div className="my-20">
          <h4
            className="text-[#878a8f] about-me-section name-text name-text personal-projects-text text-center mb-4 tracking-widest leading-4"
            data-aos="fade-up"
          >
            A FEW WORDS ABOUT ME
          </h4>
          <div className="flex justify-center" data-aos="fade-up">
            <h1
              animate-aos="fade-up"
              className="title-text personal-projects-text name-text font-bold text-center leading-9 -left-1 mb-4 w-2/3 text-[#0f141e] text-3xl"
            >
              I’m Yasindu Nethmina, a multidisciplinary designer who focuses on
              telling my clients’ stories visually, through enjoyable and
              meaningful experiences. I specialize in responsive websites and
              functional user interfaces.
            </h1>
          </div>
          <div className="flex justify-center" data-aos="zoom-out">
            <p className="mt-4 text-center text-lg font-semibold name-text w-1/2 text-[#878a8f]">
              Over the past 9 years I have been working with big companies and
              rising startups around the world as a designer and art director,
              working solo and leading small design teams. In my spare time I
              enjoy{" "}
              <span className="underline cursor-pointer hover:text-black duration-300 transition-all">
                video games
              </span>{" "}
              and{" "}
              <span className="underline cursor-pointer hover:text-black duration-300 transition-all">
                hiking.
              </span>{" "}
            </p>
          </div>

          <div className="w-full" data-aos="zoom-out" data-aos-duration="1000">
            <div className="justify-between px-32 relative top-80 flex">
              <button
                className="z-20 slide-btn"
                onClick={() => setActive(!active)}
              >
                <KeyboardArrowLeftIcon className="w-10 relative top-5 bg-gray-300 hover:scale-110 duration-700 transition-all text-gray-100 h-10 rounded-full" />
              </button>
              <button
                className="z-20 slide-btn"
                onClick={() => setActive(!active)}
              >
                <KeyboardArrowRightIcon className="w-10 relative top-5 bg-gray-300 hover:scale-110 duration-700 transition-all text-gray-100 h-10 rounded-full" />
              </button>
            </div>
            <Image
              src={CarouselImg1}
              alt="workflow"
              className={
                active
                  ? "about-me-cover cover-img1 cursor-move object-contain flex justify-left mt-16"
                  : "about-me-cover cover-img1 cursor-move hidden slide-animation object-contain flex justify-left mt-16"
              }
            />

            <Image
              src={CarouselImg2}
              alt="workflow"
              className={
                active
                  ? "about-me-cover cover-img1 cursor-move hidden slide-animation object-contain flex justify-left mt-16"
                  : "about-me-cover cover-img2 cursor-move object-contain flex justify-left mt-16"
              }
            />
          </div>

          <div className="mt-16 flex justify-around">
            <div data-aos="fade-right" data-aos-duration="1000">
              <h4 className="text-[#878a8f] name-text name-text personal-projects-text text-xs text-center mb-4 tracking-widest leading-4">
                DESIGN SERVICES
              </h4>
              <div className="">
                <div className="flex items-center justify-center text-[##0f141e]">
                  <h4 className="font-bold text-lg name-text">Art direction</h4>
                  <span className="text-[#cfd0d2] name-text font-semibold">
                    &nbsp;/&nbsp;
                  </span>
                  <h4 className="font-bold text-lg name-text">Web & mobile</h4>
                  <span className="text-[#cfd0d2] font-semibold name-text">
                    &nbsp;/&nbsp;
                  </span>
                </div>
                <div className="flex items-center justify-center">
                  <h4 className="font-bold text-lg name-text">
                    Brand identity
                  </h4>
                  <span className="text-[#cfd0d2] font-semibold name-text">
                    &nbsp;/&nbsp;
                  </span>
                  <h4 className="font-bold text-lg name-text">UX & UI</h4>
                  <span className="text-[#cfd0d2] font-semibold name-text">
                    &nbsp;/&nbsp;
                  </span>
                </div>
                <div className="flex items-center justify-center">
                  <h4 className="font-bold text-lg name-text">Iconography</h4>
                  <span className="text-[#cfd0d2] font-semibold name-text">
                    &nbsp;/&nbsp;
                  </span>
                  <h4 className="font-bold text-lg name-text">Animation</h4>
                  <span className="text-[#cfd0d2] font-semibold name-text">
                    &nbsp;/&nbsp;
                  </span>
                </div>
                <div className="flex items-center justify-center">
                  <h4 className="font-bold text-lg name-text">Photography</h4>
                </div>
              </div>
            </div>

            <div data-aos="fade-left" data-aos-duration="1000">
              <h4 className="text-[#878a8f] name-text name-text personal-projects-text text-xs text-center mb-4 tracking-widest leading-4">
                DESIGN SERVICES
              </h4>
              <div className="">
                <div className="flex items-center justify-center">
                  <h4 className="font-bold text-lg name-text">Photoshop</h4>
                  <span className="text-[#cfd0d2] name-text font-semibold">
                    &nbsp;/&nbsp;
                  </span>
                  <h4 className="font-bold name-text text-lg">Illustrator</h4>
                  <span className="text-[#cfd0d2] name-text font-semibold">
                    &nbsp;/&nbsp;
                  </span>
                  <h4 className="font-bold text-lg name-text">Sketch</h4>
                  <span className="text-[#cfd0d2] font-semibold name-text">
                    &nbsp;/&nbsp;
                  </span>
                </div>
                <div className="flex items-center justify-center">
                  <h4 className="font-bold text-lg name-text">XD</h4>
                  <span className="text-[#cfd0d2] font-semibold name-text">
                    &nbsp;/&nbsp;
                  </span>
                  <h4 className="font-bold text-lg name-text">InVisio</h4>
                  <span className="text-[#cfd0d2] font-semibold name-text">
                    &nbsp;/&nbsp;
                  </span>
                  <h4 className="font-bold text-lg name-text">UXPin</h4>
                  <span className="text-[#cfd0d2] font-semibold name-text">
                    &nbsp;/&nbsp;
                  </span>
                  <h4 className="font-bold name-text text-lg">After Effects</h4>
                  <span className="text-[#cfd0d2] name-text font-semibold">
                    &nbsp;/&nbsp;
                  </span>
                </div>

                <div className="flex items-center justify-center">
                  <h4 className="font-bold text-lg name-text">Premiere Pro</h4>
                  <span className="text-[#cfd0d2] font-semibold name-text">
                    &nbsp;/&nbsp;
                  </span>
                  <h4 className="font-bold text-lg name-text">Lightroom</h4>
                </div>
              </div>
            </div>
          </div>

          <h4 className="text-[#878a8f] mt-16 name-text name-text personal-projects-text text-sm text-center tracking-widest leading-4">
            SKILLS
          </h4>
          <div className="flex justify-evenly cursor-pointer flex-wrap">
            <Image
              src={HTMLImg}
              className="hover:scale-110 transition-all duration-300 w-16 h-16 mt-4 case-studies-text"
              alt="html-logo"
            />
            <Image
              src={JavascriptImg}
              className="hover:scale-110 transition-all duration-300 w-16 h-16 mt-4 case-studies-text"
              alt="html-logo"
            />
            <Image
              src={SASSImg}
              className="hover:scale-110 transition-all duration-300 w-16 h-16 mt-4 case-studies-text"
              alt="html-logo"
            />
            <Image
              src={NodeImg}
              className="hover:scale-110 transition-all duration-300 w-16 h-16 mt-4 case-studies-text"
              alt="node-logo"
            />
            <Image
              src={TailwindImg}
              className="hover:scale-110 transition-all duration-300 w-16 h-16 mt-4 case-studies-text"
              alt="tailwind-logo"
            />
            <Image
              src={FigmaImg}
              className="hover:scale-110 transition-all duration-300 w-16 h-16 mt-4 case-studies-text"
              alt="figma-logo"
            />
            <Image
              src={FirebaseImg}
              className="hover:scale-110 transition-all duration-300 w-16 h-16 mt-4 case-studies-text"
              alt="firebase-logo"
            />
            <Image
              src={GitImg}
              className="hover:scale-110 transition-all duration-300 w-16 h-16 mt-4 case-studies-text"
              alt="git-logo"
            />
            <Image
              src={CSSImg}
              className="hover:scale-110 transition-all duration-300 w-16 h-16 mt-4 case-studies-text"
              alt="css-logo"
            />
            <Image
              src={GraphQL}
              className="hover:scale-110 transition-all duration-300 w-16 h-16 mt-4 case-studies-text"
              alt="graphql-logo"
            />
            <Image
              src={AWS}
              className="hover:scale-110 transition-all duration-300 w-16 h-16 mt-4 case-studies-text"
              alt="aws-logo"
            />
            <Image
              src={TypescriptImg}
              className="hover:scale-110 transition-all duration-300 w-16 h-16 mt-4 case-studies-text"
              alt="html-logo"
            />
            <Image
              src={ReactImg}
              className="hover:scale-110 transition-all duration-300 w-16 h-16 mt-4 case-studies-text"
              alt="react-logo"
            />
            <Image
              src={MongoDB}
              className="hover:scale-110 transition-all duration-300 w-16 h-16 mt-4 case-studies-text"
              alt="mongodb-logo"
            />
            <Image
              src={NextjsImg}
              className="hover:scale-110 transition-all duration-300 w-16 h-16 mt-4 mr-1 p-1 case-studies-text"
              alt="nextjs-logo"
            />
            <Image
              src={ReduxImg}
              className="hover:scale-110 transition-all duration-300 w-16 h-16 mt-4 case-studies-text case-studies-text"
              alt="redux-logo"
            />
          </div>
          <h2 className="waving-text"></h2>
          <hr className="w-full mt-16" />
        </div>
      </>
    );
  }
};

export default AboutMe;
