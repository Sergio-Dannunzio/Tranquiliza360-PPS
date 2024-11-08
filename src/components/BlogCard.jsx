import React from "react";
import blogs from "../utils/BlogData";


const BlogCard = ({
    img,
    title,
    date,
  }) => {
  return (
    <>
        <div className="flex flex-col items-center my-8 xl:w-[400px]">
            <div className="mx-4 flex flex-col justify-center text-center items-center relative">
                <img
                src={`/assets/${img}`}
                alt={title}
                className="w-auto object-cover"
                />
                <h1 className="text-[#ffff] absolute bottom-10 mx-2">{title}</h1>
                <hr className=" border-[#1C374D] w-full my-2" />
                <p className="text-sm text-[#1C374D]">{date}</p>
            </div>
        </div>
    </>
  );
};

export default BlogCard;
