
import Display from "./display";
import Input from "./input";
// type DisplayProps = {
//   message: string;
// };
const MyComponent: React.FC = (props) => {
// ri = "postgres://mmethhdd:OuENml3Y4wNyMcCHb69l16Cn3l2osxzh@drona.db.elephantsql.com/mmethhdd";
  
  return (
    <div>
      <h1>WELCOME TO THE HOME</h1>
      <Input />
      <Display />
     
      {showDisplay && <Display URI = {uriRef.current.value} />}
    </div>
  );
};
  
export default MyComponent;


