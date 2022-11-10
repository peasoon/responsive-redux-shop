import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";

interface ISidebarProps extends React.ComponentPropsWithRef<"div"> {
  children: React.ReactNode;
  isSidebarOpen: boolean;
}

const Sidebar: React.FunctionComponent<ISidebarProps> = ({
  children,
  isSidebarOpen,
  ...props
}) => {
  const variants = {
    visible: { x: 0 },
    hidden: { x: "100%" },
  };

  return (
    <div
      className={
        "sidebar h-full " +
        (isSidebarOpen ? "pointer-events-auto" : "pointer-events-none")
      }
      {...props}
    >
      <motion.div
        initial={{ x: "100%" }}
        animate={isSidebarOpen ? "visible" : "hidden"}
        transition={{ ease: "easeOut", duration: 0.7 }}
        variants={variants}
        className="bg-slate-500 h-full px-[10px] py-[20px] text-gray-50"
      >
        {children}
      </motion.div>
    </div>
  );
};

export default Sidebar;
