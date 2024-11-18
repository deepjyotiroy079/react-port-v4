import React from "react";
import { User, Briefcase, Home, Settings } from "react-feather";
import { NavLink } from "react-router-dom";
import Toggle from "../Toggle/Toggle";

const Navbar = () => {
  const size = 22;
  const activeLink = "font-semibold text-violet-400";
  const normalLink = "font-semibold";
  // const normalLink = "font-normal";

  return (
    <nav className="relative container mx-auto">
      <div className="md:hidden flex items-center justify-between">
        <div className="flex space-x-6 ">
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? activeLink : normalLink)}
          >
            <Home size={size} />
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? activeLink : normalLink)}
          >
            <User size={size} />
          </NavLink>
          <NavLink
            to="/experience"
            className={({ isActive }) => (isActive ? activeLink : normalLink)}
          >
            <Briefcase size={size} />
          </NavLink>
          <NavLink
            to="/projects"
            className={({ isActive }) => (isActive ? activeLink : normalLink)}
          >
            <Settings size={size} />
          </NavLink>
        </div>
        <Toggle />
      </div>
      <div className="hidden md:flex items-center justify-between">
        <div className="flex space-x-6">
          {/* <a href="" className="hover:text-violet-400">
            <User size={size} />
          </a> */}
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? activeLink : normalLink)}
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? activeLink : normalLink)}
          >
            About
          </NavLink>
          <NavLink
            to="/experience"
            className={({ isActive }) => (isActive ? activeLink : normalLink)}
          >
            Experience
          </NavLink>
          <NavLink
            to="/projects"
            className={({ isActive }) => (isActive ? activeLink : normalLink)}
          >
            Projects
          </NavLink>
        </div>
        <Toggle />
      </div>
    </nav>
  );
};

export default Navbar;
