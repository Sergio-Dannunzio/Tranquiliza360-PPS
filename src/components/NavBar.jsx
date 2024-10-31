import { NavLink } from "react-router-dom";
import plademaimglogo from "../assets/pladema.png";
const NavBar = () => {
  return (
    <div className="container mx-auto w-1/2 flex justify-between items-center bg-white rounded-full shadow-2xl p-2 m-4">
      <div>
        <img src={plademaimglogo} className="h-10" alt="plademalogo" />
      </div>
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
        iniciar sesión
      </NavLink>
    </div>
  );
};

export default NavBar;
