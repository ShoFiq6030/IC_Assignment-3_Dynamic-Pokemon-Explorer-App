import React from "react";
import logo from "../../assets/img/International_Pokémon_logo.png";
import { Link, NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="flex justify-between items-center p-4 bg- text-white bg-gradient-to-r from-slate-900 to-slate-700">
      <Link to="/">
        <img src={logo} alt="logo" className="w-32" />
      </Link>

      <div className="flex justify-center space-x-5 md:space-x-20 pr-5">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `${isActive ? "active-link" : ""} text-xl hoverLink`
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/favorites"
          className={({ isActive }) =>
            `${isActive ? "active-link" : ""} text-xl hoverLink`
          }
        >
          Favorites
        </NavLink>
      </div>
    </header>
  );
}

export default Header;
