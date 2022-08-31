import { Outlet } from "react-router-dom";
const Layout = () => {
  return (
    <div>
      <p>this is layout</p>
      <Outlet />
    </div>
  );
};

export default Layout;
