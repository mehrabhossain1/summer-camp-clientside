import { NavLink } from "react-router-dom";

const NavigationBar = () => {
  return (
    <nav className='bg-blue-500 p-4'>
      <div className='container mx-auto flex justify-between items-center'>
        {/* Logo */}
        <div className='text-white text-2xl font-bold'>LanguageLoom Lodge</div>

        {/* Menu */}
        <ul className='flex space-x-4'>
          <li>
            <NavLink
              exact
              to='/'
              className='text-white hover:text-blue-300 transition duration-300'
              activeClassName='text-blue-300'
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/all-instructors'
              className='text-white hover:text-blue-300 transition duration-300'
              activeClassName='text-blue-300'
            >
              Instructors
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/all-classes'
              className='text-white hover:text-blue-300 transition duration-300'
              activeClassName='text-blue-300'
            >
              Classes
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/dashboard'
              className='text-white hover:text-blue-300 transition duration-300'
              activeClassName='text-blue-300'
            >
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/login'
              className='text-white hover:text-blue-300 transition duration-300'
              activeClassName='text-blue-300'
            >
              Login
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavigationBar;
