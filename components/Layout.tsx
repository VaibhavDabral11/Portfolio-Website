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
        className="fixed bottom-8 right-10 z-50 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-[#0f141e4d] transition-all duration-300 hover:bg-[#0f141e]"
      >
        <ArrowUpwardIcon className="text-[#fff]" />
      </div>

      {/* Email Me Btn */}
      <a href="mailto:yasindunethmina1938096@gmail.com">
        <div className="email-me-btn fixed bottom-8 left-10 z-50 flex h-10 w-10 items-center rounded-full bg-[#0f141e4d] text-white transition-all duration-500 hover:w-24 hover:bg-[#0f141e]">
          <EmailIcon className="relative left-2 text-[#fff]" />
          <span className="email-me-text px-2 text-center text-xs font-semibold">
            Contact Me
          </span>
        </div>
      </a>
    </>
  );
};

export default Layout;
