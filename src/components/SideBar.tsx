import React,{FC } from "react";
import {IoIosCloseCircle} from 'react-icons/io'
import {BiLogOut} from 'react-icons/bi'

import logo from "../assets/logo.png";

interface myProps {
handledashboard? : React.MouseEventHandler
handleMentee? : React.MouseEventHandler
handleUser? : React.MouseEventHandler
handleClass? : React.MouseEventHandler
closeSideBar? : React.MouseEventHandler
handleLogout? : React.MouseEventHandler
isActive: boolean
}

const SideBar: FC<myProps> = (props) => {
const {handledashboard, handleMentee, handleUser, handleClass, closeSideBar, handleLogout, isActive } = props

  return (
    <div className={`h-screen w-[200px] bg-[#19345e] duration-500 ${screen.width < 885 ? 'absolute -translate-x-full z-20 ' : ''} ${isActive ? 'translate-x-0' : '' }  `}>
      {screen.width < 885 ? <IoIosCloseCircle onClick={closeSideBar} className={`ml-20 text-orange text-5xl `} /> : ''}
      <div className="flex justify-center">
        <img src={logo} className="my-5 w-24" alt="logo" width={150} />
      </div>
      <div className="px-7">
        <ul className="text-[20px] text-white leading-loose">
          <li className="cursor-pointer">
            <div onClick={handledashboard}>Dashboard</div>
          </li>
          <li className="cursor-pointer">
            <div onClick={handleMentee} >Mentee</div>
          </li>
          <li>
            <div className="h-[1px] bg-white my-5"></div>
          </li>
          <li className="cursor-pointer">
            <div onClick={handleUser} >User</div>
          </li>
          <li className="cursor-pointer">
            <div onClick={handleClass}  >Class</div>
          </li>
          <li onClick={handleLogout}  className="absolute bottom-3 text-sm flex  gap-2 items-center cursor-pointer">Logout <BiLogOut /></li>
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
