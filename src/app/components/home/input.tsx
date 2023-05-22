'use client'
import React, { useState, useRef } from 'react';
import Display from "./display";
// type DisplayProps = {
//   message: string;
// };
const MyComponent: React.FC = () => {
  const uriRef = useRef<HTMLInputElement>(null!)
  const [showDisplay, setShowDisplay] = useState(false);
  const clicked = showDisplay
  const handleClick = () => {
     console.log(uriRef.current.value)
    setShowDisplay(() => !clicked);
  };
  // const uri = "postgres://mmethhdd:OuENml3Y4wNyMcCHb69l16Cn3l2osxzh@drona.db.elephantsql.com/mmethhdd";
  
  return (
    <div>
      <h1>WELCOME TO THE HOME</h1>
      <input type="text" placeholder='URI' ref={uriRef}/>
      <button onClick={handleClick}>Show Display</button>
      {showDisplay && <Display URI = {uriRef.current.value} />}
    </div>
  );
};