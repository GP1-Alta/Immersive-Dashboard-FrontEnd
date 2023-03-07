import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import Header from "../components/Header";
import Layout from "../components/Layout";
import SideBar from "../components/SideBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import MenteeList from "../pages/MenteeList";
import UserList from "../pages/UserList";
import ClassList from "../pages/ClassList";
import Login from "../pages/Login";
import { useCookies } from 'react-cookie';
import { useLocation } from "react-router-dom";

const App = () => {
  const [cookies, setCookie] = useCookies<any>(['username']);
  const [ dataUser, setDataUser ] = useState<any>('')
  useEffect(() => {
    setDataUser(cookies.username)
  },[])

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path={`/Dashboard/${dataUser}`} element={<Dashboard />} />
      </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;