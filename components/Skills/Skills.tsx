import { FC } from "react";
import Image from "next/image";
import LayoutImg from "../../images/layout.png";
import SkillsImg from "../../images/main rotating images.png";

const Skills: FC = () => {
  return (
    <div className="skills z-40 ">
      <div className="text-center relative top-20">
        <h4 className="font-serif case-studies-text text-sm bottom-20 relative text-[#b19386]">
          PROGRAMMING LANGUAGES
        </h4>
        <h1 className="text-3xl latest-works-text bottom-20 relative text-[#4a4a4a] font-bold">
          Skills
        </h1>
      </div>
      <div className="top-20 relative fdhfhfh flex justify-center">
        <Image src={LayoutImg} className="layout-img" alt="skills-layout" />
        <Image
          className="absolute skills-img -bottom-2"
          alt="skills-layout"
          src={SkillsImg}
        />
      </div>
    </div>
  );
};

export default Skills;
