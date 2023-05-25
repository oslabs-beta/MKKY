//'use client'

import React , {createContext} from "react";
import Chart from "chart.js";
import {Pool} from 'pg';
//import { useServerEffect } from 'next/server';

import TableCell from "./tableCell";
import Wrapper from "./wrapper"
import "./style.css"

import {executeQuery} from './db'
//const UpdateQueryContext = createContext(null)
const Display = async (props) =>{

  let pg = require('pg')
  const URI = props.URI 
  
  let client = new pg.Client(URI)
  // let client = new Pool({
  //   connectionString:URI
  // })
  client.connect() 
  //const allTables = await executeQuery("SELECT table_name FROM information_schema.tables WHERE table_schema = 'public';")
  const allTables = await client.query("SELECT table_name FROM information_schema.tables WHERE table_schema = 'public';")
  //allTables.rows.pop()
  
  console.log('TABLE NAMES', allTables.rows)

  let allTablesData = []
  let tableData;
  
  for(let i = 0; i<  allTables.rows.length; i++){
    if (allTables.rows[i]["table_name"] === "pg_stat_statements"){
      allTables.rows.splice(1,i)
    }
    
  }
  const allTableNames = Object.values(allTables.rows)
  console.log("NOW THE TABLES ARE ", allTableNames )
  //Removing SQL default table
  //allTableNames.pop()
  allTableNames.forEach( async (table) => {
    //tableData = await executeQuery(`SELECT * FROM ${table.table_name}`)
    tableData = await client.query(`SELECT * FROM ${table.table_name}`)
    allTablesData.push(tableData)
  })
  //tableData = await executeQuery(`SELECT * FROM ${allTableNames[0].table_name}`);
  tableData = await client.query(`SELECT * FROM ${allTableNames[0].table_name}`);

  //allTables.rows.pop()
  
  let allTablesFields = [];
  //let newFieldsArr = []
  allTablesData.forEach(table => {
    let newFieldsArr = []
    table.fields.forEach(field => {
      newFieldsArr.push(field.name)
    })
    allTablesFields.push(newFieldsArr)
  })
   
  //await client.end()


  return (
    
    <div>

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
                  {Object.keys(row).map((cell:any, colIndex: number) => (
                    // <td><input value = {row[cell]} onInput={(event)=> {submitQuery(table.table_name, allTablesFields[index][colIndex], event.target.value, allTablesFields[index][0], row.id)}}></input></td>
                    <TableCell URI = {URI} data = {row[cell]} keyName = {allTablesFields[index][0]} rowID = {row.id} colID = {allTablesFields[index][colIndex]} tableName = {table.table_name} ></TableCell>
                  
                  ))}
                  {/* {console.log("ROWID", row.id, "COLID", allTablesFields[index], "TABLE", table.table_name)} */}
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

  
    

      //LOOP 1: TABLE NAME 
      //LOOP 2: FIELDS
      //LOOP 2: TABLE DATA


  //TEST QUERIES
  // {console.log("All DATA", allTablesData)}
  // {console.log("FIELDS", allTablesData[0].fields)}
  // {console.log(allTables.rows)}
  // {console.log("ALL FIELDS", allTablesFields)}