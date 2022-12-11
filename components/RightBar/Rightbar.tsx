import { FC } from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";

const Rightbar: FC = () => {
  return (
    <div className="fixed top-1/2 right-0 z-50 mt-4 flex items-center justify-end">
      <div>
        <div className="hover-animation2">
          <a
            href="https://www.linkedin.com/in/yasinduneth/"
            target="_blank"
            rel="noreferrer noopener"
          >
            <LinkedInIcon
              style={{ fontSize: "2.5rem" }}
              className="relative bottom-10 right-8 z-40 cursor-pointer text-[#4c4f65] hover:text-black sm:right-2 sm:w-8"
            />
          </a>
        </div>
        <div className="hover-animation2">
          <a
            href="https://twitter.com/yasindu_neth"
            target="_blank"
            rel="noreferrer noopener"
          >
            <TwitterIcon
              style={{ fontSize: "2.5rem" }}
              className="relative right-8 bottom-10 z-40 my-2 cursor-pointer text-[#4c4f65] hover:text-black sm:right-2 sm:w-8"
            />
          </a>
        </div>
        <div className="hover-animation2">
          <a
            href="https://github.com/YasinduNethmina"
            target="_blank"
            rel="noreferrer noopener"
          >
            <GitHubIcon
              style={{ fontSize: "2.5rem" }}
              className="relative right-8 bottom-10 z-40 cursor-pointer text-[#4c4f65] hover:text-black sm:right-2 sm:w-8"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Rightbar;
