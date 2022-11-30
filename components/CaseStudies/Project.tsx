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
    <div className="w-full h-full">
      <div className="absolute z-20 text-section">
        <h1>{number}</h1>
      </div>
      <div className="img-section">
        <Image src={img} className="" alt="project-img" />
      </div>
    </div>
  );
};

export default Project;
