import React from "react";
import { Outlet } from "react-router-dom";

const HomeLayout = () => {
  return (
    //This is for demostration porpuses
    <div>
      <h1>Home Layout</h1>
      <Outlet />
    </div>
  );
};

export default HomeLayout;
