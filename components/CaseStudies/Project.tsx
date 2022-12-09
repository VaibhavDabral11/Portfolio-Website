import { FC, useEffect } from "react";
import Image from "next/image";
import TrendingFlatIcon from "@mui/icons-material/TrendingFlat";
import AOS from "aos";
import "aos/dist/aos.css";
export interface Props {
  title: string;
  description: string;
  img: any;
  number: number;
  link: string;
}

const Project: FC<Props> = ({ title, description, img, number, link }) => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="w-full h-full work-section cursor-pointer">
      <div className="">
        <h1 className="project-text number-text text-8xl absolute top-6 right-0 w-40 case-studies-text font-black text-white">
          0{number}
        </h1>
        <h1 className="project-text text-5xl text-left absolute bottom-20  z-10 case-studies-text left-10 w-40 font-bold text-white">
          {title}
        </h1>
        <p className="project-description text-sm italic tracking-wider absolute case-studies-text z-10 text-left bottom-12 left-10 w-full font-normal text-white">
          {description}
        </p>
        <div className="button-section bg-blue-500">
          <button
            aria-label="case-study"
            className="button-text text-sm tracking-wider z-10 absolute case-studies-text text-left bottom-0 left-10 w-full font-semibold text-white"
          >
            Case Study
          </button>
          <div className="text-sm button-icon case-studies-text absolute bottom-0 left-36 z-20 font-semibold text-white">
            <TrendingFlatIcon style={{ fontSize: "40px", color: "#e5e7eb" }} />
          </div>
        </div>
      </div>

      <div className="img-section cursor-pointer">
        <Image src={img} className="img-cover" alt="project-img" />
      </div>
    </div>
  );
};

export default Project;
