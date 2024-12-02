import { useEffect, useState } from "react";
import {
  getPost,
  postPost,
  deletePost,
  updatePost,
} from "../services/PostService";
import CreatePost from "../components/CreatePost";
import EditarPost from "../components/EditarPost";
import { CiSquarePlus } from "react-icons/ci";
const AministrarBlog = () => {
  const [posts, setPosts] = useState();
  const [edit, setEdit] = useState(false);
  const [editPost, setEditPost] = useState();
  const [create, setCreate] = useState(false);
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
      <h1 className="text-3xl pt-36 pb-8 text-center">
        Lista de todos los blogs
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 text-center lg:w-[100vh] mx-auto">
        {posts ? (
          posts.map((post) => (
            <div
              key={post._id}
              className="flex flex-col bg-white shadow-md rounded-lg p-4 border gap-5 m-6"
            >
              <h2 className="text-xl">{post.title}</h2>
              {post.imageUrl && (
                <img className="h-28" src={post.imageUrl} alt={post.imageUrl} />
              )}
              <p className="text-sm text-gray-700">
                {post.content.length > 100
                  ? post.content.slice(0, 100) + "..."
                  : post.content}
              </p>
              <div>
                <button
                  onClick={() => handleDelete(post._id)}
                  className="px-4 m-2 py-2 text-white bg-red-500 hover:bg-red-600 rounded-md"
                >
                  eliminar
                </button>
                <button
                  onClick={() => handleUpdate(post)}
                  className="px-4 m-2 py-2 text-white bg-blue-500 hover:bg-blue-600 rounded-md"
                >
                  editar
                </button>
              </div>
            </div>
          ))
        ) : (
          <p>cargando...</p>
        )}
        <div className="shadow-md rounded-lg p-4 border m-6">
          <button
            onClick={() => setCreate(true)}
            className=" text-gray-800 hover:text-gray-400"
          >
            <CiSquarePlus className="mt-[60%]" size={150} />
          </button>
        </div>
      </div>
      {edit && (
        <>
          <EditarPost
            updatePost={updatePost}
            post={editPost}
            setEdit={setEdit}
          />
        </>
      )}

      {create && <CreatePost postPost={postPost} setCreate={setCreate} />}
    </>
  );
};

export default AministrarBlog;
