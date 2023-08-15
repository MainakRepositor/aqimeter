import React from 'react';
import { useRouteError, Link } from 'react-router-dom';

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <div
      id="error-page"
      className=" relative max-w-[440px] w-[100vw] min-h-[100vh] mx-auto bg-gray-100 flex flex-col justify-center "
    >
      <div className="w-[100vw] flex flex-col justify-center h-full items-center gap-5">
        <h1 className=" text-3xl">Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <p>
          <i>{error.statusText || error.message}</i>
        </p>
        <Link to="/">
          <button
            type="button"
            className="block uppercase mx-auto shadow bg-green-800 hover:bg-green-700 focus:shadow-outline focus:outline-none text-white text-xs py-3 px-10 rounded"
          >
            Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
