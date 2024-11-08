import React from "react";
import caracteristicas from "../utils/CardData";
const Card = () => {
  return (
    <>
      <div className="flex  items-center h-96">
        {caracteristicas.map((card) => (
          <div
            key={card.title}
            className="p-4 mx-4 w-1/3  flex flex-col justify-center shadow-md text-center items-center"
          >
            <img className="h-[300px] w-[300px]" src={`${card.img}`} alt="" />
            <h3 className="text-xl  font-semibold">{card.title}</h3>
            <p className="text-sm w-[300px]">{card.description}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Card;
