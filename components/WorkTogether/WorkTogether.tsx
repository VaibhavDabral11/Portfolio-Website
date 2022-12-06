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
    googleMapsApiKey: string;
  }

  const { isLoaded }: isLoadedInterface = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
  });

  if (!isLoaded) {
    return <div>loading...</div>;
  }

  return (
    <div className="contact-me-section text-center mt-20 mb-6" id="contact">
      <h4 className="text-[#878a8f] name-text mb-4 tracking-widest leading-4">
        NEED A FRONTEND DEVELOPER?
      </h4>
      <button
        id="contact"
        className="work-together-text name-text inline-block font-extrabold mt-4 my-28 text-[#0f141e] text-6xl"
        data-aos="zoom-out"
        data-aos-duration="2000"
      >
        LET&lsquo;S WORK TOGETHER
        <TrendingFlatIcon className="name-text" style={{ fontSize: "4rem" }} />
      </button>
      <div className="map-section absolute left-0 h-96 w-full">
        <Map />
      </div>

      {/* Text */}
      <div className="lets-work-text text-justify text-6xl bottom-12 relative font-bold">
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
          className="flex justify-evenly text-[#fafafa] mr-2 my-20"
          data-aos="zoom-out"
          data-aos-duration="1500"
          data-aos-once="false"
        >
          <h4 className="name-text pr-20">W</h4>
          <h4 className="text-zinc-200 name-text pr-20">O</h4>
          <h4 className="name-text pr-20">R</h4>
          <h4 className="name-text text-[#fafafa] pr-20">K</h4>
        </div>

        <div
          className="flex justify-evenly my-20 text-zinc-200"
          data-aos="zoom-out"
          data-aos-duration="1500"
          data-aos-once="false"
        >
          <h4 className="name-text pr-20">T</h4>
          <h4 className="text-[#fafafa] name-text pr-20">O</h4>
          <h4 className="name-text pr-20">G</h4>
          <h4 className="text-[#fafafa] name-text pr-20">E</h4>
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
