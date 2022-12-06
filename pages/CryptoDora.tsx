import * as React from "react";
import Image from "next/image";
import NavbarProjects from "../components/Navbar/NavbarProjects";
import Rightbar from "../components/RightBar/Rightbar";
import Footer from "../components/Footer/Footer";
import WebsiteImg from "../images/website-main-dark.jpg";
export interface IAppProps {}

export const CryptoDora = (props: IAppProps) => {
  return (
    <div className="">
      <NavbarProjects />
      <Rightbar />
      <Footer />
    </div>
  );
};

export default CryptoDora;
