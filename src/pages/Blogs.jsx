import { useEffect, useState } from "react";
import BlogCard from "../components/BlogCard";
import blogs from "../utils/BlogData"
import { useNavigate } from 'react-router-dom';
import { getPost } from "../services/PostService";

const Blogs = () => {
  const [posts, setPosts] = useState();

  const navigate = useNavigate();

  const handleShowDetails = (num) => {
    navigate(`/blog/${num}`);
  };

  useEffect(() => {
    getPost().then((posts) => {
      setPosts(posts);
    });
  }, []);

  return (
    <div className="flex flex-col justify-center w-full">
      <div onClick={() => handleShowDetails(blogs[0].id)} className="relative flex flex-col mx-2 mt-32 cursor-pointer md:mx-10 lg:mx-52 xl:mx-64">
        <img src="/assets/rv_convocatoria_memoria.png" alt=""  className=" 2xl:h-[750px] object-fit"/>
        <h1 className="text-[#ffffff] absolute bottom-8 mx-2 text-center">{blogs[0].title}</h1>
        <p className="text-sm text-[#1C374D] mx-2">{blogs[0].date}</p>
      </div>

      <div className="grid items-center justify-center grid-cols-1 mt-24 md:grid-cols-2 xl:grid-cols-3 xl:mx-auto">
      {posts ? (
        posts.map((post) => (
          <BlogCard img={post.imageUrl} title={post.title} date={post.date} key={post._id} id={post._id}/>
        ))
        ) : (
          <p>cargando...</p>
        )}
      </div>
      
    </div>

  )
};
export default Blogs;
