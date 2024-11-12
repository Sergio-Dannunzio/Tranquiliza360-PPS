import BlogCard from "../components/BlogCard";
import blogs from "../utils/BlogData"
import { useNavigate } from 'react-router-dom';

const Blogs = () => {

  const navigate = useNavigate();

  const handleShowDetails = (num) => {
    navigate(`/blog/${num}`);
  };

  return (
    <div className="w-full flex flex-col justify-center">
      <div onClick={() => handleShowDetails(blogs[0].id)} className="flex flex-col cursor-pointer mt-32 mx-2 relative md:mx-10 lg:mx-52 xl:mx-64">
        <img src="/assets/rv_convocatoria_memoria.png" alt=""  className=" 2xl:h-[750px] object-fit"/>
        <h1 className="text-[#ffffff] absolute bottom-8 mx-2 text-center">{blogs[0].title}</h1>
        <p className="text-sm text-[#1C374D] mx-2">{blogs[0].date}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 justify-center items-center mt-24 xl:mx-auto">
        {blogs.slice(1).map((blog) => (
          <BlogCard img={"/rv_convocatoria_memoria.png"} title={blog.title} date={blog.date} key={blog.id} id={blog.id}/>
        ))}
      </div>
      
    </div>

  )
};
export default Blogs;
