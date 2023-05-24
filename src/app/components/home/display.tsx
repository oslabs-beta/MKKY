// // 'use client'

// import React from "react";
// // import { Client } from '@elephantsql/client';
// // import pg from 'pg/lib/index.js';
// const { Client } = require('pg')
// import TableCell from "./tableCell";
// import type { InferGetStaticPropsType, GetStaticProps } from 'next';


// import "./style.css"
//   // @{ts-expect-errorAsyncServerComponent}
// const Display:any = ( props ) => {
//   // let pg = require('pg');
  
//   // const URI = 'postgres://pkhpeqch:Qrc5hxjOCrnFdEZsPd8YxzPEfDMDjUTG@drona.db.elephantsql.com/pkhpeqch'
//   const URI = props.uri;
//   console.log('PROPS :', props)
//   console.log('URI :', URI)
//   const asyncfunction = async function()  {
//   let client = new Client({connectionString: URI})
//   await client.connect()
  
//   const allTables = await client.query("SELECT table_name FROM information_schema.tables WHERE table_schema = 'public';")
//   allTables.rows.pop()
//   const allTableNames = Object.values(allTables.rows)

//   console.log('TABLE NAMES', allTableNames)
  
//   let allTablesData:any = []
//   let tableData;

//   //Removing SQL default table
//   allTableNames.pop()
//   allTableNames.forEach( async (table) => {
//     tableData = await client.query(`SELECT * FROM ${table.table_name}`)
//     allTablesData.push(tableData)
//   })
//   tableData = await client.query(`SELECT * FROM ${allTableNames[0].table_name}`);

//   allTables.rows.pop()
  
//   let allTablesFields = [];
//   //let newFieldsArr = []
//   allTablesData.forEach(table => {
//     let newFieldsArr = []
//     table.fields.forEach(field => {
//       newFieldsArr.push(field.name)
//     })
//     allTablesFields.push(newFieldsArr)
//   // dataFetch();
//   })  
  
//   await client.end();
// }
//   useEffect(() => {
//   asyncfunction();
// }, []);

  // function onSubmitQuery(tableID, rowID, columnID) {
  //   return
  // }

  //const [value, setValue] = useState("")

  // return (
  //   <div>
  //     {console.log("All DATA", allTablesData)}
  //     {console.log("FIELDS", allTablesData[0].fields)}
  //     {console.log(allTables.rows)}
  //     {console.log("ALL FIELDS", allTablesFields)}


  //     <style>{`td { border : 4px solid blue}`}</style>
  //       {allTables.rows.map((table:any, index: number) => (
  //         <div>
  //           <h1>{table.table_name}</h1>
              
  //             <table> 
  //              {allTablesFields[index].map((fields:any) => (
               
  //                 <th>{fields}</th>
  //              ))} 
  //             {allTablesData[index].rows.map((row: any) => (
  //               <tr key={row.id}>
  //                 {Object.keys(row).map((cell:any, colIndex: number) => (
                    
  //                   <TableCell data = {row[cell]} keyName = {allTablesFields[index][0]} rowID = {row.id} colID = {allTablesFields[index][colIndex]} tableName = {table.table_name}></TableCell>
                   
  //                 ))}
  //               </tr>
  //               )) 
  //               }
  //             </table>     
                    
  //         </div>
  //     ))}
  //   </div>
  // );
  // };
//   export const getStaticProps: GetStaticProps = async () => {
//     const uri = "postgres://pkhpeqch:Qrc5hxjOCrnFdEZsPd8YxzPEfDMDjUTG@drona.db.elephantsql.com/pkhpeqch";
  
//     return {
//       props: {
//         uri,
//       },
//     };
//   };
//   export default Display;

  
    

//       //LOOP 1: TABLE NAME 
//       //LOOP 2: FIELDS
//       //LOOP 2: TABLE DATA

import React from 'react';
// const { Pool } = require('pg');
import pg from 'pg';
const { Pool, Client } = 'pg';

 /*@{ts-expect-errorAsyncServerComponent}*/

const Display = async (props) => {
  // Use the database connection to perform queries or operations
  const uri = props.uri;
  const pool = new Client({connectionString: uri})
  try {
  const client = pool.connect();
  const allTables = await client.query("SELECT table_name FROM information_schema.tables WHERE table_schema = 'public';");
  await client.end();
  }
  catch(err) {
    console.log('bad');
  }

  return (
    <div>
             {/* {console.log("All DATA", allTables)} */}
      <h1>Server-side Component</h1>
      <p>Data from the server:{allTables}</p>
    </div>
  );
};

// export async function getStaticProps(props) {
//   // Get the URI based on the input (you can replace this with your own logic)
//   const uri = props.uri;
//   console.log(props);

// const createPool = (uri) => {
//   // Create a new instance of the database connection pool
//   const pool = new Pool({
//     connectionString: uri,
//   });
//   console.log('ppol created')
//   return pool;
// };
//   // Create the database connection using the dynamic URI
//   const pool = createPool(uri);
//   const client = await pool.connect();

//   try {
//     const result = await client.query('SELECT * FROM "public"."posts');
//     const serverData = result.rows; // Assuming you want to pass the queried data as props
//     return {
//       props: {
//         serverData,
//       }, 
//     };
//   } finally {
//     client.release(); // Release the database connection
//   }
// }


export default Display;