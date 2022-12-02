import { FC } from "react";
import Image from "next/image";
import GameArtwork1 from "../../images/game-artwork1.jpg";
import GameArtwork2 from "../../images/games2.jpg";
import GameArtwork3 from "../../images/games3.jpg";
import GameArtwork5 from "../../images/games5.jpg";
import TrendingFlatIcon from "@mui/icons-material/TrendingFlat";

const WorkTogether: FC = () => {
  return (
    <div className="personal-project-section w-full relative">
      <h4 className="text-[#878a8f] name-text personal-projects-text text-left mb-4 tracking-widest leading-4">
        VIDEO GAMES & ARTS
      </h4>
      <h1 className="title-text personal-projects-text font-extrabold -left-1 mb-4 text-[#0f141e] text-6xl">
        Personal projects
      </h1>

      <h1 className="title-text personal-projects-text font-semibold italic -left-1 mb-4 text-[#0f141e] text-sm">
        *Back in 2021 summer, I switched my 5 years of game development career
        into Software Engineering, specially for Web Development 👨‍💻👾 <br />{" "}
        These are some of my game design work, that I've done in the past...
      </h1>

      <div className="flex flex-wrap w-full h-screen top-10 relative justify-center">
        <div className="game-artwork w-2/5 h-96 cursor-pointer mx-10 mb-20">
          <h1 className="project-text absolute p-4 text-white font-black text-4xl">
            Monkey Empire Vol.01
          </h1>
          <h4 className="view-project-text absolute p-4 top-10 text-white font-bold text-xl">
            View Project <TrendingFlatIcon className="view-project-arrow" />
          </h4>

          <Image
            src={GameArtwork1}
            className="cursor-pointer artwork-img w-full h-full object-cover"
            alt="game-work"
          />
        </div>

        <div className="game-artwork1 cursor-pointer w-2/5 h-96 mx-10 mb-20">
          <h1 className="project-text absolute p-4 text-white font-black text-4xl">
            Monkey Empire Vol.02
          </h1>
          <h4 className="view-project-text absolute p-4 top-10 text-white font-bold text-xl">
            View Project <TrendingFlatIcon className="view-project-arrow" />
          </h4>
          <Image
            src={GameArtwork2}
            className="cursor-pointer artwork-img w-full h-full object-cover"
            alt="game-work"
          />
        </div>

        <div className="game-artwork2 cursor-pointer w-2/5 h-96 mx-10 mb-20">
          <h1 className="project-text absolute p-4 text-white font-black text-4xl">
            Forest Environment Design
          </h1>
          <h4 className="view-project-text view-projects-bottom absolute p-4 -bottom-4 text-white font-bold text-xl">
            View Project <TrendingFlatIcon className="view-project-arrow" />
          </h4>
          <Image
            src={GameArtwork3}
            className="cursor-pointer artwork-img w-full h-full object-cover"
            alt="game-work"
          />
        </div>

        <div className="game-artwork3 cursor-pointer w-2/5 h-96 mx-10">
          <h1 className="project-text absolute p-4 text-white font-black text-4xl">
            Panama Lands Artwork
          </h1>
          <h4 className="view-project-text absolute p-4 -bottom-4 text-white font-bold text-xl">
            View Project <TrendingFlatIcon className="view-project-arrow" />
          </h4>
          <Image
            src={GameArtwork5}
            className="cursor-pointer artwork-img w-full h-full object-cover"
            alt="game-work"
          />
        </div>
      </div>
    </div>
  );
};

export default WorkTogether;
