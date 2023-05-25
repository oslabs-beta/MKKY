// 'use client'
import React from "react";
//import ReactDOM from 'react-dom';
import Display from "./display";
import InputField from './InputField';

function App() {
    const uri = "postgres://mmethhdd:OuENml3Y4wNyMcCHb69l16Cn3l2osxzh@drona.db.elephantsql.com/mmethhdd";
  
    return (
      <div>
        <h1>WELCOME TO THE HOME</h1>
        
        <InputField />
       {/* <Display uri={props.children}/> */}
      </div>
    );
  };
  
  export default App;



