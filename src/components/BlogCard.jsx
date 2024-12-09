import React from "react";
import { useNavigate } from 'react-router-dom';

const BlogCard = ({
    img,
    title,
    date,
    id
  }) => {

    const navigate = useNavigate();

    const handleShowDetails = (num) => {
      navigate(`/blog/${num}`);
    };


  return (
    <>
        <div onClick={() =>handleShowDetails(id)} className="flex flex-col items-center my-8 xl:w-[400px] cursor-pointer">
            <div  className="relative flex flex-col items-center justify-center mx-4 text-center">
                <img
                src={`${img}`}
                alt={title}
                className="object-cover w-[368px] h-[285px]"
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
