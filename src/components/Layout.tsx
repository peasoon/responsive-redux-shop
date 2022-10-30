import * as React from "react";
import { Outlet } from "react-router-dom";
import MobileHeader from "./MobileHeader/MobileHeader";
import Sidebar from "./SIdebar/Sidebar";

interface ILayoutProps {}

const Layout: React.FunctionComponent<ILayoutProps> = (props) => {
	const [isSidebarOpen, setIsSidebarOpen] = React.useState(false);
  return (
    <div className="app-content min-h-screen relative">
      <div>
        <MobileHeader setIsSidebarOpen={setIsSidebarOpen}/>
      </div>
			<div className="fixed right-0 overflow-x-hidden h-full w-1/2">
				<Sidebar isSidebarOpen={isSidebarOpen}>
					<p>Item 1</p>
					<p>Item 2</p>
					<p>Item 3</p>
				</Sidebar>
			</div>
      <Outlet />
    </div>
  );
};

export default Layout;
