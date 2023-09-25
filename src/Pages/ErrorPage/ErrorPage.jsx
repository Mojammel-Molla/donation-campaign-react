import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <div className="text-5xl text-center justify-center h-screen">
      <h1 className="text-5xl text-center">Oops</h1>
      <Link>
        <button>Go back to home</button>
      </Link>
    </div>
  );
};

export default ErrorPage;
