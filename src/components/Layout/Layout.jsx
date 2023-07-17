import React from "react";
import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import Header from "../Header/Header";

const Layout = () => {
  return (
    <>
      <Header />
      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};

export default Layout;
