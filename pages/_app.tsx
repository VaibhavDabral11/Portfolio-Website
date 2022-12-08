import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/router";
import "../components/CaseStudies/Project";
import "../styles/globals.css";
import "../components/Navbar/Navbar.css";
import "../components/CaseStudies/Project.css";
import "../components/CaseStudies/CaseStudies.css";
import "../components/PersonalProjects/PersonalProjects.css";
import "../components/WorkTogether/WorkTogether.css";
import "../components/AboutMe/AboutMe.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  return (
    // Framer Motion
    <AnimatePresence>
      <motion.div
        key={router.route}
        initial="initialState"
        animate="animateState"
        exit="exitState"
        transition={{
          duration: 0.75,
        }}
        variants={{
          initialState: {
            opacity: 0,
          },
          animateState: {
            opacity: 1,
          },
          exitState: {},
        }}
      >
        <Component {...pageProps} />
      </motion.div>
    </AnimatePresence>
  );
}
