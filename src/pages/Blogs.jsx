import { useEffect, useState } from "react";
import BlogCard from "../components/BlogCard";
import { useNavigate } from "react-router-dom";
import {
  getLatestPost,
  getPost,
  getPostPaginated,
} from "../services/PostService";
import { IoIosArrowDropleft, IoIosArrowDropright } from "react-icons/io";
import Loading from "../components/Loading";

const Blogs = () => {
  const [latestPost, setLatestPost] = useState();
  const [posts, setPosts] = useState();
  const [page, setPage] = useState(1);
  const limit = 6;
  let formattedDate = "Fecha inválida";

  // Validar el valor de postDate
  if (latestPost) {
    const date = new Date(latestPost.createdAt);
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
    getPostPaginated(page, limit).then((posts) => {
      setPosts(posts);
    });
    getLatestPost().then((post) => {
      setLatestPost(post);
    });
  }, [page]);

  return (
    <>
      <div className="flex flex-col  justify-center w-full font-montserrat mb-20">
        <div className="bg-geadiant-acento">
          {latestPost ? (
            <div
              onClick={() => handleShowDetails(latestPost._id)}
              className=" relative flex flex-col mx-2 my-32 cursor-pointer md:mx-10 lg:mx-52 xl:mx-80"
            >
              <img
                src={latestPost.imageUrl}
                alt={latestPost.title}
                className="2xl:h-[700px]  object-fit aspect-video"
              />
              <div className="bg-gradient-trasparent h-40 absolute  bottom-0 left-0 w-full">
                <div className="absolute bottom-0 flex flex-col gap-4">
                  <h1 className="text-[#ffffff] text-3xl lg:tracking-wide">
                    {latestPost.title}
                  </h1>
                  <p className=" text-[#C6C6C6] text-xl lg:tracking-wide">
                    {formattedDate} - {latestPost.autor}
                  </p>
                </div>
              </div>
            </div>
          ) : (
            <Loading />
          )}
        </div>
        <div className="flex flex-col items-center">
          {posts ? (
            <>
              <div className="grid items-center justify-center grid-cols-1 mt-24 md:grid-cols-2 xl:grid-cols-3 xl:mx-auto">
                {posts.map((post) => (
                  <BlogCard
                    img={post.imageUrl}
                    title={post.title}
                    postDate={post.createdAt}
                    key={post._id}
                    id={post._id}
                    autor={post.autor}
                  />
                ))}
              </div>

              <div className=" flex justify-center gap-8">
                <button onClick={() => setPage(page - 1)} disabled={page <= 1}>
                  <IoIosArrowDropleft size={40} />
                </button>
                <button
                  onClick={() => setPage(page + 1)}
                  disabled={posts.length < limit}
                  className="hover:text-gray-600"
                >
                  <IoIosArrowDropright size={40} />
                </button>
              </div>
            </>
          ) : (
            <Loading />
          )}
        </div>
      </div>
    </>
  );
};
export default Blogs;
