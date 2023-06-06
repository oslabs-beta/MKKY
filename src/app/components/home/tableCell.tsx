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
        //executeQuery(updateQuery)
        console.log('row:', rowID)
        console.log('newval', newVal)
        if (colID === keyName && newVal == -1)    {
            console.log('tableName:', tableName, 'keyname:', keyName, 'colid:', colID)
                let deleteQuery = `DELETE FROM ${tableName} WHERE ${keyName} = ${rowID}`;
                console.log(deleteQuery);
            await fetch('/api/methods', {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({uri, deleteQuery})
            })
        }
        else    {
            let updateQuery = `UPDATE ${tableName} SET ${colID} = '${newVal}' WHERE ${keyName} = ${rowID} `
            console.log('updateq:', updateQuery)
            await fetch('/api', {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({uri, updateQuery})
            })
        }
       
        // let responce = await fetch('/api', {
        //             method: "PATCH",
        //             headers: {
        //                 'Content-Type': 'application/json',
        //               },
        //             body: JSON.stringify({uri: uri, query: updateQuery})
          
        //         })
        //const updateQuery = `UPDATE ${props.table_name} SET ${props.colID} = ${value} WHERE ${props.keyName} = ${props.rowID} `
        return;
    } 
    // async function deleteQuery(event, value, tableName, rowID, colID, uri){
    //     event.preventDefault();
    //     console.log('event value:', value)
    //     console.log('row id:', rowID);
    //     console.log('col id:', colID);
    //     if (value == -1)   {
    //         // let deleteQuery = `DELETE FROM ${tableName} WHERE row`
    //         fetch('/api', {
    //             method: 'DELETE',
    //             headers: {
    //                 'Content-Type': 'application/json',
    //             },
    //             body: JSON.stringify({uri: uri})
    //         })
    //     }        
    //     return;
    // }
    //event.target.value ---> NEWVAL
    //console.log("KEYNAME", props.keyName, "ROWID", props.rowID, "COLID", props.colID, "TABLE", props.tableName)
    return (
        
        <td><form onSubmit={(event)=>{
            submitQuery(event, props.tableName, props.colID, value, props.keyName, props.rowID, props.URI)
            // deleteQuery(event, value, props.tableName, props.rowID, props.colID, props.URI)
        }
    }><input value = {value} onChange={(event) => setValue(event.target.value)} ></input></form></td>
    )
}
 
export default TableCell;