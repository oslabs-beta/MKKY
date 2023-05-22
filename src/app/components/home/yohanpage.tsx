'use client'
import React, { useState } from "react"
//import ReactDOM from 'react-dom';
import Display from "./display";
import InputField from './yohanInputField';

function App() {
    const [stringURI, setURI] = useState<string>("");
    return (
      <div>
        <h1>WELCOME TO THE HOME</h1>
        <InputField stringURI={stringURI} setURI={setURI}/>
        {/* {stringURI !== "" ? <Display /> : null}                */}
      </div>
    );
  };
  
  export default App;



