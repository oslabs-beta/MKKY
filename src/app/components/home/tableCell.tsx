"use client"

import React, { useState, useEffect } from "react";
import Chart from "chart.js";
import {Pool, Client} from 'pg';
import { useServerEffect } from 'next/server';

import "./style.css"
import {executeQuery} from "./db"

function TableCell (props) {
    
    const [value, setValue] = useState(`${props.data}`);
//const updateQuery = `UPDATE ${props.table_name} SET ${props.colID} = ___ WHERE ${props.keyName} = ${props.rowID} `
    console.log(props.URI)
    // const pool = new Pool({
    //     connectionString: props.URI
    // })
    // pool.end()

    function submitQuery(tableName, colID, newVal, keyName, rowID){
        // const pool = new Pool({
        //     connectionString: props.URI
        // })
        //let client2 = new Client(props.URI)
        
        const updateQuery = `UPDATE ${tableName} SET ${colID} = ${newVal} WHERE ${keyName} = ${rowID} `
        //executeQuery(updateQuery)
        //const updateQuery = `UPDATE ${props.table_name} SET ${props.colID} = ${value} WHERE ${props.keyName} = ${props.rowID} `
        //client.query(updateQuery)
        //client.end()
    }
    console.log("KEYNAME", props.keyName, "ROWID", props.rowID, "COLID", props.colID, "TABLE", props.tableName)
    return (
       
        <td><input value = {value} onChange={(event) => setValue(event.target.value)}></input></td>
        
    )
}


export default TableCell;