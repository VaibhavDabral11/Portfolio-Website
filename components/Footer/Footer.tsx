import { FC } from "react";
import Link from "next/link";
import RemoveIcon from "@mui/icons-material/Remove";

const Footer: FC = () => {
  return (
    <>
      <hr className="mt-24 w-full sm:-mt-2" id="footer" />
      <div className="footer-section relative mt-10 w-full sm:-mt-8">
        <div className="flex justify-around px-32 sm:flex-wrap sm:px-0">
          <div className="mr-60 w-2/5 sm:mr-0 sm:ml-1 sm:w-full">
            <h1 className="name-text text-lg font-bold sm:hidden">
              Contact <br /> information <RemoveIcon />
            </h1>
            <h1 className="name-text hidden text-lg font-bold sm:block sm:text-center">
              Contact information <RemoveIcon />
            </h1>
            <p className="name-text mt-3 text-xs text-gray-500 sm:px-2 sm:text-center">
              Feel free to reach out to me any time. I prefer to talk over email
              or discord, especially since we may be a few time zones away.
            </p>
            <div className="mt-4 sm:text-center">
              <a href="mailto:yasindunethmina1938096@gmail.com">
                <h4 className="case-studies-text mb-1 text-xs font-semibold transition-all duration-500 hover:scale-105 sm:my-2">
                  Email: yasindunethmina1938096@gmail.com
                </h4>
              </a>
              <a
                href="https://api.whatsapp.com/send?phone=94719947798"
                target="_blank"
                rel="noreferrer"
              >
                <h4 className="case-studies-text mb-1 text-xs font-semibold transition-all duration-500 hover:scale-105 sm:my-2">
                  Mobile: +94-719-947-798
                </h4>
              </a>
              <a
                href="https://discordapp.com/users/611447561215279115"
                target="_blank"
                rel="noreferrer"
              >
                <h4 className="case-studies-text text-xs font-semibold transition-all duration-500 hover:scale-105 sm:my-1">
                  Discord: ZeroDeathzZ#0001
                </h4>
              </a>
            </div>

            <div>
              <h4 className="name-text mt-3 mr-1 text-sm font-extralight italic sm:hidden">
                © 2022{" "}
                <a
                  className="underline-offset-4 transition-all hover:font-normal hover:underline"
                  href="https://github.com/YasinduNethmina"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Yasindu Nethmina.&nbsp;
                </a>
                Made with in Galle, Sri Lanka.
              </h4>
              <h4 className="name-text mb-4 mr-1 text-sm font-extralight italic sm:hidden">
                Layout UI:
                <a
                  className="underline-offset-4 transition-all hover:font-normal hover:underline"
                  href="https://dribbble.com/damianwatracz"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  &nbsp;damianwatracz
                </a>
              </h4>
            </div>
          </div>

          <div className="flex w-3/5 justify-around sm:hidden sm:w-full sm:px-0">
            <div className="w-1/3 sm:w-1/2">
              <h1 className="name-text text-lg font-bold sm:mt-4 sm:hidden">
                Latest <br /> projects <RemoveIcon />
              </h1>
              <h1 className="name-text hidden text-lg font-bold sm:mt-4 sm:block">
                Latest projects <RemoveIcon />
              </h1>
              <h4 className="case-studies-text mt-3 cursor-pointer text-sm underline-offset-4 transition-all hover:underline">
                <Link
                  href="/heading-cryptodora-section"
                  as={`/CryptoDora/#heading-cryptodora-section`}
                >
                  CryptoDora
                </Link>
              </h4>
              <h4 className="case-studies-text mt-1 cursor-pointer text-sm underline-offset-4 transition-all hover:underline">
                <Link
                  href="/heading-cryptodora-section"
                  as={`/NFT-Marketplace/#heading-cryptodora-section`}
                >
                  NFT Marketplace
                </Link>
              </h4>
              <h4 className="case-studies-text mt-1 cursor-pointer text-sm underline-offset-4 transition-all hover:underline">
                <Link
                  href="/heading-portfolio-section"
                  as={`/Portfolio/#heading-portfolio-section`}
                >
                  Portfolio
                </Link>
              </h4>
            </div>

            <div className="mx-32 w-1/3  sm:hidden sm:w-0">
              <h1 className="name-text text-lg font-bold">
                Current <br /> availability <RemoveIcon />
              </h1>
              <p className="name-text name-text mt-3 pr-16 text-xs text-gray-500">
                I usually work on several projects but I’ll be happy to discuss
                new opportunities. Let’s get in touch!
              </p>
            </div>

            <div>
              <h1 className="name-text text-lg font-bold sm:mt-4 sm:hidden">
                Follow <br /> me on <RemoveIcon />
              </h1>
              <h1 className="name-text hidden text-lg font-bold sm:mt-4 sm:block">
                Follow <RemoveIcon />
              </h1>
              <h4 className="case-studies-text mt-3 cursor-pointer text-sm underline-offset-4 transition-all hover:underline">
                <a
                  href="https://twitter.com/yasindu_neth"
                  target="_blank"
                  rel="noreferrer"
                >
                  Twitter
                </a>
              </h4>
              <h4 className="case-studies-text mt-1 cursor-pointer text-sm underline-offset-4 transition-all hover:underline">
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
          <h4 className="name-text mt-5 hidden text-sm font-extralight italic sm:block">
            LayoutUI:
            <a
              className="underline-offset-4 transition-all hover:font-normal hover:underline"
              href="https://dribbble.com/damianwatracz"
              target="_blank"
              rel="noopener noreferrer"
            >
              &nbsp;damianwatracz
            </a>
          </h4>
          <h4 className="name-text mt-3 mr-1 hidden text-sm font-extralight italic sm:mt-1 sm:block sm:text-center">
            © 2022{" "}
            <a
              className="underline-offset-4 transition-all hover:font-normal hover:underline"
              href="https://github.com/YasinduNethmina"
              target="_blank"
              rel="noopener noreferrer"
            >
              Yasindu Nethmina.&nbsp;
            </a>
            Made with in Galle, Sri Lanka.
          </h4>
        </div>
      </div>
    </>
  );
};

export default Footer;
