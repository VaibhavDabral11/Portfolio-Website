import { FC } from "react";
import Image from "next/image";
import SkillsImg from "../../images/skills.png";
import ReactLogoImg from "../../images/react-logo.png";

const Skills: FC = () => {
  return (
    <div className="skills z-40">
      <div className="text-center relative top-16">
        <h4 className="font-serif case-studies-text text-sm bottom-20 relative text-[#b19386]">
          PROGRAMMING LANGUAGES
        </h4>
        <h1 className="text-3xl latest-works-text bottom-20 relative text-[#4a4a4a] font-bold">
          My Journey
        </h1>
      </div>
      <div className="top-10 w-full relative skills-img-div flex px-20 items-center">
        <div className="mr-20">
          <h1 className="text-3xl latest-works-text bottom-4 relative text-[#4a4a4a] font-bold">
            Skills
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
            turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus
            nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum
            tellus elit sed risus. Maecenas eget condimentum velit, sit amet
            feugiat lectus. Class aptent taciti sociosqu ad litora torquent per
            conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus
            enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex.
            Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum
            lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in
            elementum tellus.
          </p>
        </div>

        <Image
          className="relative skills-img w-1/2"
          alt="skills-img"
          src={SkillsImg}
        />

        <div className="react-inner absolute mt-8 justify-center">
          <div className="flex justify-center">
            <Image
              className="react-logo z-50 w-40 h-40"
              alt="react-logo"
              src={ReactLogoImg}
              width="100"
              height="100"
            />
          </div>
          <div className="text-center">
            <h1 className="font-bold text-3xl text-[#4a4a4a]">React</h1>
            <p className="text-sm px-10">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
              turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus
              nec fringilla accumsan. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis
              tellus. Sed dignissim, metus nec fringilla accumsan.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
