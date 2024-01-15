'use client';
import React from 'react';

function Error({ error, reset }: any) {
  React.useEffect(() => {
    console.log(reset);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [error]);

  return (
    <div className="text-center mt-10">
      <h1>Something went wrong. Please try again later.</h1>
      <button className="hover:text-amber-600" onClick={() => reset()}>
        Try Again
      </button>
    </div>
  );
}

export default Error;
