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
            content="width=device-width, initial-scale=1 maximum-scale=1.0, user-scalable=no"
          />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className={styles.main}>
          <div
            className="overflow-x-hidden flex items-center h-screen relative bottom-20 w-full"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <div className="w-7/12 relative">
              <h4 className="text-[#878a8f] name-text mb-4 tracking-widest leading-4">
                YASINDU NETHMINA
              </h4>
              <h1 className="title-text heading-text font-extrabold mb-4 text-[#0f141e] text-6xl">
                Interactive frontend
                <br />
                Web developer
              </h1>
              <h6
                data-aos="zoom-in"
                data-aos-duration="1000"
                className="bio-text font-semibold mb-4 drop-shadow-2xl text-[#878a8f]"
              >
                I&apos;m Yasindu, a frontend web developer with extensive
                knowledge and experience in React, Javascript, Typescript, AWS,
                Next Js, Node Js, GraphQL etc...
                <br />
                <br /> When I program, I&apos;m leveraging the work of millions
                of other people, including code in libraries, compilers,
                operating systems, computer networks, and the complex web of
                hardware infrastructure that makes the whole thing run.
                It&apos;s fun being 1 curious human among 8 billion others.
              </h6>
              <div className="flex items-center">
                <a
                  href="#case-studies"
                  className="font-bold text-sm case-studies-text view-projects-text name-text hover:-translate-y-1 hover:scale-105 ease-in-out duration-500 underline-offset-4 decoration-[#0f141e] text-[#0f141e]"
                >
                  View Projects
                </a>
                <h6 className="font-semibold text-[#878a8f] name-text mx-4 mb-1">
                  or
                </h6>
                <a
                  href="#about-me"
                  className="font-bold read-about-text case-studies-text text-sm l name-text hover:-translate-y-1 hover:scale-105 ease-in-out duration-500 underline-offset-4 decoration-[#0f141e] text-[#0f141e]"
                >
                  Read About Me
                </a>
              </div>
            </div>

            <Image
              placeholder="blur"
              className="bg-home-img w-1/3 z-50 ml-12 object-cover"
              alt="yasindu-nethmina"
              src={HomeImg}
            />
          </div>

          {/* Bounce */}
          <div className="border-2 justify-center items-center flex border-black h-6 absolute bottom-7 w-4 rounded-full">
            <span className="animate-bounce name-text">•</span>
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
