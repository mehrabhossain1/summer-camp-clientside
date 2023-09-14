import { useState } from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSignup = () => {
    // Implement your signup logic here
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Password:", password);
    console.log("Confirm Password:", confirmPassword);
  };

  return (
    <div className='bg-gray-100 min-h-screen flex items-center justify-center'>
      <div className='bg-white p-8 rounded shadow-md w-96'>
        <h2 className='text-2xl font-bold mb-4'>Sign Up</h2>
        <div className='mb-4'>
          <label className='block text-gray-600'>Name</label>
          <input
            type='text'
            className='w-full border border-gray-300 rounded px-3 py-2 focus:outline-none'
            placeholder='Enter your name'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
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
            type='password'
            className='w-full border border-gray-300 rounded px-3 py-2 focus:outline-none pr-10'
            placeholder='Enter your password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className='mb-4 relative'>
          <label className='block text-gray-600'>Confirm Password</label>
          <input
            type='password'
            className='w-full border border-gray-300 rounded px-3 py-2 focus:outline-none pr-10'
            placeholder='Confirm your password'
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        <button
          className='bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded w-full'
          onClick={handleSignup}
        >
          Sign Up
        </button>
        <div className='mt-4'>
          <Link to='/login' className='text-blue-500 hover:underline'>
            Already have an account? Log in here
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
