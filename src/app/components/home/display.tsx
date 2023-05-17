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
  const allTableNames = Object.values(allTables.rows)
  console.log('TABLE NAMES', allTableNames)
  const tableData = await client.query(`SELECT * FROM ${allTableNames[0].table_name}`);
  return (
    <div>
      {console.log(tableData.rows)}
      {console.log(allTables.rows)}

      <style>{`td { border : 4px solid red}`}</style>
        {allTables.rows.map((table:any) => (
          <div>
            <h1>{table.table_name}</h1>
            <table>
              
              {tableData.rows.map((row: any) => (
                <tr key={row.id}>
                  {Object.keys(row).map((cell:any) => (
                    <td>{row[cell]}</td>
                  ))}
                </tr>
                )) 
              }

            </table>
          </div>
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