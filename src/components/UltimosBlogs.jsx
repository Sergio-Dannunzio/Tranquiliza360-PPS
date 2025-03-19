import { useEffect, useState } from "react";
import { getPostPaginated } from "../services/PostService";
import { useNavigate } from "react-router-dom";

const UltimosBlogs = () => {
  const [posts, setPosts] = useState([]);
  const page = 1;
  const limit = 4;
  const navigate = useNavigate();

  useEffect(() => {
    getPostPaginated(page, limit).then((posts) => {
      setPosts(posts);
    });
  }, [page]);

  const handleShowDetails = (num) => {
    navigate(`/blog/${num}`);
  };

  return (
    <section className="flex flex-col items-center justify-center font-montserrat">
      <h1 className="text-center text-4xl font-bold">
        Descubre momentos que renuevan tu calma
      </h1>
      {/* Contenedor principal adaptativo */}
      <div className="my-8 w-full overflow-x-auto lg:w-[120vh]">
        <div className="flex gap-4  xl:grid-cols-4 xl:gap-6">
          {posts &&
            posts.map((post, i) => (
              <div
                key={i}
                className="relative min-w-[250px] h-[250px] mb-10 rounded-lg overflow-hidden cursor-pointer"
                onClick={() => handleShowDetails(post._id)}
              >
                <img
                  src={post.imageUrl}
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-trasparent">
                  <h2 className="text-white absolute bottom-4 text-sm px-1">
                    {post.title}
                  </h2>
                  <p className="text-gray-200 absolute bottom-0 text-xs px-2">
                    {post.autor} -{" "}
                    {new Date(post.createdAt).toLocaleDateString("es-ES")}
                  </p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default UltimosBlogs;
