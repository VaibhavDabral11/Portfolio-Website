import { useEffect } from "react";
import Image from "next/image";
import HomeImg from "../images/home_image.png";
import Head from "next/head";
import CaseStudies from "../components/CaseStudies/CaseStudies";
import Layout from "../components/Layout";
import PersonalProjects from "../components/PersonalProjects/PersonalProjects";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import EmailIcon from "@mui/icons-material/Email";
import WorkTogether from "../components/WorkTogether/WorkTogether";
import Footer from "../components/Footer/Footer";
import styles from "../styles/Home.module.css";
import AboutMe from "../components/AboutMe/AboutMe";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Home() {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);

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
    <Layout>
      <div className={styles.container}>
        <Head>
          <title>Portfolio | Yasindu Nethmina - Frontend Web Developer</title>
          <meta
            name="description"
            content="width=device-width; initial-scale=1.0; maximum-scale=1.0; user-scalable=0; "
          />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className={styles.main}>
          <div
            className="relative bottom-20 flex h-screen w-full items-center overflow-x-hidden"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <div className="relative z-40 w-7/12 sm:w-full">
              <h4 className="name-text leading-4 tracking-widest text-[#878a8f] sm:text-lg">
                YASINDU NETHMINA
              </h4>

              <h1 className="title-text heading-text mb-4 text-6xl font-extrabold text-[#0f141e] sm:text-4xl sm:font-bold">
                Interactive frontend
                <br />
                Web developer
              </h1>
              <h6
                data-aos="zoom-in"
                data-aos-duration="1000"
                className="bio-text mb-4 font-semibold text-[#878a8f] drop-shadow-2xl"
              >
                I&apos;m Yasindu, a frontend web developer with extensive
                knowledge and experience in React, Javascript, Typescript, Next
                Js, Node Js, GraphQL, Cloud, etc...
                <br />
                <br /> When I program, I&apos;m leveraging the work of millions
                of other people, including code in libraries, compilers,
                operating systems, computer networks, and the complex web of
                hardware infrastructure that makes the whole thing run.
                It&apos;s fun being 1 curious human among 8 billion others.
              </h6>
              <div className="flex items-center sm:mr-1 sm:justify-center">
                <a
                  href="#case-studies"
                  className="case-studies-text view-projects-text name-text text-sm font-bold text-[#0f141e] decoration-[#0f141e] underline-offset-4 duration-500 ease-in-out hover:-translate-y-1 hover:scale-105 sm:text-lg"
                >
                  View Projects
                </a>
                <h6 className="name-text mx-4 mb-1 font-semibold text-[#878a8f] sm:text-lg">
                  or
                </h6>
                <a
                  href="#about-me"
                  className="read-about-text case-studies-text l name-text text-sm font-bold text-[#0f141e] decoration-[#0f141e] underline-offset-4 duration-500 ease-in-out hover:-translate-y-1 hover:scale-105 sm:text-lg"
                >
                  Read About Me
                </a>
              </div>
            </div>

            <Image
              priority
              className="bg-home-img ml-12 w-1/3 object-cover sm:absolute sm:right-0 sm:top-4 sm:w-1/2"
              alt="yasindu-nethmina"
              src={HomeImg}
            />
          </div>

          {/* Bounce */}
          <div className="absolute bottom-7 flex h-6 w-4 items-center justify-center rounded-full border-2 border-black sm:bottom-2 sm:hidden">
            <span className="name-text animate-bounce">•</span>
          </div>
          <CaseStudies />
          <AboutMe />
          <PersonalProjects />
          <WorkTogether />
          <Footer />
        </main>

        <footer className={styles.footer}></footer>
      </div>
    </Layout>
  );
}
