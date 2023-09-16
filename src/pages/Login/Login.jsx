/* eslint-disable react/no-unescaped-entities */

import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { Link } from "react-router-dom";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

const Login = () => {
  const { control, handleSubmit } = useForm();
  const [showPassword, setShowPassword] = useState(false);

  const onSubmit = (data) => {
    // Handle login logic here
    console.log(data);
  };

  return (
    <div className='bg-gray-100 min-h-screen flex items-center justify-center'>
      <div className='bg-white p-8 rounded shadow-md w-96'>
        <h2 className='text-2xl font-bold mb-4'>Login</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className='mb-4'>
            <label className='block text-gray-600'>Email</label>
            <Controller
              name='email'
              control={control}
              defaultValue=''
              render={({ field }) => (
                <input
                  {...field}
                  type='email'
                  className='w-full border border-gray-300 rounded px-3 py-2 focus:outline-none'
                  placeholder='Enter your email'
                />
              )}
            />
          </div>
          <div className='mb-4 relative'>
            <label className='block text-gray-600'>Password</label>
            <Controller
              name='password'
              control={control}
              defaultValue=''
              render={({ field }) => (
                <div className='relative'>
                  <input
                    {...field}
                    type={showPassword ? "text" : "password"}
                    className='w-full border border-gray-300 rounded px-3 py-2 focus:outline-none pr-10'
                    placeholder='Enter your password'
                  />
                  {showPassword ? (
                    <AiFillEyeInvisible
                      className='h-6 w-6 absolute top-1/2 right-3 transform -translate-y-1/2 cursor-pointer'
                      onClick={() => setShowPassword(false)}
                    />
                  ) : (
                    <AiFillEye
                      className='h-6 w-6 absolute top-1/2 right-3 transform -translate-y-1/2 cursor-pointer'
                      onClick={() => setShowPassword(true)}
                    />
                  )}
                </div>
              )}
            />
          </div>
          <button
            className='bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded w-full'
            type='submit'
          >
            Login
          </button>
        </form>
        <div className='mt-4'>
          <Link to='/signup' className='text-blue-500 hover:underline'>
            Don't have an account? Sign up here
          </Link>
        </div>
        <div className='mt-4'>
          {/* Add a "Login with Google" button here */}
          <button
            className='bg-red-500 hover:bg-red-600 text-white font-semibold px-4 py-2 rounded w-full'
            // onClick={handleLoginWithGoogle} // Replace with actual Google login function
          >
            Login with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
