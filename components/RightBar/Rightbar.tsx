import { FC } from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";

const Rightbar: FC = () => {
  return (
    <div className="fixed top-1/2 mt-4 right-0 z-50 flex justify-end items-center">
      <div>
        <div>
          <LinkedInIcon
            style={{ fontSize: "2.5rem" }}
            className="text-[#4c4f65] hover:scale-110 cursor-pointer relative transition-all duration-300 bottom-10 right-8 z-40 hover:text-black"
          />
        </div>
        <div>
          <TwitterIcon
            style={{ fontSize: "2.5rem" }}
            className="text-[#4c4f65] my-2 relative hover:scale-110 cursor-pointer transition-all duration-300 right-8 z-40 bottom-10 hover:text-black"
          />
        </div>
        <div>
          <GitHubIcon
            style={{ fontSize: "2.5rem" }}
            className="text-[#4c4f65] relative hover:scale-110 cursor-pointer right-8 transition-all duration-300 z-40 bottom-10 hover:text-black"
          />
        </div>
      </div>
    </div>
  );
};

export default Rightbar;
