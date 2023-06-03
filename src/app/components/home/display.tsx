'use client'

import React , {createContext, useEffect, useState} from "react";
import Chart from "chart.js";
import {Pool} from 'pg';
import TableCell from "./tableCell";
import Wrapper from "./wrapper"
// import "./style.css"
import { METHODS } from "http";

//const UpdateQueryContext = createContext(null)
const Display = ({ uri }) =>{
  console.log('IN DISPLAY:', uri)
  const [data, setData] = useState({});
  const [showData, setShowData] = useState(false);
  useEffect(() => {
    const response = fetch('http://localhost:3000/api/methods/', {
    headers:{ 
      'Content-Type': 'application/json'
    },
    method: 'POST',
    body: JSON.stringify({stringURI: uri})
  })
  .then(data => data.json())
  .then(data => {
    setData(data);
    setShowData(true);
  })
}, [])
  if (showData)  {
    return (
    

      <div id='extension2'>
        <style>{`td { border : 4px solid blue}`}</style>
          {data.allTableNames.map((table:any, index: number) => (
            
            <div>
              <h2>{table.table_name}</h2>
                
                <table class="table w-full table-zebra"> 
                 {data.allTablesFields[index].map((fields:any) => (
                 
                    <th>{fields}</th>
                 ))} 
                {data.allTablesData[index].rows.map((row: any) => (
                  <tr key={row.id}>
                    {Object.keys(row).map((cell:any, colIndex: number) => (
                      // <td><input value = {row[cell]} onInput={(event)=> {submitQuery(table.table_name, allTablesFields[index][colIndex], event.target.value, allTablesFields[index][0], row.id)}}></input></td>
                      <TableCell URI = {uri} data = {row[cell]} keyName = {data.allTablesFields[index][0]} rowID = {row.id} colID = {data.allTablesFields[index][colIndex]} tableName = {table.table_name} ></TableCell>
                    
                    ))}
                    {/* {console.log("ROWID", row.id, "COLID", allTablesFields[index], "TABLE", table.table_name)} */}
                  </tr>
                  )) 
                  }
                </table>     
                      
            </div>
        ))}
      </div>
    )
  }
  else  {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    )
  }
  // let pg = require('pg')
  // // const URI = "postgres://jxbiwedv:tWMx8_U1YtUH3Noj4vFCNMVW1yHOfEWb@jelani.db.elephantsql.com/jxbiwedv";
  // let client = new pg.Client('postgres://jxbiwedv:tWMx8_U1YtUH3Noj4vFCNMVW1yHOfEWb@jelani.db.elephantsql.com/jxbiwedv')
  // //let updateQuery = `UPDATE ${request.body.tableName} SET ${colID} = ${newVal} WHERE ${keyName} = ${rowID} `
  // client.connect()
  // //const allTables = await executeQuery("SELECT table_name FROM information_schema.tables WHERE table_schema = 'public';")
  // const allTables = await client.query("SELECT table_name FROM information_schema.tables WHERE table_schema = 'public';")
  //allTables.rows.pop()
  

  // let allTablesData = []
  // let tableData;
  
  // for(let i = 0; i<  allTables.rows.length; i++){
  //   if (allTables.rows[i]["table_name"] === "pg_stat_statements"){
  //     allTables.rows.splice(1,i)
  //   }
    
  // }
  // const allTableNames = Object.values(allTables.rows)
  // console.log("NOW THE TABLES ARE ", allTableNames )
  // //Removing SQL default table
  // //allTableNames.pop()
  // allTableNames.forEach( async (table) => {
  //   //tableData = await executeQuery(`SELECT * FROM ${table.table_name}`)
  //   tableData = await client.query(`SELECT * FROM ${table.table_name}`)
  //   allTablesData.push(tableData)
  // })
  // //tableData = await executeQuery(`SELECT * FROM ${allTableNames[0].table_name}`);
  // tableData = await client.query(`SELECT * FROM ${allTableNames[0].table_name}`);

  //allTables.rows.pop()
  
  // let allTablesFields = [];
  // //let newFieldsArr = []
  // allTablesData.forEach(table => {
  //   let newFieldsArr = []
  //   table.fields.forEach(field => {
  //     newFieldsArr.push(field.name)
  //   })
  //   allTablesFields.push(newFieldsArr)
  // })
   
  //await client.end()


  // return (
    
  //   <div>

  //     <style>{`td { border : 4px solid blue}`}</style>
  //     {console.log('ALL DATA:', data)}
  //       {data.allTableNames.map((table:any, index: number) => (
          
  //         <div>
  //           <h2>{table.table_name}</h2>
              
  //             <table> 
  //              {data.allTablesFields[index].map((fields:any) => (
               
  //                 <th>{fields}</th>
  //              ))} 
  //             {data.allTablesData[index].map((row: any) => (
  //               <tr key={row.id}>
  //                 {Object.keys(row).map((cell:any, colIndex: number) => (
  //                   // <td><input value = {row[cell]} onInput={(event)=> {submitQuery(table.table_name, allTablesFields[index][colIndex], event.target.value, allTablesFields[index][0], row.id)}}></input></td>
  //                   <TableCell URI = {URI} data = {row[cell]} keyName = {data.allTablesFields[index][0]} rowID = {row.id} colID = {data.allTablesFields[index][colIndex]} tableName = {table.table_name} ></TableCell>
                  
  //                 ))}
  //                 {/* {console.log("ROWID", row.id, "COLID", allTablesFields[index], "TABLE", table.table_name)} */}
  //               </tr>
  //               )) 
  //               }
  //             </table>     
                    
  //         </div>
  //     ))}
  //   </div>
  // )
  // );
  // };
  // <div>
  //   <h1>hello</h1>
  //   </div>
  
  
  // export default Display;

  
    

      //LOOP 1: TABLE NAME 
      //LOOP 2: FIELDS
      //LOOP 2: TABLE DATA


  //TEST QUERIES
  // {console.log("All DATA", allTablesData)}
  // {console.log("FIELDS", allTablesData[0].fields)}
  // {console.log(allTables.rows)}
  // {console.log("ALL FIELDS", allTablesFields)}
