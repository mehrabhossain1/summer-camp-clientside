const Footer = () => {
  return (
    <footer className='bg-blue-500 text-white p-4 absolute bottom-0 w-full'>
      <div className='container mx-auto'>
        <div className='flex flex-col md:flex-row justify-between items-center'>
          {/* Left Side */}
          <div className='text-center md:text-left'>
            <p>&copy; {new Date().getFullYear()} My Summer Camp</p>
            <p>Contact us at: contact@mysummercamp.com</p>
            <p>123 Main Street, City, Country</p>
          </div>

          {/* Right Side */}
          <div className='mt-4 md:mt-0'>
            <ul className='flex space-x-4'>
              <li>
                <a
                  href='#'
                  className='text-white hover:text-blue-300 transition duration-300'
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href='#'
                  className='text-white hover:text-blue-300 transition duration-300'
                >
                  Terms of Service
                </a>
              </li>
              <li>
                <a
                  href='#'
                  className='text-white hover:text-blue-300 transition duration-300'
                >
                  FAQ
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
