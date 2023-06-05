"use client"

import React, { useState, useEffect } from "react";
import Chart from "chart.js";
import {Pool, Client} from 'pg';
import {useRouter} from "next/navigation"

import "../../globals.css"
//import {executeQuery} from "./db2"
import {PATCH} from '../../api/route'


function TableCell (props) {
    
    const [value, setValue] = useState(`${props.data}`);
    //const updateQuery = `UPDATE ${props.table_name} SET ${props.colID} = ${value} WHERE ${props.keyName} = ${props.rowID} `
   
    async function submitQuery(event, tableName, colID, newVal, keyName, rowID, uri){
        event.preventDefault()
        let updateQuery = `UPDATE ${tableName} SET ${colID} = '${newVal}' WHERE ${keyName} = ${rowID} `
        //executeQuery(updateQuery)
        let responce = await fetch('/api', {
                    method: "PATCH",
                    headers: {
                        'Content-Type': 'application/json',
                      },
                    body: JSON.stringify({uri: uri, query: updateQuery})
          
                })
        //const updateQuery = `UPDATE ${props.table_name} SET ${props.colID} = ${value} WHERE ${props.keyName} = ${props.rowID} `
        return setValue(newVal)
    } 

    //event.target.value ---> NEWVAL
    //console.log("KEYNAME", props.keyName, "ROWID", props.rowID, "COLID", props.colID, "TABLE", props.tableName)
    return (
        
        <td><form onSubmit={(event)=>submitQuery(event, props.tableName, props.colID, value, props.keyName, props.rowID, props.URI)}><input value = {value} onChange={(event) => setValue(event.target.value)} ></input></form></td>
    )
}
 
export default TableCell;