import React from "react";
import { Link } from "react-router-dom";

import logo from "../assets/logo.png";

const SideBar = () => {
  return (
    <div className="h-screen w-[200px] bg-[#19345e]">
      <div className="flex justify-center">
        <img src={logo} className="my-5" alt="logo" width={150} />
      </div>
      <div className="px-7">
        <ul className="text-[20px] text-white leading-loose">
          <li>
            <Link to="/">Dashboard</Link>
          </li>
          <li>
            <Link to="/mentee">Mentee</Link>
          </li>
          <li>
            <div className="h-[1px] bg-white my-5"></div>
          </li>
          <li>
            <Link to="/user">User</Link>
          </li>
          <li>
            <Link to="/class">Class</Link>
          </li>
          <li>Logout</li>
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
