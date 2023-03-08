import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import Header from "../components/Header";
import Layout from "../components/Layout";
import SideBar from "../components/SideBar";
import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import MenteeList from "../pages/MenteeList";
import UserList from "../pages/UserList";
import ClassList from "../pages/ClassList";
import Login from "../pages/Login";
import { useCookies } from "react-cookie";
import { useLocation } from "react-router-dom";
import AddMentee from "../pages/AddMentee";

const App = () => {
  const [cookies, setCookie] = useCookies<any>(["username"]);
  const [dataUser, setDataUser] = useState<any>("");
  useEffect(() => {
    setDataUser(cookies.username);
  }, []);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path={`/Dashboard/${dataUser}`} element={<Dashboard />} />
          <Route path={`/Menteelist/${dataUser}`} element={<MenteeList />} />
          <Route path={`/AddMentee/`} element={<AddMentee />} />
          <Route path={`/Userlist/${dataUser}`} element={<UserList />} />
          <Route path={`/Classlist/${dataUser}`} element={<ClassList />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
