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
  const [cookies, setCookie] = useCookies<any>(['email']);
  const [ cookieEmail, setCookieEmail ] = useState<any>('')
  useEffect(() => {
    setCookieEmail(cookies.Email)
  },[])

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path={/Dashboard/${cookies.Email}} element={<Dashboard />} />
      </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;