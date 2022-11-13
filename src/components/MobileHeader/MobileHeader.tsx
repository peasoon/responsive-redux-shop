import * as React from "react";
import Overlay from "../Overlay/Overlay";
import { ReactComponent as Burger } from "./../../assets/burger.svg";

interface IMobileHeaderProps {
  setIsSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
	isSidebarOpen: boolean;
}

const MobileHeader: React.FunctionComponent<IMobileHeaderProps> = ({
  setIsSidebarOpen, isSidebarOpen
}) => {
  const [isOverlay, setIsOverlay] = React.useState(false);
  return (
    <div className="mobile-header relative">
      {isSidebarOpen && <Overlay />}
      <h1 className="text-center">Super-po(o)per shop!!!</h1>
      <button
        className="z-[900] absolute block top-0 right-0 w-[32px] h-[32px]"
        onClick={() => {
          setIsOverlay((prev) => !prev);
          setIsSidebarOpen((prev) => !prev);
        }}
      >
        <Burger/>
      </button>
    </div>
  );
};

export default MobileHeader;
