import { useEffect, useState } from "react";
import BlogCard from "../components/BlogCard";
import blogs from "../utils/BlogData";
import { useNavigate } from "react-router-dom";
import { getLatestPost, getPost } from "../services/PostService";

const Blogs = () => {
  const [latestPost, setLatestPost] = useState();
  const [posts, setPosts] = useState();
  let formattedDate = "Fecha inválida";
  // Validar el valor de postDate
  if (latestPost) {
    const date = new Date(latestPost.createdAt);

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

  useEffect(() => {
    getPost().then((posts) => {
      setPosts(posts);
    });
    getLatestPost().then((post) => {
      setLatestPost(post);
    });
  }, []);

  return (
    <>
      <div className="flex flex-col  justify-center w-full">
        <div className="section-carrusel">
          {latestPost && (
            <div
              onClick={() => handleShowDetails(latestPost._id)}
              className=" relative flex flex-col mx-2 mt-32 cursor-pointer md:mx-10 lg:mx-52 xl:mx-80"
            >
              <img
                src={latestPost.imageUrl}
                alt={latestPost.title}
                className="2xl:h-[700px]  object-fit"
              />
              <div className="bg-gradient-trasparent h-40 absolute  bottom-0 left-0 w-full">
                <h1 className="text-[#ffffff] absolute top-12  text-3xl ">
                  {latestPost.title}
                </h1>
                <p className=" text-[#C6C6C6] absolute bottom-2 text-xl ">
                  {formattedDate} - {latestPost.autor}
                </p>
              </div>
            </div>
          )}
        </div>

        <div className="grid items-center justify-center grid-cols-1 mt-24 md:grid-cols-2 xl:grid-cols-3 xl:mx-auto">
          {posts ? (
            posts.map((post) => (
              <BlogCard
                img={post.imageUrl}
                title={post.title}
                postDate={post.createdAt}
                key={post._id}
                id={post._id}
                autor={post.autor}
              />
            ))
          ) : (
            <p>cargando...</p>
          )}
        </div>
      </div>
    </>
  );
};
export default Blogs;
