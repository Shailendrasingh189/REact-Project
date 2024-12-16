import React, { useState, useEffect, useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import noteContext from "../context/notes/noteContext";

const Navbar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const { isAuthenticated,logout } = useContext(noteContext);

  // Check auth state on component mount

  const handleLogout = () => {
    logout(); // Clear the token
  };

  const linkStyle = (path) =>
    location.pathname === path ? "text-blue-500" : "navbar-text-style";

  return (
    <header
      className={`fixed flex sm:justify-start sm:flex-nowrap w-full bg-white text-sm py-3 dark:bg-neutral-800 top-0 h-16 text-white items-center justify-center z-50`}
    >
      <nav className="max-w-[85rem] w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between">
        <div className="flex items-center justify-between">
          <Link
            className="flex-none text-xl font-semibold dark:text-white focus:outline-none focus:opacity-80"
            to="/"
            aria-label="Brand"
          >
            INotebook
          </Link>
          <div className="sm:hidden">
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="relative size-7 flex justify-center items-center gap-x-2 rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none dark:bg-transparent dark:border-neutral-700 dark:text-white dark:hover:bg-white/10"
              aria-expanded={isOpen}
              aria-controls="navbar-menu"
            >
              {isOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="size-4"
                >
                  <path d="M18 6 6 18" />
                  <path d="m6 6 12 12" />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="size-4"
                >
                  <line x1="3" x2="21" y1="6" y2="6" />
                  <line x1="3" x2="21" y1="12" y2="12" />
                  <line x1="3" x2="21" y1="18" y2="18" />
                </svg>
              )}
              <span className="sr-only">Toggle navigation</span>
            </button>
          </div>
        </div>

        <div
          id="navbar-menu"
          className={`${
            isOpen ? "block" : "hidden"
          } transition-all duration-300 sm:block`}
        >
          <div className="flex flex-col gap-5 mt-5 sm:flex-row sm:items-center sm:justify-end sm:mt-0">
            <Link className={linkStyle("/")} to="/">
              Home
            </Link>
            <Link className={linkStyle("/about")} to="/about">
              About
            </Link>
            <Link className={linkStyle("/work")} to="/work">
              Work
            </Link>
            <Link className={linkStyle("/blog")} to="/blog">
              Blog
            </Link>

            {isAuthenticated ? (
              <button
                onClick={handleLogout}
                className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
              >
                Logout
              </button>
            ) : (
              <>
                <Link
                  to="/login"
                  className={`px-4 py-2 ${
                    location.pathname === "/login"
                      ? "bg-blue-500 text-white"
                      : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                  } rounded`}
                >
                  Login
                </Link>
                <Link
                  to="/signup"
                  className={`px-4 py-2 ${
                    location.pathname === "/signup"
                      ? "bg-blue-500 text-white"
                      : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                  } rounded`}
                >
                  Sign Up
                </Link>
              </>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
