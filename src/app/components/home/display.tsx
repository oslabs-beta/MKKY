import React, { useState, useEffect } from "react";
import Chart from "chart.js";
import {Pool} from 'pg';
import {Client} from '@elephantsql/client';

// let pg = require('pg')
// const URI = 'postgres://mmethhdd:OuENml3Y4wNyMcCHb69l16Cn3l2osxzh@drona.db.elephantsql.com/mmethhdd'

// const pool = new Pool({
//   connectionString: URI,
// })
// let client = new pg.Client(URI)
// client.connect()


// const rows = client.query("SELECT * FROM my_table");


const Display = async () =>{

  let pg = require('pg')
  const URI = 'postgres://mmethhdd:OuENml3Y4wNyMcCHb69l16Cn3l2osxzh@drona.db.elephantsql.com/mmethhdd'
  let client = new pg.Client(URI)
  client.connect()

  const allTables = await client.query("SELECT table_name FROM information_schema.tables WHERE table_schema = 'public';")
  const rows = await client.query("SELECT * FROM users");
  const rowsArray = Array.from(rows)
  return (
    <div>
      {console.log('THE TABLES', allTables)}
      {console.log(rowsArray)}
      {console.log(rows.rows)}
      {rows.rows.map((row: any) => (
        <p key={row.id}>{row.name}</p>
      ))}
    </div>
  );
  };
  
  export default Display;

    // const [data, setData] = useState<{ columns: any[], rows: any[] }[]>([]);
  
    // useEffect(() => {
    //     fetch(URI)
    //       .then((response) => response.json())
    //       .then((data) => {
    //         console.log(data)
    //         setData(data);
    //       });
    //   }, []);




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