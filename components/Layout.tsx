import { FC } from "react";
import Navbar from "./Navbar";
import Rightbar from "./Rightbar";

interface Props {
  children: React.ReactNode;
}

const Layout: FC<Props> = ({ children }) => {
  return (
    <>
      <Navbar />
      <Rightbar />
      <div>{children}</div>
    </>
  );
};

export default Layout;
