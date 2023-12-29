import Footer from "../../components/Footer";
import Nav from "../../components/Nav";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="flex flex-col justify-between h-screen">
      <div className="">
        <Nav></Nav>
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
