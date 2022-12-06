import { FC } from "react";
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
              <h4 className="font-semibold text-xs case-studies-text mb-1">
                Email: yasindunethmina1938096@gmail.com
              </h4>
              <h4 className="font-semibold case-studies-text text-xs mb-1">
                Mobile: +94-719-947-798
              </h4>
              <h4 className="font-semibold case-studies-text text-xs">
                Discord: ZeroDeathzZ#0001
              </h4>
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
                  Yasindu Nethmina.
                </a>
                Made with in Galle, Sri Lanka.
              </h4>
              <h4 className="text-sm font-extralight name-text mr-1 italic ">
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
                Iceland
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
                Twitter
              </h4>
              <h4 className="transition-all case-studies-text text-sm cursor-pointer hover:underline underline-offset-4">
                Facebook
              </h4>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
