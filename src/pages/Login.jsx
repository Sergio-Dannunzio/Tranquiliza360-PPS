import React from "react";
import hero from "../assets/heroImg.png";
import { FaYoutube } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";

const Login = () => {
  return <div className="bg-cover bg-center w-screen h-screen flex justify-between "
        style={{ backgroundImage: `url(${hero})` }}>
          <div className="ml-56 mb-56 flex flex-col justify-center">
            <h1 className="mb-8 text-6xl text-[#2D5677] font-bold">Bienvenido a Pladema</h1>
            <form action="" className="flex flex-col justify-center">
              <input type="text" name="" id="" placeholder="Ingresa tu correo electronico" className="w-[32rem] mt-2 mb-2 h-10 placeholder:pl-2"/>
              <div className="flex">
                <input type="text" name="" id="" placeholder="Ingresa tu contraseña" className="w-96 mt-2 mb-2 h-10 placeholder:pl-2"/>
                <button className="w-28 bg-[#2D5677] h-10 mt-2 mb-2 ml-4 text-[#ffffff]">
                  ENTRAR
                </button>
              </div>
            </form>
            <div className="flex flex-col mb-2 mt-2">
              <a href="" className="font-bold mb-2 w-52">¿Olvidaste tu contraseña?</a>
              <a href="/register" className="font-bold w-56">¿No tienes cuenta? Registrate</a>
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
export default Login;
