import { useEffect, useState } from "react";
import { getPost } from "../services/PostService";

const AministrarBlog = () => {
  const [posts, setPosts] = useState();

  useEffect(() => {
    getPost().then((posts) => {
      setPosts(posts);
    });
  }, []);
  return (
    <>
      <div className=" flex flex-col justify-center items-center">
        {posts ? (
          posts.map((post) => (
            <div
              key={post._id}
              className="flex mt-20 justify-center items-center p-4 border gap-5 w-9/12"
            >
              <h2>{post.title}</h2>
              <p>{post.content}</p>
              {post.imageUrl && (
                <img className="h-16" src={post.imageUrl} alt={post.imageUrl} />
              )}
            </div>
          ))
        ) : (
          <p>cargando...</p>
        )}
      </div>
      <div></div>
    </>
  );
};

export default AministrarBlog;
