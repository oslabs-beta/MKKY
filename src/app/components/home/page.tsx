'use client'
import React from "react"
//import ReactDOM from 'react-dom';
import Display from "./display";
import InputField from './InputField';

function App() {
    const [stringURI, setURI] = useState<string>("");
    return (
      <div>
        <h1>WELCOME TO THE HOME</h1>
        {/* /* <InputField stringURI={stringURI} setURI={setURI}/>  */
         /* {stringURI !== "" ? <Display stringURI={stringURI}/> : null} */
        /* /* <Display stringURI={stringURI}/> */
        /* </InputField>   */        }
         <Display URI = {uri}/>       
      </div>
    );
  };
  
  export default App;



