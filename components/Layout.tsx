import { FC, useEffect } from "react";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import EmailIcon from "@mui/icons-material/Email";
import Navbar from "./Navbar/Navbar";
import Rightbar from "./RightBar/Rightbar";

interface Props {
  children: React.ReactNode;
}

const Layout: FC<Props> = ({ children }) => {
  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    scrollUp();
  }, []);

  return (
    <>
      <Navbar />
      <Rightbar />
      <div>{children}</div>

      {/* Move to Top Btn */}
      <div
        onClick={scrollUp}
        className="fixed bg-[#0f141e4d] cursor-pointer flex justify-center transition-all duration-300 items-center hover:bg-[#0f141e] z-50 bottom-8 right-10 rounded-full w-10 h-10"
      >
        <ArrowUpwardIcon className="text-[#fff]" />
      </div>

      {/* Email Me Btn */}
      <a href="mailto:yasindunethmina1938096@gmail.com">
        <div className="email-me-btn fixed flex items-center bg-[#0f141e4d] hover:w-24 hover:bg-[#0f141e] text-white transition-all duration-500 z-50 bottom-8 left-10 rounded-full w-10 h-10">
          <EmailIcon className="text-[#fff] relative left-2" />
          <span className="email-me-text text-xs px-2 text-center font-semibold">
            Contact Me
          </span>
        </div>
      </a>
    </>
  );
};

export default Layout;
