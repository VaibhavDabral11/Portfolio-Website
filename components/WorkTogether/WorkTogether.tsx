import { FC } from "react";
import TrendingFlatIcon from "@mui/icons-material/TrendingFlat";

const WorkTogether: FC = () => {
  return (
    <div className="contact-me-section text-center mt-20 mb-6">
      <h4 className="text-[#878a8f] name-text mb-4 tracking-widest leading-4">
        NEED A FRONTEND DEVELOPER?
      </h4>
      <button className="work-together-text name-text inline-block font-extrabold mt-4 my-36 text-[#0f141e] text-6xl">
        LET'S WORK TOGETHER
        <TrendingFlatIcon className="name-text" style={{ fontSize: "4rem" }} />
      </button>

      <div className="map-section absolute left-0 h-96 w-full">
        <iframe
          className="absolute google-map w-full h-96 left-0"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d18461.89426858084!2d80.0496190938519!3d6.247753543075628!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae1822ba5da53a1%3A0xe1ca72d5d96668ec!2sAmbalangoda!5e0!3m2!1sen!2slk!4v1670146296538!5m2!1sen!2slk"
          style={{ border: "0" }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      {/* Text */}
      <div className="lets-work-text text-justify text-6xl bottom-12 relative left-2/4 font-bold">
        <div className="flex justify-evenly text-zinc-200">
          <h4 className="name-text pr-20">L</h4>
          <h4 className="name-text pr-20">E</h4>
          <h4 className="name-text pr-20">T'</h4>
          <h4 className="name-text pr-20">S</h4>
        </div>

        <div className="flex justify-evenly text-[#fafafa] mr-2 my-20">
          <h4 className="name-text pr-20">W</h4>
          <h4 className="text-zinc-200 name-text pr-20">O</h4>
          <h4 className="name-text pr-20">R</h4>
          <h4 className="name-text text-[#0f141e] pr-20">K</h4>
        </div>

        <div className="flex justify-evenly my-20 text-zinc-200">
          <h4 className="name-text pr-20">T</h4>
          <h4 className="text-[#0f141e] name-text pr-20">O</h4>
          <h4 className="name-text pr-20">G</h4>
          <h4 className="text-[#fafafa] name-text pr-20">E</h4>
        </div>

        <div className="flex justify-evenly text-zinc-200">
          <h4 className="name-text pr-20">T</h4>
          <h4 className="name-text pr-20">H</h4>
          <h4 className="name-text pr-20">E</h4>
          <h4 className="name-text pr-20">R</h4>
        </div>
      </div>
    </div>
  );
};

export default WorkTogether;
