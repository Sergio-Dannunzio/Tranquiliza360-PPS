import React, { useState } from "react";
import { ImCross } from "react-icons/im";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
const EliminarPost = ({ deletePost, post, setDelete, setPopupMessage }) => {

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await deletePost(post._id);
    if (response.ok) {
      setDelete(false);
      setPopupMessage("Post Eliminado Correctamente");
    }
  };
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 ">
      <div className="flex flex-col w-[90%] max-w-lg lg:w-[100vh] bg-white rounded-lg p-4 relative">
        <h1 className="text-2xl font-bold mb-4">ELIMINAR POST</h1>
        <button
          onClick={() => setDelete(false)}
          className="absolute right-4 top-4 text-gray-600 hover:text-red-500"
        >
          <ImCross />
        </button>
        <form onSubmit={handleSubmit} className="w-full flex">
          

          <button
            type="submit"
            className="w-full mx-2 py-2 text-white rounded bg-red-500  hover:bg-red-600 mt-4"
          >
            Confirmar
          </button>
          <button
            onClick={() => setDelete(false)}
            className="w-full mx-2 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 mt-4"
          >
            Cancelar
          </button>
        </form>
      </div>
    </div>
  );
};

export default EliminarPost;
