import React, { useState } from 'react';
import hero from "../assets/heroImg.png";
import { IoIosMail } from "react-icons/io";
import { FaInstagram } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../services/authService';
import { useAuth } from '../context/AuthProvider';

const Login = () => {
  
  const [email, setMail] = useState("");
  const [password, setPass] = useState("");
  const { login } = useAuth();

  const navigate = useNavigate();

  const handleLogin = async (email, password) => {
    try {
      const response = await loginUser({ email: email, password });
      login(response.token);
      return response.token;
    } catch (error) {
      console.error("Error durante el inicio de sesión:", error);
      throw new Error(t('login_form_component.return.handleLogin.new_error'));
    }
  };


  const onSubmit = async () => {
    
    if (!email || !password) {
      console.log("Por favor, completa todos los campos.");
      return;
    }
  
    try {
      const token = await handleLogin(email, password);
      if (token) {
        console.log(token)
        navigate("/home");
      }
    } catch (error) {
      console.error("Error en el inicio de sesión:", error);
    } finally {
    }
  };


  return (
    <div
      className="flex flex-col justify-between w-screen h-screen bg-center bg-cover xl:flex-row"
      style={{ backgroundImage: `url(${hero})` }}
    >
      <div className="flex flex-col items-center justify-center xl:items-start">
        <div className="absolute flex items-center justify-center mt-2 top-1 right-3">
          <p className="self-start mr-1">Español</p>
          <IoMdArrowDropdown />
        </div>
        <h1 className="pt-20 xl:ml-56 mb-8 text-4xl md:text-6xl text-[#2D5677] font-bold text-center md:px-4">
          Bienvenido a Tranquiliza 360°
        </h1>
        <form onSubmit={(e) => { e.preventDefault(); onSubmit(); }} action="" className="flex flex-col justify-center w-full px-4 xl:ml-56 xl:mb-56 md:w-4/6">
          <input
            type="text"
            name=""
            value={email} 
            onChange={(e) => setMail(e.target.value)}
            placeholder="Ingresa tu correo electronico"
            className="xl:w-[32rem] mt-2 mb-2 h-10 placeholder:pl-2"
          />
          <div className="flex  xl:w-[32rem]">
            <input
              type="text"
              name=""
              value={password} 
              onChange={(e) => setPass(e.target.value)}
              placeholder="Ingresa tu contraseña"
              className="flex-grow h-10 mt-2 mb-2 xl:w-96 placeholder:pl-2"
            />
            <button type="submit" className="xl:w-28 bg-[#2D5677] h-10 mt-2 mb-2 ml-4 px-4 text-[#ffffff]">
              ENTRAR
            </button>
          </div>
        <div className="flex flex-col w-full mt-2 mb-2">
          <a href="" className="w-full mb-2 font-bold text-center xl:text-left">
            ¿Olvidaste tu contraseña?
          </a>
          <a href="/register" className="w-full font-bold text-center xl:text-left">
            ¿No tienes cuenta? Registrate
          </a>
        </div>
        </form>
      </div>
      <div className="flex flex-col items-center justify-between xl:mr-6">

        <div className="flex items-center pb-4 space-x-4 xl:flex-col xl:mt-auto xl:mb-auto xl:space-y-4 xl:space-x-0 xl:pb-56">
          <a
            href=""
            className="bg-[#000000] rounded-full p-2 w-12 h-12 justify-center flex items-center"
          >
            <IoIosMail className="text-2xl text-white" />
          </a>
          <a
            href=""
            className="bg-[#000000] rounded-full p-2 w-12 h-12 justify-center flex items-center"
          >
            <FaInstagram  className="text-2xl text-white"/>
          </a>
        </div>
      </div>
    </div>
  );
};
export default Login;
