'use client'

import React , {useEffect, useState} from "react";
import TableCell from "./tableCell";
import "./style.css"


//const UpdateQueryContext = createContext(null)
const Display = ({ uri }) =>{
  console.log('IN DISPLAY:', uri)
  const [data, setData] = useState({
    allTableNames: ['Holder'],
    allTablesFields: [[]],
    allTablesData: {rows : ['Holder']}
  });
  const [showData, setShowData] = useState(false);
  useEffect((): any => {
    fetch('http://localhost:3000/api/methods/', {
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
                
                <table className="table w-full table-compact"> 
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
  else {
    return (
      <div className="text-center">
        <h1>Loading...</h1>
      <div role="status">
        <svg aria-hidden="true" className="inline w-20 h-20 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
        </svg>
        <span className="sr-only">Loading...</span>
    </div>
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
