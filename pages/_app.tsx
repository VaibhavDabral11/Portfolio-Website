import "../components/CaseStudies/Project";
import "../styles/globals.css";
import "../components/Navbar/Navbar.css";
import "../components/CaseStudies/Project.css";
import "../components/CaseStudies/CaseStudies.css";
import "../components/Skills/Skills.css";
import "../components/PersonalProjects/PersonalProjects.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
