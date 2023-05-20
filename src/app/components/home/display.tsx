//'use client'

import React, { useState, useEffect } from "react";
import Chart from "chart.js";
import {Pool} from 'pg';
import {Client} from '@elephantsql/client';

import TableCell from "./tableCell";

import "./style.css"

const Display = async (props) =>{

const Display:any = async () =>{
  let pg = require('pg')
  //const URI = 'postgres://mmethhdd:OuENml3Y4wNyMcCHb69l16Cn3l2osxzh@drona.db.elephantsql.com/mmethhdd'
  const URI = props.URI
  let client = new pg.Client(URI)
  client.connect()
  // console.log('PROPS:', stringURI)
  const allTables = await client.query("SELECT table_name FROM information_schema.tables WHERE table_schema = 'public';")
  allTables.rows.pop()
  const allTableNames = Object.values(allTables.rows)

  console.log('PROPS:', stringURI)
  console.log('TABLE NAMES', allTableNames)
  
  let allTablesData:any = []
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
                  {Object.keys(row).map((cell:any, colIndex: number) => (
                    
                    <TableCell data = {row[cell]} keyName = {allTablesFields[index][0]} rowID = {row.id} colID = {allTablesFields[index][colIndex]} tableName = {table.table_name}></TableCell>
                   
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
