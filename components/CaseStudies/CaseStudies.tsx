import { FC } from "react";
import Project from "./Project";
import Img1 from "../../images/project-1.jpg";

const LatestWork: FC = () => {
  return (
    <div className="h-screen w-full text-center">
      <div
        style={{ width: "1px" }}
        className="h-screen m-0 absolute left-48 opacity-30 bg-[#b19386]"
      ></div>
      <div
        style={{ width: "1px" }}
        className="h-screen w-1 absolute left-1/2 opacity-30 bg-[#b19386]"
      ></div>
      <div
        style={{ width: "1px" }}
        className="w-1 h-screen absolute right-48 opacity-30 bg-[#b19386]"
      ></div>

      <hr className="rotate-90 absolute bottom-40 z-40" />
      <div>
        <h4 className="font-serif text-sm bottom-20 relative text-[#b19386]">
          CASE STUDIES
        </h4>
        <h1 className="text-3xl bottom-20 relative text-[#4a4a4a] font-bold">
          Latest Works
        </h1>
      </div>

      {/* Works */}
      <div className="w-1/2 h-1/2 flex absolute right-40">
        <Project
          title="Cerasa Redesign"
          description="Leader in bathroom furniture since 1983"
          img={Img1}
          number={1}
          link="dffg"
        />
      </div>
    </div>
  );
};

export default LatestWork;
