import { Controller, useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const SignUp = () => {
  const { control, handleSubmit } = useForm();

  const onSubmit = (data) => {
    // Handle form submission here
    console.log(data);
  };

  return (
    <div className='bg-gray-100 min-h-screen flex items-center justify-center'>
      <div className='bg-white p-8 rounded shadow-md w-96'>
        <h2 className='text-2xl font-bold mb-4'>Sign Up</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className='mb-4'>
            <label className='block text-gray-600'>Name</label>
            <Controller
              name='name'
              control={control}
              defaultValue=''
              render={({ field }) => (
                <input
                  {...field}
                  type='text'
                  className='w-full border border-gray-300 rounded px-3 py-2 focus:outline-none'
                  placeholder='Enter your name'
                />
              )}
            />
          </div>
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
                <input
                  {...field}
                  type='password'
                  className='w-full border border-gray-300 rounded px-3 py-2 focus:outline-none pr-10'
                  placeholder='Enter your password'
                />
              )}
            />
          </div>
          <div className='mb-4 relative'>
            <label className='block text-gray-600'>Confirm Password</label>
            <Controller
              name='confirmPassword'
              control={control}
              defaultValue=''
              render={({ field }) => (
                <input
                  {...field}
                  type='password'
                  className='w-full border border-gray-300 rounded px-3 py-2 focus:outline-none pr-10'
                  placeholder='Confirm your password'
                />
              )}
            />
          </div>
          <button
            className='bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded w-full'
            type='submit'
          >
            Sign Up
          </button>
        </form>
        <div className='mt-4'>
          <Link to='/login' className='text-blue-500 hover:underline'>
            Already have an account? Log in here
          </Link>
        </div>
        {/* Add a "Login with Google" button here */}
        <button
          className='bg-red-500 hover:bg-red-600 text-white font-semibold px-4 py-2 rounded mt-4 w-full'
          // onClick={handleLoginWithGoogle} // Replace with actual Google login function
        >
          Login with Google
        </button>
      </div>
    </div>
  );
};

export default SignUp;
