import { FC } from "react";
import TrendingFlatIcon from "@mui/icons-material/TrendingFlat";

const WorkTogether: FC = () => {
  return (
    <div className="contact-me-section text-center mt-20 mb-6">
      <h4 className="text-[#878a8f] name-text mb-4 tracking-widest leading-4">
        NEED A FRONTEND DEVELOPER?
      </h4>
      <button className="work-together-text name-text inline-block font-extrabold my-4 text-[#0f141e] text-6xl">
        LET'S WORK TOGETHER
        <TrendingFlatIcon className="name-text" style={{ fontSize: "4rem" }} />
      </button>
    </div>
  );
};

export default WorkTogether;
