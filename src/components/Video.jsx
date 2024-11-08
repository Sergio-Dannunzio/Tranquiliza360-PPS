import React from "react";

const Video = ({ video, texto }) => {
  return (
    <div className="flex relative shadow-2xl items-center rounded-xl w-[100vh] h-[600px] text-center gap-10 overflow-hidden">
      <video className="" autoPlay loop muted>
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute  bg-black  top-[0%] w-[100%] h-[100%] opacity-50 rounded-2xl"></div>
      <p className="absolute left-[30%] top-[40%] text-xl  z-50 text-white w-96">
        {texto}
      </p>
    </div>
  );
};

export default Video;
