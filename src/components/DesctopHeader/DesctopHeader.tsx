import * as React from "react";
import { NavLink } from "react-router-dom";

interface IDeasctopHeaderProps {}

const DeasctopHeader: React.FunctionComponent<IDeasctopHeaderProps> = (
  props
) => {
  return (
    <div className="desctop-header relative">
      <h1 className="text-center">Super-po(o)per shop!!!</h1>
      <div className="links absolute top-0 right-0">
        <NavLink
          to="/shop"
          className={({ isActive }) => (isActive ? "text-red-600" : undefined)}
        >
          Shop
        </NavLink>
        <NavLink
          to="/cart"
          className={({ isActive }) => (isActive ? "text-red-600" : undefined)+ " ml-[15px]"}
        >
          Cart
        </NavLink>
      </div>
    </div>
  );
};

export default DeasctopHeader;
