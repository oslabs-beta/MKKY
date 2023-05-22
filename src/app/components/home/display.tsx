//'use client'

import React, { useState, useEffect } from "react";
import Chart from "chart.js";
import {Pool} from 'pg';
import {Client} from 'pg';

import "./style.css"

const Display = async () =>{

  let pg = require('pg')
  //const URI = 'postgres://mmethhdd:OuENml3Y4wNyMcCHb69l16Cn3l2osxzh@drona.db.elephantsql.com/mmethhdd'
  const URI = props.URI
  let client = new Client(URI)
  client.connect()

  const allTables = await client.query("SELECT table_name FROM information_schema.tables WHERE table_schema = 'public';")
  //allTables.rows.pop()
  const allTableNames = Object.values(allTables.rows)


  console.log('TABLE NAMES', allTableNames)

  let allTablesData = []
  let tableData;

  //Removing SQL default table
  allTableNames.pop()
  allTableNames.forEach( async (table) => {
    tableData = await client.query(`SELECT * FROM ${table.table_name}`)
    allTablesData.push(tableData)
  })
  tableData = await client.query(`SELECT * FROM ${allTableNames[0].table_name}`);

  allTables.rows.pop()
  
  let allTablesFields = [];
  //let newFieldsArr = []
  allTablesData.forEach(table => {
    let newFieldsArr = []
    table.fields.forEach(field => {
      newFieldsArr.push(field.name)
    })
    allTablesFields.push(newFieldsArr)
  })

  function onSubmitQuery(tableID, rowID, columnID) {
    return
  }

  //const [value, setValue] = useState("")

  return (
    <div>
      {console.log("All DATA", allTablesData)}
      {console.log("FIELDS", allTablesData[0].fields)}
      {console.log(allTables.rows)}
      {console.log("ALL FIELDS", allTablesFields)}

      <style>{`td { border : 4px solid blue}`}</style>
        {allTables.rows.map((table:any, index: number) => (
          <div>
            <h1>{table.table_name}</h1>
              
              <table> 
               {allTablesFields[index].map((fields:any) => (
               
                  <th>{fields}</th>
                
               ))} 
              {allTablesData[index].rows.map((row: any) => (
                <tr key={row.id}>
                  {Object.keys(row).map((cell:any) => (
                    
                    <td><input value = {row[cell]} ></input></td>
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




      //LOOP 1: TABLE NAME 
      //LOOP 2: FIELDS
      //LOOP 2: TABLE DATA
