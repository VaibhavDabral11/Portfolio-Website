import { FC } from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";

const Rightbar: FC = () => {
  return (
    <div className="fixed top-1/2 mt-4 right-0 z-50 flex justify-end items-center">
      <div>
        <div>
          <a
            className="hover-animation2"
            href="https://www.linkedin.com/in/yasinduneth/"
            target="_blank"
            rel="noreferrer noopener"
          >
            <LinkedInIcon
              style={{ fontSize: "2.5rem" }}
              className="text-[#4c4f65]  cursor-pointer relative bottom-10 right-8 z-40 hover:text-black"
            />
          </a>
        </div>
        <div>
          <a 
            className="hover-animation2"
            href="https://twitter.com/yasindu_neth"
            target="_blank"
            rel="noreferrer noopener"
          >
            <TwitterIcon
              style={{ fontSize: "2.5rem" }}
              className="text-[#4c4f65] my-2 relative cursor-pointer right-8 z-40 bottom-10 hover:text-black"
            />
          </a>
        </div>
        <div>
          <a
            className="hover-animation2"
            href="https://github.com/YasinduNethmina"
            target="_blank"
            rel="noreferrer noopener"
          >
            <GitHubIcon
              style={{ fontSize: "2.5rem" }}
              className="text-[#4c4f65] relative cursor-pointer right-8 z-40 bottom-10 hover:text-black"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Rightbar;
