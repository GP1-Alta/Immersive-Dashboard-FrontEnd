import { useState } from "react";
import reactLogo from "./assets/react.svg";
import Header from "../components/Header";
import Layout from "../components/Layout";
import SideBar from "../components/SideBar";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import MenteeList from "../pages/MenteeList";
import UserList from "../pages/UserList";
import ClassList from "../pages/ClassList";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
  },
  {
    path: "/mentee",
    element: <MenteeList />,
  },
  {
    path: "/user",
    element: <UserList />,
  },
  {
    path: "/class",
    element: <ClassList />,
  },
]);

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
