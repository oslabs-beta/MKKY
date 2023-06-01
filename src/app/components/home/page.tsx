
//import ReactDOM from 'react-dom';
import Display from "../display/display"
import Input from "./input"

function App() {
    const uri = "postgres://jxbiwedv:tWMx8_U1YtUH3Noj4vFCNMVW1yHOfEWb@jelani.db.elephantsql.com/jxbiwedv";
 
    return (
      <div>
        <h1>PSQL</h1>
        <Input/>
        {/* <Display URI={uri}/> */}
      
      </div>
    );
  };
  
  export default App;



  // <Input>
  //         <Display URI={uri}/>
  //       </ Input>