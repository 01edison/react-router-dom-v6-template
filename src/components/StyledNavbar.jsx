import React from "react";
import { NavLink } from "react-router-dom";

function StyledNavbar() {
  return (
    <>
      <nav className="navbar">
        <NavLink
          to="/"
          className={({ isActive }) => {
            return isActive ? "active" : "link";
          }}
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) => {
            return isActive ? "active" : "link";
          }}
        >
          About
        </NavLink>
        <NavLink
          to="/products"
          className={({ isActive }) => {
            return isActive ? "active" : "link";
          }}
        >
          Products
        </NavLink>
        <NavLink
          to="/login"
          className={({ isActive }) => {
            return isActive ? "active" : "link";
          }}
        >
          Login
        </NavLink>
      </nav>
    </>
  );
}

export default StyledNavbar;
