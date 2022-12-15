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
    AOS.init({ once: true });
  }, []);

  const [active, setActive] = useState(false);

  {
    return (
      <>
        <div className="my-20" id="about-me">
          <h4
            className="about-me-section name-text name-text personal-projects-text mb-4 text-center leading-4 tracking-widest text-[#878a8f] sm:text-sm"
            data-aos="fade-up"
          >
            A FEW WORDS ABOUT ME
          </h4>
          <div className="flex justify-center" data-aos="fade-up">
            <h1
              animate-aos="fade-up"
              className="title-text personal-projects-text name-text -left-1 mb-4 w-2/3 text-center text-2xl font-bold leading-9 text-[#0f141e] sm:w-full sm:px-3 sm:text-xl"
            >
              I’m Yasindu Nethmina, a multidisciplinary developer who focuses on
              making interactive websites & giving clients immersive results
              through enjoyable and meaningful experiences. I specialize in
              Frontend Web Develpment.
            </h1>
          </div>
          <div className="flex justify-center" data-aos="zoom-out">
            <p className="name-text sm:text-md mt-4 w-1/2 text-center text-lg font-semibold text-[#878a8f] sm:w-full sm:px-7">
              Over the past years, I&apos;ve been working as a front end web
              developer, working solo and leading small development teams.
              Before switching in to Software Engineering, I worked as a Game
              Level Designer for 5 years. So I have a great knowledge even
              working with larger technical teams. In spare time I enjoy&nbsp;
              <span className="cursor-default underline transition-all duration-300 hover:text-black">
                video games
              </span>{" "}
              and <br /> inventing{" "}
              <span className="cursor-default underline transition-all duration-300 hover:text-black">
                new technologies.
              </span>{" "}
            </p>
          </div>

          <div className="w-full" data-aos="zoom-out" data-aos-duration="1000">
            <div className="relative top-80 flex justify-between px-32 sm:top-24 sm:px-4">
              <button
                aria-label="slide"
                className="slide-btn hover-animation z-20 sm:hidden"
                onClick={() => setActive(!active)}
              >
                <KeyboardArrowLeftIcon
                  style={{
                    width: "2.75rem",
                    height: "2.75rem",
                    borderRadius: "100px",
                  }}
                  className="relative -top-3 bg-gray-300 text-gray-100 sm:w-10"
                />
              </button>
              <button
                aria-label="slide"
                className="slide-btn hover-animation z-20 sm:hidden"
                onClick={() => setActive(!active)}
              >
                <KeyboardArrowRightIcon
                  style={{
                    width: "2.75rem",
                    height: "2.75rem",
                    borderRadius: "100px",
                  }}
                  className="relative -top-3 h-12 w-12 rounded-full bg-gray-300 text-gray-100"
                />
              </button>
            </div>
            <Image
              src={CarouselImg1}
              alt="workflow"
              className={
                active
                  ? "about-me-cover cover-img1 justify-left mt-6 flex cursor-move object-contain sm:-mt-28"
                  : "about-me-cover cover-img1 slide-animation justify-left mt-16 flex hidden cursor-move object-contain"
              }
            />

            <Image
              src={CarouselImg2}
              alt="workflow"
              className={
                active
                  ? "about-me-cover cover-img1 slide-animation justify-left mt-16 flex hidden cursor-move object-contain"
                  : "about-me-cover cover-img2 justify-left mt-6 flex cursor-move object-contain sm:-mt-28"
              }
            />
          </div>

          <div className="mt-16 flex justify-around sm:-mt-28 sm:flex-wrap">
            <div data-aos="fade-right" data-aos-duration="1000">
              <h4 className="name-text name-text personal-projects-text mb-4 text-center text-xs leading-4 tracking-widest text-[#878a8f]">
                EXPERIENCED IN
              </h4>
              <div className="">
                <div className="flex items-center justify-center text-[##0f141e]">
                  <h4 className="name-text text-lg font-bold">
                    Frontend Web & Mobile
                  </h4>
                  <span className="name-text font-semibold text-[#cfd0d2]">
                    &nbsp;/&nbsp;
                  </span>
                  <h4 className="name-text text-lg font-bold">UX & UI</h4>
                  <span className="name-text font-semibold text-[#cfd0d2]">
                    &nbsp;/&nbsp;
                  </span>
                </div>
                <div className="flex items-center justify-center">
                  <h4 className="name-text text-lg font-bold">CI/CD</h4>
                  <span className="name-text font-semibold text-[#cfd0d2]">
                    &nbsp;/&nbsp;
                  </span>
                  <h4 className="name-text text-lg font-bold">Testing</h4>
                  <span className="name-text font-semibold text-[#cfd0d2]">
                    &nbsp;/&nbsp;
                  </span>
                  <h4 className="name-text text-lg font-bold">APIs</h4>
                  <span className="name-text font-semibold text-[#cfd0d2]">
                    &nbsp;/&nbsp;
                  </span>
                </div>
                <div className="flex items-center justify-center">
                  <h4 className="name-text text-lg font-bold">Cloud</h4>
                  <span className="name-text font-semibold text-[#cfd0d2]">
                    &nbsp;/&nbsp;
                  </span>
                  <h4 className="name-text text-lg font-bold">Databases</h4>
                  <span className="name-text font-semibold text-[#cfd0d2]">
                    &nbsp;/&nbsp;
                  </span>
                  <h4 className="name-text text-lg font-bold">Debugging</h4>
                  <span className="name-text font-semibold text-[#cfd0d2]">
                    &nbsp;/&nbsp;
                  </span>
                </div>
                <div className="flex items-center justify-center">
                  <h4 className="name-text text-lg font-bold">
                    Game Development
                  </h4>
                </div>
              </div>
            </div>

            <div data-aos="fade-left" data-aos-duration="1000">
              <h4 className="name-text name-text personal-projects-text mb-4 text-center text-xs leading-4 tracking-widest text-[#878a8f] sm:mt-10">
                TECH STACK
              </h4>
              <div className="">
                <div className="flex items-center justify-center">
                  <h4 className="name-text text-lg font-bold">React</h4>
                  <span className="name-text font-semibold text-[#cfd0d2]">
                    &nbsp;/&nbsp;
                  </span>
                  <h4 className="name-text text-lg font-bold">Javascript</h4>
                  <span className="name-text font-semibold text-[#cfd0d2]">
                    &nbsp;/&nbsp;
                  </span>
                  <h4 className="name-text text-lg font-bold">Typescript</h4>
                  <span className="name-text font-semibold text-[#cfd0d2]">
                    &nbsp;/&nbsp;
                  </span>
                </div>
                <div className="flex items-center justify-center">
                  <h4 className="name-text text-lg font-bold sm:hidden">
                    HTML
                  </h4>
                  <span className="name-text font-semibold text-[#cfd0d2] sm:hidden">
                    &nbsp;/&nbsp;
                  </span>
                  <h4 className="name-text text-lg font-bold">SASS</h4>
                  <span className="name-text font-semibold text-[#cfd0d2]">
                    &nbsp;/&nbsp;
                  </span>
                  <h4 className="name-text text-lg font-bold">TailwindCSS</h4>
                  <span className="name-text font-semibold text-[#cfd0d2]">
                    &nbsp;/&nbsp;
                  </span>
                  <h4 className="name-text text-lg font-bold">Redux</h4>
                  <span className="name-text font-semibold text-[#cfd0d2]">
                    &nbsp;/&nbsp;
                  </span>
                  <h4 className="name-text text-lg font-bold">Figma</h4>
                  <span className="name-text font-semibold text-[#cfd0d2]">
                    &nbsp;/&nbsp;
                  </span>
                </div>

                <div className="flex items-center justify-center">
                  <h4 className="name-text text-lg font-bold">NodeJs</h4>
                  <span className="name-text font-semibold text-[#cfd0d2]">
                    &nbsp;/&nbsp;
                  </span>
                  <h4 className="name-text text-lg font-bold">GraphQL</h4>
                  <span className="name-text font-semibold text-[#cfd0d2]">
                    &nbsp;/&nbsp;
                  </span>
                  <h4 className="name-text text-lg font-bold">MongoDB</h4>
                  <span className="name-text font-semibold text-[#cfd0d2]">
                    &nbsp;/&nbsp;
                  </span>
                  <h4 className="name-text text-lg font-bold">SQL</h4>
                  <span className="name-text font-semibold text-[#cfd0d2]">
                    &nbsp;/&nbsp;
                  </span>
                </div>

                <div className="flex items-center justify-center">
                  <h4 className="name-text text-lg font-bold">NextJs</h4>
                  <span className="name-text font-semibold text-[#cfd0d2]">
                    &nbsp;/&nbsp;
                  </span>
                  <h4 className="name-text text-lg font-bold">AWS</h4>
                  <span className="name-text font-semibold text-[#cfd0d2]">
                    &nbsp;/&nbsp;
                  </span>
                  <h4 className="name-text text-lg font-bold">Firebase</h4>
                  <span className="name-text font-semibold text-[#cfd0d2]">
                    &nbsp;/&nbsp;
                  </span>
                  <h4 className="name-text text-lg font-bold">Jest</h4>
                  <span className="name-text font-semibold text-[#cfd0d2]">
                    &nbsp;/&nbsp;
                  </span>
                  <h4 className="name-text text-lg font-bold">Docker</h4>
                </div>
              </div>
            </div>
          </div>

          <h4 className="name-text name-text personal-projects-text mt-16 text-center text-sm leading-4 tracking-widest text-[#878a8f] sm:mt-12">
            SKILLS
          </h4>
          <div
            className="mx-4 flex cursor-pointer flex-wrap justify-evenly"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <Image
              src={HTMLImg}
              className="case-studies-text mt-4 h-16 w-16 transition-all duration-300 hover:scale-110 sm:h-10 sm:w-10"
              alt="html-logo"
            />
            <Image
              src={JavascriptImg}
              className="case-studies-text mt-4 h-16 w-16 transition-all duration-300 hover:scale-110 sm:h-10 sm:w-10"
              alt="html-logo"
            />
            <Image
              src={SASSImg}
              className="case-studies-text mt-4 h-16 w-16 transition-all duration-300 hover:scale-110 sm:h-10 sm:w-10"
              alt="html-logo"
            />
            <Image
              src={NodeImg}
              className="case-studies-text mt-4 h-16 w-16 transition-all duration-300 hover:scale-110 sm:h-10 sm:w-10"
              alt="node-logo"
            />
            <Image
              src={TailwindImg}
              className="case-studies-text mt-4 h-16 w-16 transition-all duration-300 hover:scale-110 sm:h-10 sm:w-10"
              alt="tailwind-logo"
            />
            <Image
              src={FigmaImg}
              className="case-studies-text mt-4 h-16 w-16 transition-all duration-300 hover:scale-110 sm:h-10 sm:w-10"
              alt="figma-logo"
            />
            <Image
              src={FirebaseImg}
              className="case-studies-text mt-4 h-16 w-16 transition-all duration-300 hover:scale-110 sm:h-10 sm:w-10"
              alt="firebase-logo"
            />
            <Image
              src={GitImg}
              className="case-studies-text mt-4 h-16 w-16 transition-all duration-300 hover:scale-110 sm:h-10 sm:w-10"
              alt="git-logo"
            />
            <Image
              src={CSSImg}
              className="case-studies-text mt-4 h-16 w-16 transition-all duration-300 hover:scale-110 sm:h-10 sm:w-10"
              alt="css-logo"
            />
            <Image
              src={GraphQL}
              className="case-studies-text mt-4 h-16 w-16 transition-all duration-300 hover:scale-110 sm:h-10 sm:w-10"
              alt="graphql-logo"
            />
            <Image
              src={AWS}
              className="case-studies-text mt-4 h-16 w-16 transition-all duration-300 hover:scale-110 sm:h-10 sm:w-10"
              alt="aws-logo"
            />
            <Image
              src={TypescriptImg}
              className="case-studies-text mt-4 h-16 w-16 transition-all duration-300 hover:scale-110 sm:h-10 sm:w-10"
              alt="html-logo"
            />
            <Image
              src={ReactImg}
              className="case-studies-text mt-4 h-16 w-16 transition-all duration-300 hover:scale-110 sm:h-10 sm:w-10"
              alt="react-logo"
            />
            <Image
              src={MongoDB}
              className="case-studies-text mt-4 h-16 w-16 transition-all duration-300 hover:scale-110 sm:h-10 sm:w-10"
              alt="mongodb-logo"
            />
            <Image
              src={NextjsImg}
              className="case-studies-text mt-4 mr-1 h-16 w-16 p-1 transition-all duration-300 hover:scale-110 sm:h-10 sm:w-10"
              alt="nextjs-logo"
            />
            <Image
              src={ReduxImg}
              className="case-studies-text case-studies-text mt-4 h-16 w-16 transition-all duration-300 hover:scale-110 sm:h-10 sm:w-10"
              alt="redux-logo"
            />
          </div>
          <h2 className="waving-text"></h2>
          <hr className="mt-16 w-full" />
        </div>
      </>
    );
  }
};

export default AboutMe;
