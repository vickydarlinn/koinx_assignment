import Header from "./header";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <Header />
      <main className="px-12">
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
