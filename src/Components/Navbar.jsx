import { Link, NavLink } from "react-router-dom";
import logo from '../assets/discount_pro_logo.png'
import { FaHome } from "react-icons/fa";
import { BsFillGrid1X2Fill, BsFillPersonLinesFill } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";


const Navbar = () => {
  const navbarLinks = (
    <>
      <li>
        <NavLink to="/" className={({isActive})=> isActive? 'bg-blue-400 text-white' : ''}>
          <FaHome /> Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/brands" className={({isActive})=> isActive? 'bg-blue-400 text-white' : ''}>
          <BsFillGrid1X2Fill />
          Brands
        </NavLink>
      </li>
      <li>
        <NavLink to="/profile" className={({isActive})=> isActive? 'bg-blue-400 text-white' : ''}>
          <CgProfile />
          My-Profile
        </NavLink>
      </li>
      <li>
        <NavLink to="/about" className={({isActive})=> isActive? 'bg-blue-400 text-white' : ''}>
          <BsFillPersonLinesFill />
          About-Dev
        </NavLink>
      </li>
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
        <Link to="/" className=" btn btn-ghost text-xl italic" >
          DISCOUNT PRO
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navbarLinks}</ul>
      </div>
      <div className="navbar-end ">
        <div className="flex justify-center items-center gap-3">
          <a className="btn text-[#DFF2EB] bg-blue-400 border-none">Log In</a>
          <a className="btn text-[#DFF2EB] bg-blue-400 border-none">Register</a>
        </div>
      </div>
    </div></>
  );
};

export default Navbar;
