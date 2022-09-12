import React from "react";
import {Outlet} from "react-router-dom";
import Sidebar from "./components/sidebar";

const Header = () => {
  return (
    <>
      <Sidebar />
      <Outlet />
    </>
  );
};

export default Header;