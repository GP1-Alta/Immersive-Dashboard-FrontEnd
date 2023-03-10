import React, { FC, useState, useEffect } from "react";
import { useCookies } from 'react-cookie';

import { GoThreeBars } from "react-icons/go";

interface myPrps {
  pageName: string
  openSideBar: React.MouseEventHandler
}

const Header: FC<myPrps> = ({pageName, openSideBar}) => {

  const [cookies, setCookie] = useCookies<any>(['username']);
  const [ username, setUsername ] = useState<any>('')
  useEffect(() => {
    setUsername(cookies.username)
  },[])

  return (
      <div className={`${screen.width > 767 ? '' : 'fixed'} z-50 flex justify-between items-center w-full h-[60px] bg-[#F5F5F5] text-xl px-5  `}>
        {screen.width < 885 ? <GoThreeBars onClick={openSideBar} /> : ''}
        <h1 className="text-center">{pageName}</h1>
        <p className="text-right">Hello, {username}</p>
      </div>
  );
};

export default Header;
