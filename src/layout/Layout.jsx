import Header from "./header";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <Header />
      <main className="  mt-20 border border-red-500 ">
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
