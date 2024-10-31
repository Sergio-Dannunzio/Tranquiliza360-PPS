import NavBar from "../components/NavBar";
import { Outlet } from "react-router-dom";
const MainLayout = () => {
  return (
    <>
      <nav>
        <NavBar />
      </nav>
      <main className="container flex items-center justify-center">
        <Outlet></Outlet>
      </main>
      <footer className="container text-center">Footer</footer>
    </>
  );
};

export default MainLayout;
