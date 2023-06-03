import React from 'react';

const Welcome: React.FC = () => {
  return (
    <div className="flex flex-col items-center" id="extension">
      <p className="text-lg mt-5">MKKY PRESENTS: </p>
      <h1 className="text-5xl font-bold">SQL Visual Interface</h1>
      <p className="text-lg mt-5">Our tool is designed for developers to visualize a database</p>
    </div>
  );
};

export default Welcome;