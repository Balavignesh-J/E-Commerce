import React from "react";
import Header from "./Components/Header";
import { Outlet } from "react-router-dom";
import Footer from "./Components/Footer";

const Rootlayout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Rootlayout;
