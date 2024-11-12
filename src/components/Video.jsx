import React, { useRef } from "react";

const Video = ({ video, texto, title }) => {
  const videoRef = useRef(null);

  const handleMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };
  return (
    <div
      className="shadow-2xl  w-1/3 rounded-xl h-60 hover:h-auto text-center transition-all duration-300 overflow-hidden hover:scale-[1.2] group"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="h-52 overflow-hidden">
        <video ref={videoRef} loop muted>
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <h1 className="text-lg font-bold">{title}</h1>
      {/* Añadimos animación de opacidad y movimiento en Y */}
      <p className="text-sm opacity-0 transform transition-all duration-300 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0">
        {texto}
      </p>
    </div>
  );
};

export default Video;
