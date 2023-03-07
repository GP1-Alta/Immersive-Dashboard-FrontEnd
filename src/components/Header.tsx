import React, { FC, useState, useEffect } from "react";
import { useCookies } from 'react-cookie';

import { GoThreeBars } from "react-icons/go";

const Header = () => {
  const [cookies, setCookie] = useCookies<any>(['username']);
  const [ username, setUsername ] = useState<any>('')
  useEffect(() => {
    setUsername(cookies.username)
  },[])

  return (
    <div>
      <div className="flex justify-between items-center w-full h-[60px] bg-[#F5F5F5] text-xl px-5">
        <a href="">
          <GoThreeBars />
        </a>
        <h1 className="">Dashboard</h1>
        <p className="">Hello, {username}</p>
      </div>
    </div>
  );
};

export default Header;
