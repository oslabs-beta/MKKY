// 'use client'
import React from "react";
//import ReactDOM from 'react-dom';
import Display from "./display";
import InputField from './InputField';


function App () {
    // const [stringURI, setURI] = useState<string>("");
    // const uri = 'postgres://pkhpeqch:Qrc5hxjOCrnFdEZsPd8YxzPEfDMDjUTG@drona.db.elephantsql.com/pkhpeqch';
    return (
      <div>
        <h1>WELCOME TO THE HOME</h1>
        
        <InputField />
       {/* <Display uri={props.children}/> */}
      </div>
    );
  };
  
  export default App;



