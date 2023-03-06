import React, { FC } from "react";
import Header from "./Header";
import SideBar from "./SideBar";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <div className="flex">
        <div>
          <SideBar />
        </div>
        <div className="w-full">
          <Header />
          {children}
        </div>
      </div>
    </>
  );
};

export default Layout;
