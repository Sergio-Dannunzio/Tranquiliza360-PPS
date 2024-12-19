import React from "react";

const Loading = () => {
  return (
    <div className="flex items-center justify-center w-full lg:w-[100vh] mx-auto bg-gray-100 h-[30vh]">
      <div className="flex flex-col items-center">
        <div className="w-12 h-12 border-4 border-blue-500 border-dotted rounded-full animate-spin"></div>
        <p className="mt-4 text-lg font-medium text-gray-700 animate-pulse">
          Cargando...
        </p>
      </div>
    </div>
  );
};

export default Loading;
