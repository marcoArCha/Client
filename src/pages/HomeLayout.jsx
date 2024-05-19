import React from "react";
import { Outlet } from "react-router-dom";

const HomeLayout = () => {
  return (
    //This is for demostration porpuses
    <div>
      <Outlet />
    </div>
  );
};

export default HomeLayout;
