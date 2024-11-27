import { useEffect, useState } from "react";
import {
  getPost,
  postPost,
  deletePost,
  updatePost,
} from "../services/PostService";
import CreatePost from "../components/CreatePost";
import EditarPost from "../components/EditarPost";

const AministrarBlog = () => {
  const [posts, setPosts] = useState();
  const [edit, setEdit] = useState(false);
  const [editPost, setEditPost] = useState();
  const handleDelete = async (id) => {
    try {
      deletePost(id);
      setPosts((prevPosts) => prevPosts.filter((post) => post._id !== id));
    } catch (e) {
      console.error("Error al eliminar el post:", e);
    }
  };

  const handleUpdate = (post) => {
    setEditPost(post);
    setEdit(true);
  };

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
              <button
                onClick={() => handleDelete(post._id)}
                className="px-4 py-2 text-white bg-red-500 hover:bg-red-600 rounded-md"
              >
                eliminar
              </button>
              <button
                onClick={() => handleUpdate(post)}
                className="px-4 py-2 text-white bg-blue-500 hover:bg-blue-600 rounded-md"
              >
                editar
              </button>
            </div>
          ))
        ) : (
          <p>cargando...</p>
        )}
      </div>
      {edit && (
        <>
          <EditarPost
            updatePost={updatePost}
            post={editPost}
            setEdit={setEdit}
          />
          <div className="bg-black w-full h-full fixed top-0 opacity-60 "></div>
        </>
      )}

      <CreatePost postPost={postPost} />
    </>
  );
};

export default AministrarBlog;
