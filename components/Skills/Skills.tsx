import { FC } from "react";
import Image from "next/image";
import SkillsImg from "../../images/skills.png";
import ReactLogoImg from "../../images/react-logo.png";

const Skills: FC = () => {
  return (
    <div className="skills z-40">
      <div className="text-center relative top-16">
        <div className="contact-me-section text-left relative personal-project-section">
          <h4 className="text-[#878a8f] name-text personal-projects-text mb-4 tracking-widest leading-4">
            PROGRAMMING LANGUAGES & TOOLS
          </h4>
          <h1 className="title-text personal-projects-text font-extrabold -left-1 mb-4 text-[#0f141e] text-6xl">
            Skills
          </h1>
        </div>
      </div>
      <div className="bottom-16 w-full relative skills-img-div flex px-20 items-center">
        <div className="mr-20">
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
              React is a free and open-source front-end JavaScript library for
              building user interfaces based on UI components. It is maintained
              by Meta and a community of individual developers and companies.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
