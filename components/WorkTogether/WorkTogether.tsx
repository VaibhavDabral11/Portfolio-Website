import { FC, useEffect } from "react";
import Map from "./Map/Map";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import TrendingFlatIcon from "@mui/icons-material/TrendingFlat";
import AOS from "aos";
import "aos/dist/aos.css";

const WorkTogether: FC = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  interface isLoadedInterface {
    isLoaded: boolean;
  }

  const { isLoaded }: isLoadedInterface = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string,
  });

  if (!isLoaded) {
    return <div>loading...</div>;
  }

  return (
    <div
      className="contact-me-section mt-20 mb-6 text-center sm:-mt-6"
      id="contact"
    >
      <h4 className="name-text mb-4 leading-4 tracking-widest text-[#878a8f] sm:mb-0 sm:text-sm">
        NEED A FRONTEND DEVELOPER?
      </h4>
      <a href="mailto:yasindunethmina1938096@gmail.com">
        <button
          aria-label="contact-yasindunethmina1938096@gmail.com"
          id="contact"
          className="work-together-text name-text my-28 mt-4 inline-block text-6xl font-extrabold text-[#0f141e] sm:my-5 sm:mt-0 sm:text-2xl"
          data-aos="zoom-out"
          data-aos-duration="2000"
        >
          LET&lsquo;S WORK TOGETHER
          <TrendingFlatIcon
            className="name-text sm:w-10"
            style={{ fontSize: "4rem" }}
          />
        </button>
      </a>
      <div className="map-section absolute left-0 h-96 w-full sm:w-full">
        <Map />
      </div>

      {/* Text */}
      <div className="lets-work-text relative bottom-12 text-justify text-6xl font-bold sm:invisible">
        <div
          className="flex justify-evenly text-[#0f141e]"
          data-aos="zoom-out"
          data-aos-duration="1500"
          data-aos-once="false"
        >
          <h4 className="name-text pr-20 text-[#0f141e]">L</h4>
          <h4 className="name-text pr-20 text-zinc-200">E</h4>
          <h4 className="name-text pr-20 text-zinc-200">T&lsquo;</h4>
          <h4 className="name-text pr-20 text-[#0f141e]">S</h4>
        </div>

        <div
          className="my-20 mr-2 flex justify-evenly text-[#fafafa]"
          data-aos="zoom-out"
          data-aos-duration="1500"
          data-aos-once="false"
        >
          <h4 className="name-text pr-20">W</h4>
          <h4 className="name-text pr-20 text-zinc-200">O</h4>
          <h4 className="name-text pr-20">R</h4>
          <h4 className="name-text pr-20 text-[#fafafa]">K</h4>
        </div>

        <div
          className="my-20 flex justify-evenly text-zinc-200"
          data-aos="zoom-out"
          data-aos-duration="1500"
          data-aos-once="false"
        >
          <h4 className="name-text pr-20">T</h4>
          <h4 className="name-text pr-20 text-[#fafafa]">O</h4>
          <h4 className="name-text pr-20">G</h4>
          <h4 className="name-text pr-20 text-[#fafafa]">E</h4>
        </div>

        <div
          className="flex justify-evenly text-zinc-200"
          data-aos="zoom-out"
          data-aos-duration="1500"
          data-aos-once="false"
        >
          <h4 className="name-text pr-20 text-zinc-200">T</h4>
          <h4 className="name-text pr-20 text-[#0f141e]">H</h4>
          <h4 className="name-text pr-20 text-[#0f141e]">E</h4>
          <h4 className="name-text pr-20 text-zinc-200">R</h4>
        </div>
      </div>
    </div>
  );
};

export default WorkTogether;
