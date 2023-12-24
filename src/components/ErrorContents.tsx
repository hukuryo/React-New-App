// errorContents.tsx

import React from 'react';

const ErrorContents = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-red-500">Error</h1>
        <p className="mt-4 text-gray-600">Oops! Something went wrong.</p>
        <p className="text-gray-600">Please try again later.</p>
      </div>
    </div>
  );
};

export default ErrorContents;
