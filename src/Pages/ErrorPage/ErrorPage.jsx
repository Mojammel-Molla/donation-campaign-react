import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <div className=" flex text-5xl text-center justify-center h-screen">
      <div>
        <h1 className="text-5xl text-center">Oops</h1>
      </div>
      <Link>
        <button className="">Go back to home</button>
      </Link>
    </div>
  );
};

export default ErrorPage;
