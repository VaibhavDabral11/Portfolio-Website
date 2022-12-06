import { FC } from "react";
import Navbar from "./Navbar/Navbar";
import Rightbar from "./RightBar/Rightbar";
import Footer from "./Footer/Footer";

interface Props {
  children: React.ReactNode;
}

const Layout: FC<Props> = ({ children }) => {
  return (
    <>
      <Navbar />
      <Rightbar />
      <div>{children}</div>
      <Footer />
    </>
  );
};

export default Layout;
