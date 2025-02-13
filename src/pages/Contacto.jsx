import React, { useState } from "react";
import emailjs from "@emailjs/browser";
const Contacto = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    numero: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    emailjs
      .send(
        "service_aeykmpu",
        "template_05j4e9e",
        {
          name: formData.name,
          email: formData.email,
          numero: formData.numero,
          message: formData.message,
        },
        "04Ec3nW48x13_hsE7"
      )
      .then(
        (response) => {
          setLoading(false);
          setMessage("formulario enviado con exito");
          setFormData({ name: "", email: "", numero: "", message: "" });
        },
        (error) => {
          setMessage("error enviando el formulario");
          setLoading(false);
          console.error("Error al enviar el correo:", error);
          alert("Hubo un error al enviar el correo.");
        }
      );
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
                id="numero"
                name="numero"
                value={formData.numero}
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
        {loading && (
          <div className="fixed top-0 left-0 w-full h-full bg-black opacity-50 z-50"></div>
        )}
        {message && (
          <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-white p-4 rounded-md shadow-md text-center">
              <p className="text-lg">{message}</p>
              <button
                onClick={() => setMessage("")}
                className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
              >
                Cerrar
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Contacto;
