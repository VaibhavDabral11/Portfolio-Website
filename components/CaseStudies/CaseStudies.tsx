import { FC, useEffect } from "react";
import Image from "next/image";
import Project from "./Project";
import Img1 from "../../images/website-main-dark.jpg";
import Img2 from "../../images/nft-marketplace.jpg";
import Img3 from "../../images/portfolio-app.jpg";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";

const LatestWork: FC = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <div className="case-studies-section h-screen w-full text-center sm:hidden">
        <div
          style={{ width: "1px" }}
          className="hr-line absolute left-72 m-0 h-screen bg-[#b19386] opacity-30"
        ></div>
        <div
          style={{ width: "1px" }}
          className="hr-line absolute left-1/2 w-1 bg-[#b19386] opacity-30"
        ></div>
        <div
          style={{ width: "1px" }}
          className="hr-line absolute right-72 w-1 bg-[#b19386] opacity-30"
        ></div>

        <hr className="absolute bottom-40 z-40 rotate-90" />
        <div>
          <h4
            id="case-studies"
            className="case-studies-text relative bottom-20 font-serif text-sm text-[#b19386]"
            data-aos="fade-up"
          >
            CASE STUDIES
          </h4>
          <h1
            className="latest-works-text relative bottom-20 text-3xl font-bold text-[#4a4a4a]"
            data-aos="fade-down"
          >
            Latest Works
          </h1>
        </div>

        {/* Works */}
        <div
          className="work1 absolute right-60 flex h-1/2 w-1/2"
          data-aos="fade-left"
          data-aos-duration="1000"
        >
          <Link href="/CryptoDora">
            <Project
              title="CryptoDora"
              description="realtime cryptocurrency charts, news and track your winning portfolio!"
              img={Img1}
              number={1}
              link="https://example.com"
            />
          </Link>
        </div>

        <div
          className="work2 absolute left-60 flex h-1/2 w-1/2"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <Link href="/NFT-Marketplace">
            <Project
              title="NFT_Marketplace"
              description="NFT Marketplace project made using the immense power of Solidity and Next.js."
              img={Img2}
              number={2}
              link="https://nft-marketplace-sovq9dcag-yasindunethmina.vercel.app/"
            />
          </Link>
        </div>

        <div
          className="work3 absolute right-60 flex h-1/2 w-1/2"
          data-aos="fade-right"
          data-aos-duration="1000"
        >
          <Link href="/Portfolio">
            <Project
              title="Portfolio_Website"
              description="Amazing portfolio website with stunning & complex real-world projects!"
              img={Img3}
              number={3}
              link="https://www.yasindu.me/"
            />
          </Link>
        </div>
      </div>

      <div className="hidden sm:block">
        <div className="text-center sm:-mt-44">
          <h4
            id="case-studies-mobile"
            className="case-studies-text font-serif text-sm text-[#b19386]"
            data-aos="fade-up"
          >
            CASE STUDIES
          </h4>
          <h1
            className="latest-works-text text-3xl font-bold text-[#4a4a4a]"
            data-aos="fade-down"
          >
            Latest Works
          </h1>
        </div>

        <div className="mt-8">
          <Link href="/CryptoDora">
            <Image
              src={Img1}
              className="mt-12 w-full border-2"
              data-aos="fade-up"
              data-aos-once="false"
              alt="project1"
            />
          </Link>
          <Link href="/NFT-Marketplace">
            <Image
              src={Img2}
              className="mt-12 w-full border-2"
              data-aos="fade-up"
              data-aos-once="false"
              alt="project2"
            />
          </Link>
          <Link href="/Portfolio">
            <Image
              src={Img3}
              className="mt-12 w-full border-2"
              data-aos="fade-up"
              data-aos-once="false"
              alt="project3"
            />
          </Link>
        </div>
      </div>
    </>
  );
};

export default LatestWork;
