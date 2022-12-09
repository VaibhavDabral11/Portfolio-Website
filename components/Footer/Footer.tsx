import { FC } from "react";
import Link from "next/link";
import RemoveIcon from "@mui/icons-material/Remove";

const Footer: FC = () => {
  return (
    <>
      <hr className="w-full mt-24" id="footer" />
      <div className="footer-section relative mt-10 w-full">
        <div className="flex justify-around px-32">
          <div className="w-2/5 mr-60">
            <h1 className="font-bold name-text text-lg">
              Contact <br /> information <RemoveIcon />
            </h1>
            <p className="text-gray-500 name-text text-xs mt-3">
              Feel free to reach out to me any time. I prefer to talk over email
              or discord, especially since we may be a few time zones away.
            </p>
            <div className="mt-4">
              <a href="mailto:yasindunethmina1938096@gmail.com">
                <h4 className="font-semibold text-xs hover:scale-105 transition-all duration-500 case-studies-text mb-1">
                  Email: yasindunethmina1938096@gmail.com
                </h4>
              </a>
              <a
                href="https://api.whatsapp.com/send?phone=94719947798"
                target="_blank"
                rel="noreferrer"
              >
                <h4 className="font-semibold case-studies-text hover:scale-105 transition-all duration-500 text-xs mb-1">
                  Mobile: +94-719-947-798
                </h4>
              </a>
              <a
                href="https://discordapp.com/users/611447561215279115"
                target="_blank"
                rel="noreferrer"
              >
                <h4 className="font-semibold case-studies-text hover:scale-105 transition-all duration-500 text-xs">
                  Discord: ZeroDeathzZ#0001
                </h4>
              </a>
            </div>

            <div>
              <h4 className="text-sm font-extralight name-text mt-3 mr-1 italic">
                © 2022{" "}
                <a
                  className="transition-all hover:font-normal hover:underline underline-offset-4"
                  href="https://github.com/YasinduNethmina"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Yasindu Nethmina.&nbsp;
                </a>
                Made with in Galle, Sri Lanka.
              </h4>
              <h4 className="text-sm font-extralight name-text mb-4 mr-1 italic ">
                Layout UI:
                <a
                  className="transition-all hover:font-normal hover:underline underline-offset-4"
                  href="https://dribbble.com/damianwatracz"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  &nbsp;damianwatracz
                </a>
              </h4>
            </div>
          </div>

          <div className="flex w-3/5 justify-around">
            <div className="w-1/3">
              <h1 className="font-bold name-text text-lg">
                Latest <br /> projects <RemoveIcon />
              </h1>
              <h4 className="transition-all case-studies-text mt-3 cursor-pointer hover:underline text-sm underline-offset-4">
                <Link
                  href="/heading-cryptodora-section"
                  as={`/CryptoDora/#heading-cryptodora-section`}
                >
                  CryptoDora
                </Link>
              </h4>
              <h4 className="transition-all case-studies-text cursor-pointer mt-1 hover:underline text-sm underline-offset-4">
                <Link
                  href="/heading-portfolio-section"
                  as={`/Portfolio/#heading-portfolio-section`}
                >
                  Portfolio
                </Link>
              </h4>
            </div>

            <div className="mx-32 w-1/3">
              <h1 className="font-bold text-lg name-text">
                Current <br /> availability <RemoveIcon />
              </h1>
              <p className="text-gray-500 name-text text-xs pr-16 name-text mt-3">
                I usually work on several projects but I’ll be happy to discuss
                new opportunities. Let’s get in touch!
              </p>
            </div>

            <div className="">
              <h1 className="font-bold text-lg name-text">
                Follow <br /> me on <RemoveIcon />
              </h1>
              <h4 className="transition-all case-studies-text mt-3 text-sm cursor-pointer hover:underline underline-offset-4">
                <a
                  href="https://twitter.com/yasindu_neth"
                  target="_blank"
                  rel="noreferrer"
                >
                  Twitter
                </a>
              </h4>
              <h4 className="transition-all mt-1 case-studies-text text-sm cursor-pointer hover:underline underline-offset-4">
                <a
                  href="https://www.linkedin.com/in/yasinduneth/"
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn
                </a>
              </h4>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
