import React, { FC, useState } from "react";
import Header from "./Header";
import SideBar from "./SideBar";
import { useNavigate, useLocation } from "react-router-dom";
import { useCookies } from "react-cookie";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [cookies, setCookie, removeCookie] = useCookies(["username", "id"]);
  const [isActive, setIsActive] = useState(false);

  const handledashboard = () => {
    navigate(`/Dashboard/${cookies.username}`, {
      state: {
        name: "Dashboard",
      },
    });
  };
  const handleMentee = () => {
    navigate(`/Menteelist/${cookies.username}`, {
      state: {
        name: "Mentee List",
      },
    });
  };
  const handleUser = () => {
    navigate(`/Userlist/${cookies.username}`, {
      state: {
        name: "User List",
      },
    });
  };
  const handleClass = () => {
    navigate(`/Classlist/${cookies.username}`, {
      state: {
        name: "Class List",
      },
    });
  };

  const handleLogout = () => {
    removeCookie("username", { path: "/" });
    removeCookie("id", { path: "/" });
    navigate("/");
  };

  const openSideBar = () => {
    setIsActive(true);
  };

  const closeSideBar = () => {
    setIsActive(false);
  };

  return (
    <>
      <div className="flex">
        <div>
          <SideBar
            handledashboard={() => handledashboard()}
            handleMentee={() => handleMentee()}
            handleUser={() => handleUser()}
            handleClass={() => handleClass()}
            closeSideBar={() => closeSideBar()}
            handleLogout={() => handleLogout()}
            isActive={isActive}
          />
        </div>
        <div className={`${screen.width > 885 ? 'ml-[200px]' : '' }  w-full`}>
          <Header pageName={location?.state?.name ? location?.state?.name : "Dashboard"} openSideBar={() => openSideBar()} />
          {children}
        </div>
      </div>
    </>
  );
};

export default Layout;
