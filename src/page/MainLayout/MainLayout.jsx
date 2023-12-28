import Footer from "../../components/Footer";
import Nav from "../../components/Nav";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div>
      <Nav></Nav>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
