import React, { FC } from "react";

import { GoThreeBars } from "react-icons/go";

const Header = () => {
  return (
    <div>
      <div className="flex justify-between items-center w-full h-[60px] bg-[#F5F5F5] text-xl px-5">
        <a href="">
          <GoThreeBars />
        </a>
        <h1 className="">Dashboard</h1>
        <p className="">Hello, John Doe</p>
      </div>
    </div>
  );
};

export default Header;
