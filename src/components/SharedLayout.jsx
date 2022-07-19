import React from "react";
import { Outlet } from "react-router-dom";
// import Navbar from "./Navbar";
import StyledNavbar from "./StyledNavbar";

function SharedLayout() {
  return (
    <div>
      <section className="section">
        <StyledNavbar />
        <Outlet />{/* << represents the nested routes. Everything outside this outlet element will be visible on all nested routes*/}
      </section>
    </div>
  );
}

export default SharedLayout;
