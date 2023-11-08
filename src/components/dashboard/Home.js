import React from "react";
import SideBar from "./SideBar";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex w-full justify-between">
      <SideBar />
      <div className="grow h-[100vh]">
        <Navbar />
        <Outlet />
      </div>
    </div>
  );
};

export default Home;