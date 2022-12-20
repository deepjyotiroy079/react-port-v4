import React, { useState } from "react";
import { Moon, User, Briefcase, Tool, Mail, Home } from "react-feather";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const size = 22;
  const activeLink = " text-violet-400";
  const normalLink = "";
  // const [isNavOpen, setIsNavOpen] = useState(false);
  // const [darkMode, setDarkMode] = useState(false);

  return (
    <nav className="relative container mx-auto">
      <div className="flex items-center justify-between">
        <div className="flex space-x-4">
          {/* <a href="" className="hover:text-violet-400">
            <User size={size} />
          </a> */}
          <NavLink to="/" className={({ isActive }) => (isActive ? activeLink : normalLink)}>
            <Home size={size} />
          </NavLink>
          <NavLink to="/about" className={({ isActive }) => (isActive ? activeLink : normalLink)}>
            <User size={size} />
          </NavLink>
          <NavLink to="/experience" className={({ isActive }) => (isActive ? activeLink : normalLink)}>
            <Briefcase size={size} />
          </NavLink>
          {/* <NavLink to="/">
            <Tool size={size} />
          </NavLink>
          <NavLink to="/">
            <Mail size={size} />
          </NavLink> */}
        </div>
        <div>
          <Moon size={size} className={({ isActive }) => (isActive ? activeLink : normalLink)}/>
        </div>
        {/* Hamburger icon */}
      </div>
    </nav>
  );
};

export default Navbar;
