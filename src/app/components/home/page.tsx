'use client'
import React, { useState } from 'react';
import Display from "./display";
// type DisplayProps = {
//   message: string;
// };
const MyComponent: React.FC = () => {
  const [showDisplay, setShowDisplay] = useState(false);
  const clicked = showDisplay
  const handleClick = () => {
    setShowDisplay(() => !clicked);
  };
  const uri = "postgres://mmethhdd:OuENml3Y4wNyMcCHb69l16Cn3l2osxzh@drona.db.elephantsql.com/mmethhdd";
  
  return (
    <div>
      <h1>WELCOME TO THE HOME</h1>
      <button onClick={handleClick}>Show Display</button>
      {showDisplay && <Display URI = {uri} message="Display Component" />}
    </div>
  );
};
  
export default MyComponent;





