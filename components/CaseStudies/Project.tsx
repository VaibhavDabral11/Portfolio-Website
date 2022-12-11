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
    <div className="work-section h-full w-full cursor-pointer">
      <div className="">
        <h1 className="project-text number-text case-studies-text absolute top-6 right-0 w-40 text-8xl font-black text-white">
          0{number}
        </h1>
        <h1 className="project-text case-studies-text absolute bottom-20 left-10  z-10 w-40 text-left text-5xl font-bold text-white">
          {title}
        </h1>
        <p className="project-description case-studies-text absolute bottom-12 left-10 z-10 w-full text-left text-sm font-normal italic tracking-wider text-white">
          {description}
        </p>
        <div className="button-section bg-blue-500">
          <button
            aria-label="case-study"
            className="button-text case-studies-text absolute bottom-0 left-10 z-10 w-full text-left text-sm font-semibold tracking-wider text-white"
          >
            Case Study
          </button>
          <div className="button-icon case-studies-text absolute bottom-0 left-36 z-20 text-sm font-semibold text-white">
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
