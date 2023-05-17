import React, { useState, useEffect } from "react";
import Chart from "chart.js";


const URI = 'postgres://mmethhdd:OuENml3Y4wNyMcCHb69l16Cn3l2osxzh@drona.db.elephantsql.com/mmethhdd'
const Display = () =>{
    const [data, setData] = useState<{ columns: any[], rows: any[] }[]>([]);
  
    useEffect(() => {
        fetch(URI)
          .then((response) => response.json())
          .then((data) => {
            console.log(data)
            setData(data);
          });
      }, []);
  
    return (
      <div>
        
      </div>
    );
  };
  
  export default Display;


        // <div>
      //   <table>
      //     <thead>
      //       <tr>
      //         {data.columns.map((column) => (
      //           <th key={column}>{column}</th>
      //         ))}
      //       </tr>
      //     </thead>
      //     <tbody>
      //       {data.rows.map((row) => (
      //         <tr key={row.id}>
      //           {row.cells.map((cell) => (
      //             <td key={cell.id}>{cell.value}</td>
      //           ))}
      //         </tr>
      //       ))}
      //     </tbody>
      //   </table>
      // </div>