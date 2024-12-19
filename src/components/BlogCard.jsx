import React from "react";
import { useNavigate } from "react-router-dom";

const BlogCard = ({ img, title, postDate, id, autor }) => {
  let formattedDate = "Fecha inválida";
  // Validar el valor de postDate
  if (postDate) {
    const date = new Date(postDate);

    // Verificar si la fecha es válida
    if (!isNaN(date.getTime())) {
      const dayShort = date.toLocaleDateString("es-ES", { weekday: "short" });

      formattedDate = `${dayShort}, ${date.toLocaleDateString(
        "es-ES"
      )}-${date.toLocaleTimeString("es-ES", {
        hour: "2-digit",
        minute: "2-digit",
      })}`;
    }
  }

  const navigate = useNavigate();

  const handleShowDetails = (num) => {
    navigate(`/blog/${num}`);
  };

  return (
    <>
      <div
        onClick={() => handleShowDetails(id)}
        className="flex flex-col items-center my-8 xl:w-[400px] cursor-pointer"
      >
        <div className="relative flex flex-col items-center justify-center mx-4 text-center">
          <img
            src={`${img}`}
            alt={title}
            className="object-cover w-[368px] h-[285px]"
          />
          <div className="bg-gradient-trasparent text-[#ffff] w-full absolute text-xl h-20 px-2 text-left bottom-9 mx-2 ">
            <h1>{title}</h1>
          </div>
          <hr className="border-[#1C374D] w-full my-2" />
          <p className="text-sm text-[#1C374D] text-left w-full">
            {formattedDate} - {autor ? autor : "sin autor"}
          </p>
        </div>
      </div>
    </>
  );
};

export default BlogCard;
