import { Link, NavLink } from "react-router-dom";

import { FaHome } from "react-icons/fa";
import { BsFillGrid1X2Fill } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";

const Navbar = () => {
  const { user, handleSignOut } = useContext(AuthContext);
  const navbarLinks = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "bg-blue-400 text-white" : ""
          }
        >
          <FaHome /> Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/brands"
          className={({ isActive }) =>
            isActive ? "bg-blue-400 text-white" : ""
          }
        >
          <BsFillGrid1X2Fill />
          Brands
        </NavLink>
      </li>
      {user && (
        <li>
          <NavLink
            to="/profile"
            className={({ isActive }) =>
              isActive ? "bg-blue-400 text-white" : ""
            }
          >
            <CgProfile />
            My-Profile
          </NavLink>
        </li>
      )}
 
    </>
  );
  return (
    <>
      <div className="navbar *:text-blue-400 ">
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
              tabIndex={0}
              className="bg-[#7AB2D3] menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {navbarLinks}
            </ul>
          </div>
          <Link to="/" className="logo btn btn-ghost text-xl italic font-black">
            DISCOUNT PRO
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navbarLinks}</ul>
        </div>
        <div className="navbar-end ">
          <div className="flex justify-center items-center gap-3">
            {user ? (
              <div className="flex flex-col-reverse md:flex-row items-center gap-3">
                <div><div className="skeleton p-4 flex items-center text-sm  h-4 w-max bg-blue-400 text-white font-semibold">{user.email || user.displayName}</div></div>
            <div className="flex gap-3">
            <div className="avatar">
                  <div className="w-14 ring-4 rounded-full">
                    <img src={user.photoURL} />
                  </div>
                </div>
                <button
                  onClick={handleSignOut}
                  className="btn text-[#DFF2EB] bg-blue-400 border-none"
                >
                  Logout
                </button>
            </div>
              </div>
            ) : (
              <>
             
                <Link
                  to="/login"
                  className="btn text-[#DFF2EB] bg-blue-400 border-none"
                >
                  Log In
                </Link>
                <Link
                  to="/register"
                  className="btn text-[#DFF2EB] bg-blue-400 border-none"
                >
                  Register
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
