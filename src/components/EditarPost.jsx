import React, { useState } from "react";
import { ImCross } from "react-icons/im";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
const EditarPost = ({ updatePost, post, setEdit, setPopupMessage }) => {
  const [title, setTitle] = useState(post.title);
  const [autor, setAutor] = useState(post.autor);
  const [content, setContent] = useState(post.content);
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
    const response = await updatePost(post._id, formData);
    if (response.ok) {
      setEdit(false);
      setPopupMessage("Successfully updated");
    }
  };
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 ">
      <div className="flex flex-col w-[90%] max-w-lg lg:w-[100vh] bg-white rounded-lg p-4 relative">
        <h1 className="text-2xl font-bold mb-4">EDITAR POST</h1>
        <button
          onClick={() => setEdit(false)}
          className="absolute right-4 top-4 text-gray-600 hover:text-red-500"
        >
          <ImCross />
        </button>
        <form onSubmit={handleSubmit} className="w-full">
          <div>
            <label className="block font-semibold">Título</label>
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

          <div>
            <label className="block font-semibold">Imagen</label>
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
            className="w-full py-2 bg-blue-500 text-white rounded hover:bg-blue-700 mt-4"
          >
            Confirmar
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditarPost;
