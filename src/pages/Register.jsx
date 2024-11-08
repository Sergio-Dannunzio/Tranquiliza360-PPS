import React from "react";
import hero from "../assets/heroImg.png";
import { IoIosMail } from "react-icons/io";
import { FaInstagram } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";
import { useNavigate } from 'react-router-dom';

const Register = () => {

  const navigate = useNavigate();

  const handleLoginMethodClick = () => {
    navigate("/home");
  };

  return <div className="bg-cover bg-center w-screen  h-screen flex flex-col justify-between xl:flex-row"
  style={{ backgroundImage: `url(${hero})` }}>
    <div className=" flex flex-col justify-center items-center xl:items-start">
    <div className="flex justify-center items-center mt-2 absolute top-1 right-3">
          <p className="self-start mr-1">Español</p>
          <IoMdArrowDropdown />
        </div>
      <h1 className="mb-8 pt-20 xl:ml-56 text-4xl md:text-6xl text-[#2D5677] font-bold text-center md:px-4">Registro en Tranquiliza 360°</h1>
      <form action="" className="xl:ml-56 xl:mb-56 flex flex-col justify-center w-full px-4 md:w-4/6">
        <div className="flex flex-col xl:flex-row">
          <input type="text" name="" id="" placeholder="Ingresa tu nombre y apellido" className="w-full flex-grow xl:w-1/2 pl-2 mt-2 mb-2 xl:mr-2 h-10"/>
          <input type="text" name="" id="" placeholder="Ingresa tu correo electronico" className="w-full flex-grow xl:w-1/2 pl-2 mt-2 mb-2 xl:ml-2 h-10"/>
        </div>
        <textarea placeholder="Ingresa tus lugares favoritos" className="xl:w-full mt-2 mb-2 h-32 p-2 text-left resize-none"/>
        
        <div className="flex flex-col xl:flex-row">
          <div className="xl:w-2/6 flex-grow xl:mr-4">
            <input type="text" name="" id="" placeholder="Ingresa tu contraseña" className="flex-grow w-full pl-2 mt-2 mb-2 h-10"/>
          </div>
          <div className="flex">
            <input type="text" name="" id="" placeholder="Repite tu contraseña" className="flex-grow w-4/6 xl:w-1/2 pl-2 mt-2 mb-2 h-10"/>
            <button onClick={handleLoginMethodClick} className="xl:w-28 bg-[#2D5677] h-10 mt-2 mb-2 ml-4 px-4 text-[#ffffff]">ENTRAR</button>
          </div>
        </div>
      <div className="flex flex-col mb-2 mt-2 items-center md:items-start">
        <a href="/login" className="font-bold w-56 text-center md:text-left">¿Ya tienes cuenta? Logueate</a>
      </div>
      </form>
    </div>
    <div className="xl:mr-6 flex flex-col justify-between items-center">
        <div className="flex xl:flex-col items-center xl:mt-auto xl:mb-auto xl:space-y-4 space-x-4 xl:space-x-0 pb-4 xl:pb-56">
          <a
            href=""
            className="bg-[#000000] rounded-full p-2 w-12 h-12 justify-center flex items-center"
          >
            <IoIosMail className="text-white text-2xl" />
          </a>
          <a
            href=""
            className="bg-[#000000] rounded-full p-2 w-12 h-12 justify-center flex items-center"
          >
            <FaInstagram  className="text-white text-2xl"/>
          </a>
        </div>
    </div>
  </div>;
};

export default Register;
