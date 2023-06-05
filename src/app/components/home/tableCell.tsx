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
    async function deleteQuery(event, value, tableName, rowID, colID, uri){
        event.preventDefault();
        console.log('event value:', value)
        console.log('row id:', rowID);
        console.log('col id:', colID);
        if (value === -1)   {
            let deleteQuery = `DELETE FROM ${tableName} WHERE row`
            await fetch('/api', {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({tableName: tableName, rowID: rowID, colID: colID, uri: uri})
            })
        }        
    }
    //event.target.value ---> NEWVAL
    //console.log("KEYNAME", props.keyName, "ROWID", props.rowID, "COLID", props.colID, "TABLE", props.tableName)
    return (
        
        <td><form onSubmit={(event)=>{
            deleteQuery(event, value, props.tableName, props.rowID, props.colID, props.URI)
            submitQuery(event, props.tableName, props.colID, value, props.keyName, props.rowID, props.URI)
        }
    }><input value = {value} onChange={(event) => setValue(event.target.value)} ></input></form></td>
    )
}
 
export default TableCell;