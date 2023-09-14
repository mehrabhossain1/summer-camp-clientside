/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handlePasswordToggle = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = () => {
    // Implement your login logic here
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <div className='bg-gray-100 min-h-screen flex items-center justify-center'>
      <div className='bg-white p-8 rounded shadow-md w-96'>
        <h2 className='text-2xl font-bold mb-4'>Login</h2>
        <div className='mb-4'>
          <label className='block text-gray-600'>Email</label>
          <input
            type='email'
            className='w-full border border-gray-300 rounded px-3 py-2 focus:outline-none'
            placeholder='Enter your email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className='mb-4 relative'>
          <label className='block text-gray-600'>Password</label>
          <input
            type={showPassword ? "text" : "password"}
            className='w-full border border-gray-300 rounded px-3 py-2 focus:outline-none pr-10'
            placeholder='Enter your password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            className='absolute inset-y-0 right-0 px-3 py-2'
            onClick={handlePasswordToggle}
          >
            {showPassword ? (
              <i className='fas fa-eye-slash text-gray-400'></i>
            ) : (
              <i className='fas fa-eye text-gray-400'></i>
            )}
          </button>
        </div>
        <button
          className='bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded w-full'
          onClick={handleLogin}
        >
          Login
        </button>
        <div className='mt-4'>
          <Link to='/signup' className='text-blue-500 hover:underline'>
            Don't have an account? Register here
          </Link>
        </div>
        <div className='mt-4'>
          {/* Add your social login buttons here */}
          <button className='bg-red-500 hover:bg-red-600 text-white font-semibold px-4 py-2 rounded w-full'>
            Login with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
