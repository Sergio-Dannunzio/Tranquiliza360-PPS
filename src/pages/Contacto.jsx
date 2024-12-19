import React, { useState } from "react";

const Contacto = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Formulario enviado:", formData);
  };

  return (
    <>
      <div className="bg-geadiant-acento mx-auto flex flex-col text-left w-full px-4 md:px-0 font-montserrat">
        <div className="w-full md:w-[80%] lg:w-[60%] mx-auto text-center md:text-left">
          <h1 className="text-3xl sm:text-4xl  md:text-5xl lg:text-[60px] mt-20 md:mt-20 text-[#2D5677] font-bold">
            Contacta con nosotros.
          </h1>
          <p className="text-xs sm:text-sm md:text-base text-[#2D5677] font-bold mt-2">
            CONTACTO DEL EQUIPO
          </p>
          <a
            href="mailto:tranquiliza.360@gmail.com"
            className="text-xs sm:text-sm md:text-base text-[#2D5677]"
          >
            tranquiliza.360@gmail.com
          </a>
        </div>
        <div className="mx-auto p-6 md:p-8 w-full md:w-[70%] lg:w-[539px] mt-8 md:mt-10">
          <form onSubmit={handleSubmit}>
            <div className="mb-6 md:mb-10">
              <input
                placeholder="Nombre y Apellido"
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 h-12 sm:h-14 border border-[#2D5677] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div className="mb-6 md:mb-10">
              <input
                placeholder="Dirección de Email"
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 h-12 sm:h-14 border border-[#2D5677] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div className="mb-6 md:mb-10">
              <input
                placeholder="Teléfono de contacto"
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full px-4 py-2 h-12 sm:h-14 border border-[#2D5677] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="mb-6 md:mb-10">
              <textarea
                placeholder="Tu mensaje"
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-2 h-28 sm:h-32 border border-[#2D5677] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                rows="4"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-[#2D5677] w-full rounded-3xl px-5 text-white py-2 sm:py-3 hover:bg-[#1a405e] transition-colors"
            >
              Enviar mensaje
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contacto;
