import React from "react";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <div className="relative sm:-8 p-4 bg-[#13131a] min-h-screen flex flex-row">
      <div className="sm:flex hidden mr-10 relative">Sidebar</div>
      <h1>CrowdFunding</h1>
      <p className="font-xl font-bold">Hello Blockchain</p>
      <div className="flex-1 max-sw:w-full max-w-[1280px] mx-auto sm:pr-5">
        Navbar
      </div>
    </div>
  );
};

export default App;
