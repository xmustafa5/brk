import React from "react";
import { useCountdown } from "../hook/useCountDown";

export default function CountDown({ expiryTimestamp }) {
  const [days, hours, minutes, seconds] = useCountdown(expiryTimestamp);

  return (
    <div className="text-white font-medium flex w-full justify-center items-center gap-4  flex-col relative z-10 ">
     <div className="bg-yellow-120 w-fit justify-center items-center  ">
    <p className="text-blue-120 bg-yellow-120 w-fit	p-1 Regular  text-base font-semibold leading-5  uppercase">
     
      We are lunching in
     </p>
     </div>
     <div className="flex">

      <div className=" flex justify-center items-center flex-col">
        <div className="flex justify-center items-center">
          <h1 className="text-5xl mr-2 tracking-wider">{days}</h1>
          <h1 className="tracking-wider">:</h1>
        </div>
        <p className=" tracking-wider pr-2 mt-2">D</p>
      </div>
      <div className=" flex justify-center items-center flex-col">
        <div className="flex justify-center items-center  ">
          <h1 className="text-5xl ml-2 mr-2 tracking-wider">{hours}</h1>
          <h1 className="tracking-wider">:</h1>
        </div>
        <p className=" tracking-wider pr-2 mt-2">H</p>
      </div>
      <div className=" flex justify-center items-center flex-col">
        <div className="flex justify-center items-center  ">
          <h1 className="text-5xl  ml-2 mr-2 tracking-wider">{minutes}</h1>
          <h1 className="tracking-wider">:</h1>
        </div>
        <p className=" tracking-wider pr-2 mt-2 uppercase">m</p>
      </div>
      <div className=" flex justify-center items-center flex-col">
        <div className="flex justify-center items-center  ">
          <h1 className="text-5xl mr-2 ml-2 tracking-wider">{seconds}</h1>
        </div>
        <p className=" tracking-wider pr-2 mt-2 uppercase">s</p>
      </div>
          
      </div>
    </div>
  );
}
