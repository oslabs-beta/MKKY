import React from "react"
//import ReactDOM from 'react-dom';
import Display from "./display"

function App() {
    const uri = "postgres://jztpyupa:iQAwglVEeRo17CrNnmg3IEKQstbLb-bu@jelani.db.elephantsql.com/jztpyupa";
    
    return (
      <div>
        <h1>WELCOME TO THE HOME</h1>
        <Display URI = {uri}/>
      </div>
    );
  };
  
  export default App;



