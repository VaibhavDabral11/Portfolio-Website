import { FC } from "react";
import Project from "./Project";
import Img1 from "../../images/website-main-dark.jpg";

const LatestWork: FC = () => {
  return (
    <div className="h-screen w-full text-center">
      <div
        style={{ width: "1px" }}
        className="hr-line h-screen m-0 absolute left-72 opacity-30 bg-[#b19386]"
      ></div>
      <div
        style={{ width: "1px" }}
        className="hr-line w-1 absolute left-1/2 opacity-30 bg-[#b19386]"
      ></div>
      <div
        style={{ width: "1px" }}
        className="w-1 hr-line absolute right-72 opacity-30 bg-[#b19386]"
      ></div>

      <hr className="rotate-90 absolute bottom-40 z-40" />
      <div>
        <h4 className="font-serif case-studies-text text-sm bottom-20 relative text-[#b19386]">
          CASE STUDIES
        </h4>
        <h1 className="text-3xl latest-works-text bottom-20 relative text-[#4a4a4a] font-bold">
          Latest Works
        </h1>
      </div>

      {/* Works */}
      <div className="w-1/2 h-1/2 flex work1 absolute right-60">
        <Project
          title="CryptoDora"
          description="realtime cryptocurrency charts,news and track your winning portfolio!"
          img={Img1}
          number={1}
          link="dffg"
        />
      </div>

      <div className="w-1/2 h-1/2 work2 flex absolute left-60">
        <Project
          title="Crypto_Dora"
          description="Leader in bathroom furniture since 1983"
          img={Img1}
          number={2}
          link="dffg"
        />
      </div>

      <div className="w-1/2 h-1/2 work3 flex absolute right-60">
        <Project
          title="Crypto_Dora"
          description="Leader in bathroom furniture since 1983"
          img={Img1}
          number={3}
          link="dffg"
        />
      </div>
    </div>
  );
};

export default LatestWork;
