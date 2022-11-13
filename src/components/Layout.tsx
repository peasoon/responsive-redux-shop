import * as React from "react";
import { NavLink, Outlet } from "react-router-dom";
import MobileHeader from "./MobileHeader/MobileHeader";
import Sidebar from "./SIdebar/Sidebar";

interface ILayoutProps {}

const Layout: React.FunctionComponent<ILayoutProps> = (props) => {
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(false);
  return (
    <div className="app-content min-h-screen relative">
      <div>
        <MobileHeader
          setIsSidebarOpen={setIsSidebarOpen}
          isSidebarOpen={isSidebarOpen}
        />
      </div>
      <div
        className={
          "fixed right-0 overflow-x-hidden h-full w-1/2 z-[700] " +
          (isSidebarOpen ? "pointer-events-auto" : "pointer-events-none")
        }
      >
        <Sidebar isSidebarOpen={isSidebarOpen}>
          <p
            onClick={() => {
              console.log("link clicked");
              setIsSidebarOpen(false);
            }}
          >
            <NavLink
              to="/shop"
              className={({ isActive }) =>
                isActive ? "text-red-600" : undefined
              }
            >
              Shop
            </NavLink>
          </p>
          <p
            onClick={() => {
              console.log("link clicked");
              setIsSidebarOpen(false);
            }}
          >
            <NavLink
              to="/cart"
              className={({ isActive }) =>
                isActive ? "text-red-600" : undefined
              }
            >
              Cart
            </NavLink>
          </p>
        </Sidebar>
      </div>
      <Outlet />
    </div>
  );
};

export default Layout;
