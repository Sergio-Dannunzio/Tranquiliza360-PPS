import React from "react";
import hero from "../assets/heroImg.png";
import { FaYoutube } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";

const Register = () => {
  return <div className="bg-cover bg-center w-screen h-screen flex justify-between "
  style={{ backgroundImage: `url(${hero})` }}>
    <div className="ml-56 mb-56 flex flex-col justify-center">
      <h1 className="mb-8 text-6xl text-[#2D5677] font-bold">Registro en Pladema</h1>
      <form action="" className="flex flex-col justify-center">
        <div className="flex">
          <input type="text" name="" id="" placeholder="Ingresa tu nombre y apellido" className="w-[20rem] pl-2 mt-2 mb-2 mr-2 h-10"/>
          <input type="text" name="" id="" placeholder="Ingresa tu correo electronico" className="w-[20rem] pl-2 mt-2 mb-2 ml-2 h-10"/>
        </div>
        <textarea placeholder="Ingresa tus lugares favoritos" className="w-[41rem] mt-2 mb-2 h-32 p-2 text-left resize-none"/>
        
        <div className="flex">
          <input type="text" name="" id="" placeholder="Ingresa tu contraseña" className="w-64 pl-2 mt-2 mb-2 mr-2 h-10"/>
          <input type="text" name="" id="" placeholder="Repite tu contraseña" className="w-64 pl-2 mt-2 mb-2 ml-2 h-10"/>
          <button className="w-28 bg-[#2D5677] h-10 mt-2 mb-2 ml-4 text-[#ffffff]">
            ENTRAR
          </button>
        </div>
      </form>
      <div className="flex flex-col mb-2 mt-2">
        <a href="/login" className="font-bold w-56">¿Ya tienes cuenta? Logueate</a>
      </div>
    </div>
    <div className="mr-6 flex flex-col justify-between items-center">
      <div className="flex justify-center items-center mt-2">
        <p className="self-start mr-1">Español</p>
        <IoMdArrowDropdown />
      </div>
      <div className="flex flex-col items-center mt-auto mb-auto space-y-4 pb-56">
        <a href="" className="bg-[#000000] rounded-full p-2 w-12 h-12 justify-center flex items-center">
          <FaLinkedin className="text-white text-2xl"/>
        </a>
        <a href="" className="bg-[#000000] rounded-full p-2 w-12 h-12 justify-center flex items-center">
          <IoIosMail className="text-white text-2xl"/>
        </a>
        <a href="" className="bg-[#000000] rounded-full p-2 w-12 h-12 justify-center flex items-center">
          <FaYoutube className="text-white text-2xl"/>
        </a>
      </div>
    </div>
  </div>;
};

export default Register;
