import * as React from "react";
import Image from "next/image";
import NavbarProjects from "../components/Navbar/NavbarProjects";
import Rightbar from "../components/RightBar/Rightbar";
import Footer from "../components/Footer/Footer";
import ProjectImg from "../images/all-devices-white.png";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
export interface IAppProps {}

export const CryptoDora = (props: IAppProps) => {
  return (
    <>
      <div className="bg-[#1b1f2d] relative h-screen w-full">
        <div className="flex">
          <NavbarProjects />
          <Rightbar />
          <div className="cryptodora-img flex justify-around items-center">
            <div>
              <h1 className="text-white inline-block font-bold text-6xl">
                CryptoDora
              </h1>
              <h4 className="mt-4 text-center italic font-serif text-[#f3f3f3]">
                The Next generation Crypto Tracking System.
              </h4>
            </div>
            <Image src={ProjectImg} alt="cryptodora img" />
          </div>
        </div>

        <div className="flex justify-around text-lg relative top-2/3 w-full text-white font-bold text-sm tracking-wider">
          <h4>
            <span className="text-[#00c8e7] font-bold tracking-widest">
              ROLE &nbsp;
            </span>
            FRONTEND DEVELOPER
          </h4>

          <h4>
            <span className="text-[#00c8e7] font-bold tracking-widest">
              CONTEXT &nbsp;
            </span>
            PERSONAL PROJECT
          </h4>

          <h4>
            <span className="text-[#00c8e7] font-bold tracking-widest">
              PERIOD &nbsp;
            </span>
            3 MONTHS
          </h4>
        </div>

        <div className="w-full introduction-section bg-[#292f43]">
          <h1 className="text-6xl font-bold pt-12 text-center text-white">
            Introduction
          </h1>
          <div className="flex justify-center">
            <p className="font-serif w-1/3 pt-6 relative text-justify tracking-widest text-white">
              Lato aims to be a modern, solid and easy-to-use web-based software
              to manage content. With its intuitive dashboard and hand-crafted
              UI, Lato helps every customer to easily manage every kind of
              content he/she needs.
            </p>
          </div>

          <div className="flex justify-center pt-6 pb-10">
            <div className="visit-website-btn bg-transparent flex justify-center hover:bg-white hover:text-[#292f43] transition-all duration-300 w-40 font-semibold text-white border-2">
              <a
                className="flex items-center relative tracking-wider left-5 font-bold justify-center"
                href="https://cryptodora-app.web.app/"
                target="_blank"
                rel="noreferrer"
              >
                Visit Website
              </a>
              <span className="visit-website-arrow">
                <ArrowRightAltIcon style={{ fontSize: "44px" }} />
              </span>
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

