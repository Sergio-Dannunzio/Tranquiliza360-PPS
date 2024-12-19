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
import Loading from "../components/Loading";
const AministrarBlog = () => {
  const [posts, setPosts] = useState();
  const [edit, setEdit] = useState(false);
  const [editPost, setEditPost] = useState();
  const [create, setCreate] = useState(false);
  const [popupMessage, setPopupMessage] = useState("");

  const handleDelete = async (id) => {
    try {
      const response = await deletePost(id);
      if (response.ok) {
        console.log("Post eliminado correctamente");
        setPopupMessage("Post eliminado correctamente");
      } else {
        console.error("Error al eliminar el post:", response.message);
      }
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
  }, [popupMessage]);

  return (
    <>
      <h1 className="text-3xl pt-36 pb-8 text-center">
        Lista de todos los blogs
      </h1>
      {posts ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 text-center lg:w-[100vh] mx-auto">
          {posts.map((post) => (
            <div
              key={post._id}
              className="flex flex-col bg-white shadow-md rounded-lg p-4 border gap-5 m-6"
            >
              <h2 className="text-xl">{post.title}</h2>
              {post.imageUrl && (
                <img
                  className="h-28 object-cover aspect-auto"
                  src={post.imageUrl}
                  alt={post.imageUrl}
                />
              )}
              <p
                className="text-sm text-gray-700"
                dangerouslySetInnerHTML={{ __html: post.content.slice(0, 100) }}
              />
              <p>
                {new Date(post.createdAt).toLocaleDateString("es-ES")}-
                {post.autor}
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
          ))}
          <div className="shadow-md rounded-lg p-4 border m-6">
            <button
              onClick={() => setCreate(true)}
              className=" text-gray-800 hover:text-gray-400"
            >
              <CiSquarePlus size={150} />
            </button>
          </div>
        </div>
      ) : (
        <Loading />
      )}

      {edit && (
        <EditarPost
          updatePost={updatePost}
          post={editPost}
          setEdit={setEdit}
          setPopupMessage={setPopupMessage}
        />
      )}

      {create && (
        <CreatePost
          postPost={postPost}
          setCreate={setCreate}
          setPopupMessage={setPopupMessage}
        />
      )}

      {popupMessage && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-4 rounded-md shadow-md text-center">
            <p className="text-lg">{popupMessage}</p>
            <button
              onClick={() => setPopupMessage("")}
              className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
            >
              Cerrar
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default AministrarBlog;
