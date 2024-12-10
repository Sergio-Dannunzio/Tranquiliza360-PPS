import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
const CreatePost = ({ postPost, setCreate }) => {
  const [title, setTitle] = useState("");
  const [autor, setAutor] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState(null);
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", title);
    formData.append("content", content);
    formData.append("autor", autor);
    if (image) {
      formData.append("image", image);
    }
    try {
      postPost(formData);
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
          cancelar
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
    </div>
  );
};

export default CreatePost;
