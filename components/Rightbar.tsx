import { FC } from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";

const Rightbar: FC = () => {
  return (
    <div className="absolute h-screen w-full top-12 flex justify-end items-center">
      <div>
        <div>
          <LinkedInIcon className="text-blue-500 hover:text-blue-600" />
        </div>
        <div>
          <TwitterIcon className="text-sky-500 hover:text-sky-600" />
        </div>
        <div>
          <GitHubIcon className="text-gray-800 hover:text-black" />
        </div>
      </div>
    </div>
  );
};

export default Rightbar;
