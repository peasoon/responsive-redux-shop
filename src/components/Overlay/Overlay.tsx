import * as React from "react";

interface IOverlayProps {}

const Overlay: React.FunctionComponent<IOverlayProps> = (props) => {
  return (
    <div className="global-overlay fixed top-0 right-0 left-0 bottom-0 bg-black opacity-50"></div>
  );
};

export default Overlay;
