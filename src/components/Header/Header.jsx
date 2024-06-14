import React, { useState, useEffect } from 'react';
import Logo from '../../assets/Logo (2).png'; 
import { NavbarLinks } from "../../Data/navbar-links.js";
import ProfileDropdown from "../core/ProfileDropdown.jsx";
import { AiOutlineMenu } from "react-icons/ai";
import { useSelector } from "react-redux";
import { Link, matchPath, useLocation } from "react-router-dom";

function Header() {
  const { token } = useSelector((state) => state.auth);
  const { user } = useSelector((state) => state.profile);
  const location = useLocation();
  const [scrollY, setScrollY] = useState(0);

  const matchRoute = (route) => {
    return matchPath({ path: route }, location.pathname);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`flex h-14 items-center justify-center border-b border-richblack-700 transition-all duration-300 ${scrollY > 0 ? 'bg-opacity-90 backdrop-blur-lg' : 'bg-transparent'}`}>
      <div className="flex px-20 items-center justify-between fixed w-full overflow-x-auto z-30 bg-white bg-opacity-70 backdrop-blur-lg transition-all duration-300">
        {/* Logo */}
        <Link to="/">
          <img src={Logo} className="mr-3 lg:h-14 h-12" loading='lazy' alt="Logo" />
        </Link>
        {/* Navigation links */}
        <nav className="hidden md:block">
          <ul className="flex gap-x-6 text-richblack-25 text-lg font-semibold">
            {NavbarLinks.map((link, index) => (
              <li key={index}> 
                <Link to={link?.path}>
                  <p className={`${matchRoute(link?.path) ? "text-blue-900" : "text-blue-700"}`}>
                    {link.title}
                  </p>
                </Link>             
              </li>
            ))}
          </ul>
        </nav>
        {/* Login / Signup / Dashboard */}
        <div className="hidden items-center gap-x-4 text-blue-900 text-lg font-semibold md:flex">
          {token == null && (
            <Link to="/login">
              <button className="  hover:bg-gray-50 focus:ring-4  focus:ring-gray-300 font-medium rounded-lg  px-4 lg:px-5 py-2 lg:py-2.5 mr-2  focus:outline-none ">
                Log in 
              </button>
            </Link>
          )}
          {token == null && (
            <Link to="/signup">
              <button className=" hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none ">
                Get started
              </button>
            </Link>
          )}
          {token !== null && <ProfileDropdown />}
        </div>
        <button className="mr-4 md:hidden">
          <AiOutlineMenu fontSize={24} fill="#AFB2BF" />
        </button>
      </div>
    </div>
  );
};

export default Header;
