const ErrorPage = () => {
  return (
    <div className='min-h-screen flex items-center justify-center'>
      <div className='bg-white p-8 rounded-lg shadow-md w-full sm:w-2/3 md:w-1/2 lg:w-1/3'>
        <h1 className='text-3xl font-semibold text-red-500 mb-4'>
          Oops! Something Went Wrong
        </h1>
        <p className='text-gray-600'>An error occurred.</p>
      </div>
    </div>
  );
};

export default ErrorPage;
