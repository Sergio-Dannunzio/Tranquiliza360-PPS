import { NavLink } from "react-router-dom";
import plademaimglogo from "../assets/pladema.png";

const NavBar = () => {

  return (
    <div className="container mx-[25%] w-1/2 flex justify-between absolute items-center bg-white rounded-full shadow-2xl p-2 m-4">
      <a href="https://www.pladema.net/" className="cursor-pointer">
        <img src={plademaimglogo} className="h-10" alt="plademalogo" />
      </a>
      <NavLink to="/" className="">
        Home
      </NavLink>
      <NavLink to="/contacto" className="">
        Contacto
      </NavLink>
      <NavLink to="/blog" className="">
        Blogs
      </NavLink>
      <NavLink to="/login" className="">
        Iniciar sesión
      </NavLink>
    </div>
  );
};

export default NavBar;
