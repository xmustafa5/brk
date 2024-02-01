import CountDown from "./countDown";
import { canterIcons, logo, logoTitle } from "../assets";
import { facebook, instagram, linkedIn } from "../assets/icons";
import bgVideo from "../assets/video.mp4";

const ComingSoon = () => {
  const expiryTimestamp = new Date(2024, 1, 12);

  return (
    <div className={`relative flex`}>
      <div className="bg-blue-120  gap-4 h-screen flex justify-start items-center  w-[60%]">
        <div className="h-full pt-10 gap-7 flex justify-center items-start  flex-col ml-[15%]">
          <p className="text-blue-120 bg-yellow-120 w-fit	p-1 ">
            Industrial Investment
          </p>
          <div></div>

          <h1 className="flex flex-col gap-3 uppercase text-white text-5xl font-semibold tracking-wider">
            Your Supportive <span>Partner</span>
          </h1>
          <div className="overflow-hidden  ">
            <p className="  max-w-[340px] text-md text-gray-200">
              So good. Im so picky about my music and Imagine Dragons NEVER
              disappoints. Thanks guys! Hope i get to see you oerform live one
              day. This is the best play list out there. I listen to it at work
              and i get so much done. That beat though.
            </p>
          </div>
          <div>
            <input
              type="text"
              className=" appearance-none bg-blue-120 border-white w-[240px]  border h-10 placeholder:uppercase placeholder:grid placeholder:place-content-center placeholder:pl-3 text-white placeholder:text-gray-200 focus:placeholder:text-gray-400 placeholder:text-md"
              placeholder="Enter your email address"
            />
            <button className="bg-yellow-120 ml-4 h-10 p-1">Notify Me</button>
          </div>
        </div>
      </div>
      <div className="flex relative h-screen overflow-hidden  w-[40%] justify-center items-center">
        <video
          autoPlay
          loop
          muted
          style={{
            position: "absolute",
            width: "100%",
            left: "50%",
            top: "50%",
            height: "100%",
            objectFit: "cover",
            transform: "translate(-50%, -50%)",
          }}
        >
          <source src={bgVideo} type="video/mp4" />
        </video>
        <CountDown expiryTimestamp={expiryTimestamp} />
      </div>
      <div className=" absolute top-0 left-0 ">
        <div className="w-[100vw] flex  ">
          <div className="bg-yellow-120 h-0.5 w-[100%]  bottom-0 left-0  absolute"></div>
          <div className="bg-yellow-120 w-20 p-3 flex items-center h-20">
            {logo}
          </div>
          <div className="ml-20 mt-4">{logoTitle}</div>
        </div>
      </div>
      <div className=" absolute top-0 left-0 ">
        <div className="h-[100vh] flex justify-around items-center flex-col">
          <div className="bg-yellow-120 w-0.5 h-[100%]  top-0 right-0  absolute"></div>
          <div className="w-20  p-3 flex items-center h-20">{logo}</div>
          <div>{canterIcons}</div>
          <div className="icons   ">
          <a
          href="https://www.linkedin.com/company/brk-company-for-industrial-investment/"
          target="_blank"
          rel="noopener noreferrer"
        >
          {linkedIn}
        </a>
        <a
          href="https://www.instagram.com/brkiq"
          target="_blank"
          rel="noopener noreferrer"
        >
          {instagram}
        </a>
        <a
          href="https://www.facebook.com/brkiq"
          target="_blank"
          rel="noopener noreferrer"
        >
          {facebook}
        </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ComingSoon;