// 'use client'
// import React, { useEffect, useState } from "react";
// import Chart from "chart.js";
// import { Pool } from "pg";
// import TableCell from "./tableCell";
// import Wrapper from "./wrapper";
// import "./style.css";

// const Display = (props) => {
//   const [allTablesData, setAllTablesData] = useState([]);
//   const [allTablesFields, setAllTablesFields] = useState([]);
//   const URI = props.URI;

//   useEffect(() => {
//     const fetchData = async () => {
//       let pg = require("pg");
//       let client = new pg.Client(URI);
//       client.connect();

//       const allTables = await client.query(
//         "SELECT table_name FROM information_schema.tables WHERE table_schema = 'public';"
//       );

//       let filteredTables = allTables.rows.filter(
//         (row) => row.table_name !== "pg_stat_statements"
//       );

//       const allTableNames = filteredTables.map((row) => row.table_name);

//       const tableDataPromises = allTableNames.map((tableName) =>
//         client.query(`SELECT * FROM ${tableName}`)
//       );
//       const resolvedTableData = await Promise.all(tableDataPromises);

//       setAllTablesData(resolvedTableData);

//       const tableFields = resolvedTableData.map((table) =>
//         table.fields.map((field) => field.name)
//       );
//       setAllTablesFields(tableFields);

//       client.end();
//     };

//     fetchData();
//   }, [URI]);

//   return (
//     <div>
//       <style>{`td { border : 4px solid blue}`}</style>
//       {allTablesData.map((table, index) => (
//         <div key={index}>
//           <h2>{table.rows[index].table_name}</h2>
//           <table>
//             <thead>
//               <tr>
//                 {allTablesFields[index].map((field, fieldIndex) => (
//                   <th key={fieldIndex}>{field}</th>
//                 ))}
//               </tr>
//             </thead>
//             <tbody>
//               {table.rows.map((row) => (
//                 <tr key={row.id}>
//                   {Object.keys(row).map((cell, colIndex) => (
//                     <TableCell
//                       URI={URI}
//                       data={row[cell]}
//                       keyName={allTablesFields[index][0]}
//                       rowID={row.id}
//                       colID={allTablesFields[index][colIndex]}
//                       tableName={table.rows[index].table_name}
//                       key={`${row.id}-${cell}`}
//                     ></TableCell>
//                   ))}
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       ))}
//     </div>
//   );
// };

}
export default Display;
