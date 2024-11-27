import React, { useState } from "react";

const EditarPost = ({ updatePost, post, setEdit }) => {
  const [title, setTitle] = useState(post.title);
  const [content, setContent] = useState(post.content);
  const [image, setImage] = useState(null);
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", title);
    formData.append("content", content);
    if (image) {
      formData.append("image", image);
    }
    updatePost(post._id, formData);
  };
  return (
    <div className=" flex flex-col w-[100vh] bg-white justify-center items-center p-4 z-10 absolute top-40 lg:left-[20%]">
      <h1 className="text-2xl font-bold mb-4">EDITAR POST</h1>
      <button
        onClick={() => setEdit(false)}
        className=" absolute right-4 top-1"
      >
        cancelar
      </button>
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
          <label className="block text-sm font-semibold">Contenido</label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>

        <div>
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
          onClick={() => handleSubmit}
          type="submit"
          className="w-full py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
        >
          Confirmar
        </button>
      </form>
    </div>
  );
};

export default EditarPost;
