import { FC } from "react";
import Image from "next/image";
import GameArtwork1 from "../../images/game-artwork1.jpg";
import GameArtwork2 from "../../images/games2.jpg";
import GameArtwork3 from "../../images/games3.jpg";
import GameArtwork5 from "../../images/games5.jpg";
import TrendingFlatIcon from "@mui/icons-material/TrendingFlat";

const WorkTogether: FC = () => {
  return (
    <>
      <div className="personal-project-section name-text mt-10 sm:-mt-8">
        <h4 className="name-text name-text personal-projects-text mb-4 text-center leading-4 tracking-widest text-[#878a8f] sm:mb-2">
          VIDEO GAMES & ARTS
        </h4>
        <h1 className="title-text personal-projects-text name-text -left-1 mb-4 text-center text-6xl font-extrabold text-[#0f141e] sm:mb-2 sm:text-4xl">
          Level design projects
        </h1>

        <h1 className="title-text personal-projects-text -left-1 mt-8 text-center text-sm font-semibold italic text-[#878a8f] sm:mt-4">
          *Back in 2021 summer, I switched my 5 years of game development career
          into Software Engineering, specially for Web Development! <br />
        </h1>
        <h1 className="title-text personal-projects-text ml-1 mb-4 text-center text-sm font-semibold text-[#878a8f] sm:mt-4 sm:mb-0">
          These are some of my game design work, that I&lsquo;ve done in the
          past...
        </h1>

        <div className="relative top-10 flex h-screen w-full flex-wrap justify-center">
          <div
            className="game-artwork mx-10 mb-20 h-96 w-2/5 cursor-pointer sm:mx-0 sm:mb-0 sm:w-full"
            data-aos="fade-right"
            data-aos-duration="2000"
            data-aos-once="false"
          >
            <a
              href="https://www.artstation.com/artwork/Ea5yqv"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h1 className="project-text name-text absolute z-10 p-4 text-4xl font-black text-white">
                Monkey Empire Vol.1
              </h1>
              <h4 className="view-project-text name-text absolute top-10 z-10 p-4 text-xl font-bold text-white sm:top-20">
                View Project <TrendingFlatIcon className="view-project-arrow" />
              </h4>

              <Image
                src={GameArtwork1}
                className="artwork-img h-full w-full cursor-pointer object-cover"
                alt="game-work"
              />
            </a>
          </div>

          <div
            className="game-artwork1 mx-10 mb-20 h-96 w-2/5 cursor-pointer sm:mx-0 sm:hidden sm:w-full"
            data-aos="fade-left"
            data-aos-duration="2000"
            data-aos-once="false"
          >
            <a
              href="https://www.artstation.com/artwork/VyxXgZ"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h1 className="project-text name-text absolute z-10 p-4 text-4xl font-black text-white">
                Monkey Empire Vol.2
              </h1>
              <h4 className="view-project-text  name-text absolute top-10 z-10 p-4 text-xl font-bold text-white sm:top-20">
                View Project <TrendingFlatIcon className="view-project-arrow" />
              </h4>
              <Image
                src={GameArtwork2}
                className="artwork-img h-full w-full cursor-pointer object-cover"
                alt="game-work"
              />
            </a>
          </div>

          <div
            className="game-artwork2 mx-10 mb-20 h-96 w-2/5 cursor-pointer sm:mx-0 sm:hidden sm:w-full"
            data-aos="fade-right"
            data-aos-duration="2000"
            data-aos-once="false"
          >
            <a
              href="https://www.artstation.com/artwork/48KKG1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h1 className="project-text name-text absolute z-10 p-4 text-4xl font-black text-white">
                Lost Forest
              </h1>
              <h4 className="view-project-text name-text view-projects-bottom absolute top-10 z-10 p-4 text-xl font-bold text-white sm:top-10">
                View Project <TrendingFlatIcon className="view-project-arrow" />
              </h4>
              <Image
                src={GameArtwork3}
                className="artwork-img h-full w-full cursor-pointer object-cover"
                alt="game-work"
              />
            </a>
          </div>

          <div
            className="game-artwork3 mx-10 h-96 w-2/5 cursor-pointer sm:mx-0 sm:mt-8 sm:w-full"
            data-aos="fade-left"
            data-aos-duration="2000"
            data-aos-once="false"
          >
            <a
              href="https://www.artstation.com/artwork/lR5wgV"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h1 className="project-text name-text absolute z-10 p-4 text-4xl font-black text-white">
                Panama Lands
              </h1>
              <h4 className="view-project-text view-project-bottom name-text absolute top-10 z-10 p-4 text-xl font-bold text-white sm:top-10">
                View Project <TrendingFlatIcon className="view-project-arrow" />
              </h4>
              <Image
                src={GameArtwork5}
                className="artwork-img h-full w-full cursor-pointer object-cover"
                alt="game-work"
              />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default WorkTogether;
