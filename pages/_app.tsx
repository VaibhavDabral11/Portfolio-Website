import "../styles/globals.css";
import "../components/Navbar/Navbar.css";
import "../components/CaseStudies/Project.css";
import "../components/CaseStudies/Project";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
