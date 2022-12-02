import { FC } from "react";

const Footer: FC = () => {
  return (
    <div className="footer-section relative top-96 h-40 w-full">
      <div className="hr-section w-full h-1 bg-gray-500"></div>
      <div className="flex justify-between w-full">
        <div className="w-2/5">
          <h1 className="font-bold">Contact information</h1>
          <p className="text-gray-500">
            Feel free to reach out to me any time. I prefer to talk over email,
            especially since we may be a few time zones away.
          </p>
          <h4>Email:yasindunethmina1938096@gmail.com</h4>
          <h4>Mobile:+94-719-947-798</h4>
        </div>

        <div className="w-1/5">
          <h1 className="font-bold">Latest projects</h1>
          <h4>Iceland</h4>
        </div>

        <div className="w-1/5">
          <h1 className="font-bold">Current availability</h1>
          <p className="text-gray-500">
            I usually work on several projects but I’ll be happy to discuss new
            opportunities. Let’s get in touch!
          </p>
        </div>

        <div className="w-1/5">
          <h1 className="font-bold">Follow me on</h1>
          <h4>Twitter</h4>
          <h4>Facebook</h4>
        </div>
      </div>
    </div>
  );
};

export default Footer;
