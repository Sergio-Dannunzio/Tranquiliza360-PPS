import NavBar from "../components/NavBar";
import { Outlet } from "react-router-dom";
const MainLayout = () => {
  return (
    <>
      <nav>
        <NavBar />
      </nav>
      <main className="flex flex-col  items-center justify-center">
        <Outlet></Outlet>
      </main>
      <footer className="text-center">Footer</footer>
    </>
  );
};

export default MainLayout;
