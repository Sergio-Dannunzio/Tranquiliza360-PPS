import BlogCard from "../components/BlogCard";
import blogs from "../utils/BlogData"

const Blogs = () => {
  return (
    <div className="w-full flex flex-col justify-center">
      <div className="flex flex-col cursor-pointer mt-32 mx-2 relative md:mx-10 lg:mx-52 xl:mx-64">
        <img src="/src/assets\rv_convocatoria_memoria.png" alt=""  className=" 2xl:h-[750px] object-fit"/>
        <h1 className="text-[#ffffff] absolute bottom-8 mx-2 text-center">[TANDIL] ¡Te necesitamos! Buscamos voluntarios para participar de una investigación en un entorno de realidad virtual.</h1>
        <p className="text-sm text-[#1C374D] mx-2">16/17/18/19 de Noviembre de 2024</p>
      </div>

      <div className="flex flex-col xl:flex-row justify-center items-center mt-24">
        {blogs.map((blog) => (
          <BlogCard img={"/rv_convocatoria_memoria.png"} title={blog.title} date={blog.date} key={blog.id}/>
        ))}
      </div>
      
    </div>

  )
};
export default Blogs;
