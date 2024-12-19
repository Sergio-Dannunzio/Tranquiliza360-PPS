import React, { useState } from "react";
import { ImCross } from "react-icons/im";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import Loading from "./Loading";
const CreatePost = ({ postPost, setCreate, setPopupMessage }) => {
  const [title, setTitle] = useState("");
  const [autor, setAutor] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData();
    formData.append("title", title);
    formData.append("content", content);
    formData.append("autor", autor);
    if (image) {
      formData.append("image", image);
    }

    try {
      const response = await postPost(formData);
      console.log("Respuesta del API:", response);
      if (response.ok) {
        setCreate(false);
        setPopupMessage("se creo un nuevo post");
        console.log("Post creado exitosamente:", response.post);
      } else {
        console.error("Error al crear el post:", response.message);
      }
    } catch (error) {
      console.error("Error al crear el post:", error);
    }
  };
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70">
      <div className="flex flex-col w-[90%] max-w-lg lg:w-[100vh] bg-white rounded-lg p-4 relative">
        <button
          onClick={() => setCreate(false)}
          className="absolute right-4 top-4 text-gray-600 hover:text-red-500"
        >
          <ImCross />
        </button>
        <h1 className="text-2xl font-bold mb-4">Crear un nuevo post</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-semibold">Título</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-semibold">Autor</label>
            <input
              type="text"
              value={autor}
              onChange={(e) => setAutor(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>

          <div className="h-52">
            <label className="block text-sm font-semibold">Contenido</label>
            <ReactQuill
              theme="snow"
              value={content}
              onChange={setContent}
              className="w-full h-40"
              required
            />
          </div>

          <div className="">
            <label className="block text-sm font-semibold">Imagen</label>
            <input
              type="file"
              name="image"
              accept="image/*"
              onChange={(e) => setImage(e.target.files[0])}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
          >
            Crear Post
          </button>
        </form>
      </div>
      {loading && (
        <div className="flex absolute items-center justify-center mx-auto ">
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 border-4 border-blue-500 border-dotted rounded-full animate-spin"></div>
            <p className="mt-4 text-lg font-medium text-gray-700 animate-pulse">
              Cargando...
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default CreatePost;
