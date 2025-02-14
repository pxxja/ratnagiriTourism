import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";


const Navbar = () => {
  // const logout=Logout();
  // const navigate=useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  // const location = useLocation(); // to get the current location

   const handleLogout = async () => {
     await Logout();
     navigate("/login");
   };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="sticky top-0 z-50 bg-gray-900 font-serif">
      <nav className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* Mobile menu button */}
            <button
              type="button"
              onClick={toggleMenu}
              className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded={menuOpen ? "true" : "false"} // Fix accessibility
            >
              <span className="sr-only">Open main menu</span>
              {/* Icon when menu is closed */}
              <svg
                className={`block h-6 w-6 ${menuOpen ? "hidden" : ""}`}
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
              {/* Icon when menu is open */}
              <svg
                className={`h-6 w-6 ${menuOpen ? "" : "hidden"}`}
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-between">
            <div className="flex flex-shrink-0 items-baseline text-white">
              {/* <span className="text-orange-600 text-4xl">R</span> */}
              <span className="text-2xl first-letter:text-orange-500 first-letter:text-4xl">
                Ratnagiri Tourism
              </span>
            </div>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                {/* Use `Link` instead of `a` for internal routing */}
                <Link
                  to="/home"
                  className="rounded-md px-3 py-2 text-sm font-medium text-gray-300  hover:text-white"
                >
                  Home
                </Link>
                <Link
                  to="/tehsils"
                  className="rounded-md px-3 py-2 text-sm font-medium text-gray-300  hover:text-white"
                >
                  Tehsils
                </Link>
                <Link
                  to="/about"
                  className="rounded-md px-3 py-2 text-sm font-medium text-gray-300  hover:text-white"
                >
                  About Us
                </Link>
                <Link
                  to="/contact"
                  className="rounded-md px-3 py-2 text-sm font-medium text-gray-300  hover:text-white"
                >
                  Contact Us
                </Link>
                <Link
                  to="/review"
                  className="rounded-md px-3 py-2 text-sm font-medium text-gray-300  hover:text-white"
                >
                  Review
                </Link>
                <Link
                  to="/bookHotels"
                  className="block rounded-md bg-orange-600 px-3 py-2 text-base font-medium text-white hover:bg-orange-700"
                >
                  Plan your stay
                </Link>
                <Link
                  to="/logout"
                  className="block rounded-md bg-orange-600 px-3 py-2 text-base font-medium text-white hover:bg-orange-700"
                >
                  Log Out
                </Link>
                <Link
                  to="/register"
                  className="ml-4 rounded-md bg-orange-600 px-3 py-2 text-sm font-medium text-white hover:bg-orange-700"
                >
                  Sign In
                </Link>
                {/* <Link
                  to="/logout"
                  className="ml-4 rounded-md bg-orange-600 px-3 py-2 text-sm font-medium text-white hover:bg-orange-700"
                >
                  Log Out
                </Link> */}
                <Link onClick={handleLogout} className="ml-4 rounded-md bg-orange-600 px-3 py-2 text-sm font-medium text-white hover:bg-orange-700">
                   logout
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
      {/* Mobile menu, show/hide based on menu state */}
      <div className={`sm:hidden ${menuOpen ? "" : "hidden"}`} id="mobile-menu">
        <div className="space-y-1 px-2 pb-3 pt-2">
          <Link
            to="/home"
            className="block rounded-md px-3 py-2 text-base font-medium text-white hover:text-white"
          >
            Home
          </Link>
          <Link
            to="/tehsils"
            className="block rounded-md px-3 py-2 text-base font-medium text-gray-300  hover:text-white"
          >
            Tehsils
          </Link>
          <Link
            to="/about"
            className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:text-white"
          >
            About Us
          </Link>
          <Link
                  to="/contact"
                  className="rounded-md px-3 py-2 text-sm font-medium text-gray-300  hover:text-white"
                >
                  Contact
                </Link>
          <Link
            to="/review"
            className="block rounded-md px-3 py-2 text-base font-medium text-gray-300  hover:text-white"
          >
            Review
          </Link>
          <Link
            to="/bookHotels"
            className="block rounded-md bg-orange-600 px-3 py-2 text-base font-medium text-white hover:bg-orange-700"
          >
            Plan your stay
          </Link>
          {/* <Link
                  to="/logout"
                  className="block rounded-md bg-orange-600 px-3 py-2 text-base font-medium text-white hover:bg-orange-700"
                >
                  Log Out
                </Link> */}
          {/* <Link
            to="/register"
            className="block rounded-md bg-orange-600 px-3 py-2 text-base font-medium text-white hover:bg-orange-700"
          >
            Sign In
          </Link> */}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
