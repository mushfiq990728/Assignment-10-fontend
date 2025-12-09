import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);

  const handleLogout = () => {
    logout().catch((err) => console.error(err));
  };

  const navLinks = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "text-blue-600 font-semibold underline" : ""
          }
        >
          Home
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/services"
          className={({ isActive }) =>
            isActive ? "text-blue-600 font-semibold underline" : ""
          }
        >
          Services
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/add-service"
          className={({ isActive }) =>
            isActive ? "text-blue-600 font-semibold underline" : ""
          }
        >
          Add Service
        </NavLink>
      </li>

      {/* Show only if user is logged in */}
      {user && (
        <>
          <li>
            <NavLink
              to="/my-listings"
              className={({ isActive }) =>
                isActive ? "text-blue-600 font-semibold underline" : ""
              }
            >
              My Listings
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/my-orders"
              className={({ isActive }) =>
                isActive ? "text-blue-600 font-semibold underline" : ""
              }
            >
              My Orders
            </NavLink>
          </li>
        </>
      )}
    </>
  );

  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>

          <ul
            tabIndex={-1}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow"
          >
            {navLinks}
          </ul>
        </div>

        <Link to="/" className="btn btn-ghost text-xl">
          PawMart
        </Link>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navLinks}</ul>
      </div>

      <div className="navbar-end gap-3">
        {user && (
          <div className="flex items-center gap-2">
            {user.photoURL && (
              <div className="avatar">
                <div className="w-8 rounded-full">
                  <img src={user.photoURL} alt="user" />
                </div>
              </div>
            )}
            <span className="text-sm hidden md:inline">
              {user.displayName || user.email}
            </span>
          </div>
        )}

        {user ? (
          <button
            onClick={handleLogout}
            className="btn btn-outline btn-sm"
          >
            Logout
          </button>
        ) : (
          <Link to="/login" className="btn btn-primary btn-sm">
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
