import { FC } from "react";
import Image from "next/image";

export interface Props {
  title: string;
  description: string;
  img: any;
  number: number;
  link: string;
}

const Project: FC<Props> = ({ title, description, img, number, link }) => {
  return (
    <div className="w-full h-full work-section cursor-pointer">
      <h1 className="project-text number-text text-8xl absolute top-6 right-0 z-40 w-40 font-black text-white">
        0{number}
      </h1>
      <h1 className="project-text text-5xl absolute bottom-0 z-40 left-10 w-40 font-bold text-white">
        {title}
      </h1>
      <p className="project-text text-sm italic tracking-wider absolute text-left -bottom-7 left-10 z-40 w-full font-normal text-white">
        {description}
      </p>

      <div className="img-section cursor-pointer">
        <Image src={img} className="" alt="project-img" />
      </div>
    </div>
  );
};

export default Project;
