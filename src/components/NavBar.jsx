import { NavLink } from "react-router-dom";
import plademaimglogo from "../assets/pladema.png";
import { useState, useEffect } from "react";
import { useAuth } from "../context/AuthProvider";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const { isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate("/home");
  };

  return (
    <>
      <div className="container z-10 lg:mx-[10%] xl:mx-[20%] lg:w-[80%] xl:w-[60%] hidden  lg:flex justify-between fixed items-center bg-white rounded-full shadow-2xl p-2 m-4">
        <a
          href="https://www.pladema.net/"
          target="_blank"
          className="cursor-pointer"
        >
          <img src={plademaimglogo} className="h-10" alt="plademalogo" />
        </a>
        <div>
          <NavLink to="/" className="px-5">
            Home
          </NavLink>
          <NavLink to="/contacto" className=" px-5">
            Contacto
          </NavLink>
          <NavLink to="/blog" className=" px-5">
            Blogs
          </NavLink>
          {isAuthenticated && (
            <NavLink to="/admin" className="px-5">
              Admin
            </NavLink>
          )}
        </div>
        {!isAuthenticated && (
          <NavLink to="/login" className="px-5">
            Iniciar sesión
          </NavLink>
        )}
        {isAuthenticated && (
          <button onClick={handleLogout} className="px-5">
            Log out
          </button>
        )}
      </div>
      <div className="lg:hidden flex h-16 fixed w-full items-center justify-between nav-bg z-10">
        <a
          href="https://www.pladema.net/"
          target="_blank"
          className="cursor-pointer"
        >
          <img src={plademaimglogo} className="h-10" alt="plademalogo" />
        </a>
        <button
          className="flex flex-col  justify-center  items-center w-10 h-10 space-y-1 rounded focus:outline-none"
          onClick={() => setShowMenu(!showMenu)}
          aria-label="Toggle Menu"
        >
          <div
            className={`h-1 w-8 bg-white rounded transform transition-transform 
          ${showMenu ? "rotate-45 translate-y-2" : ""}`}
          />
          <div
            className={`h-1 w-8 bg-white rounded transition-opacity ${
              showMenu ? "opacity-0" : ""
            }`}
          />
          <div
            className={`h-1 w-8 bg-white rounded transform transition-transform ${
              showMenu ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
        {showMenu ? (
          <div
            className={`flex flex-col text-white  items-end gap-10 nav-bg-menu absolute left-[100%] top-16 w-[200px] h-[100vh] shadow-md ${
              showMenu ? "translate-x-[-100%]" : ""
            }`}
          >
            <NavLink
              to="/"
              className="p-4 underline text-2xl hover:text-gray-800"
            >
              Home
            </NavLink>
            <NavLink
              to="/contacto"
              className="p-4 text-2xl underline hover:text-gray-800"
            >
              Contacto
            </NavLink>
            <NavLink
              to="/blog"
              className="p-4 underline text-2xl hover:text-gray-800"
            >
              Blogs
            </NavLink>
            {isAuthenticated && (
              <NavLink
                to="/admin"
                className="p-4 underline text-2xl hover:text-gray-800"
              >
                Admin
              </NavLink>
            )}
            {!isAuthenticated && (
              <NavLink
                to="/login"
                className="p-4 text-2xl underline hover:text-gray-800"
              >
                Iniciar sesión
              </NavLink>
            )}
            {isAuthenticated && (
              <button
                onClick={handleLogout}
                className="p-4 text-2xl underline hover:text-gray-800"
              >
                Log out
              </button>
            )}
          </div>
        ) : null}
      </div>
      {showMenu ? (
        <div className="bg-black w-full h-full fixed opacity-60 lg:hidden"></div>
      ) : null}
    </>
  );
};

export default NavBar;
