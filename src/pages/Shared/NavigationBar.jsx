import { NavLink, useLocation } from "react-router-dom";
import logo from "../../assets/logo.svg";
import { useEffect, useState } from "react";

const NavigationBar = () => {
  const location = useLocation();
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const isNotHomeRoute = location.pathname !== "/";

  return (
    <>
      <nav
        className={`fixed z-10 top-0 left-0 w-full px-24 transition-all ${
          isNotHomeRoute // Apply fixed background and position for non-home routes
            ? "bg-white shadow-lg text-black"
            : scrolling
            ? "bg-white shadow-lg text-black"
            : "bg-opacity-0 text-white"
        }`}
      >
        <div className='container mx-auto flex justify-between items-center'>
          {/* Logo */}
          <div className='text-black text-2xl font-bold'>
            <img className='h-20' src={logo} alt='logo' />
          </div>

          {/* Menu */}
          <ul className='flex space-x-4'>
            <li>
              <NavLink
                exact
                to='/'
                className={`hover:text-customOrange transition duration-300 ${
                  location.pathname === "/" ? "text-customOrange" : ""
                }`}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to='/all-instructors'
                className={`hover:text-customOrange transition duration-300 ${
                  location.pathname === "/all-instructors"
                    ? "text-customOrange"
                    : ""
                }`}
              >
                Instructors
              </NavLink>
            </li>
            <li>
              <NavLink
                to='/all-classes'
                className={`hover:text-customOrange transition duration-300 ${
                  location.pathname === "/all-classes"
                    ? "text-customOrange"
                    : ""
                }`}
              >
                Classes
              </NavLink>
            </li>
            <li>
              <NavLink
                to='/dashboard'
                className={`hover:text-customOrange transition duration-300 ${
                  location.pathname === "/dashboard" ? "text-customOrange" : ""
                }`}
              >
                Dashboard
              </NavLink>
            </li>
            <li>
              <NavLink
                to='/login'
                className={`hover:text-customOrange transition duration-300 ${
                  location.pathname === "/login" ? "text-customOrange" : ""
                }`}
              >
                Login
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default NavigationBar;
