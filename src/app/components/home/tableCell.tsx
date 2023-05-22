"use client"

import React, { useState, useEffect } from "react";
import Chart from "chart.js";
import {Pool} from 'pg';
import {Client} from '@elephantsql/client';

import "./style.css"


function TableCell (props) {
    
    const [value, setValue] = useState(`${props.data}`);
    ////const updateQuery = `UPDATE ${props.table_name} SET ${props.colID} = ___ WHERE ${props.keyName} = ${props.rowID} `
    console.log("KEYNAME", props.keyName, "ROWID", props.rowID, "COLID", props.colID, "TABLE", props.tableName)
    //let pg = require('pg')
    return (
       
        <td><input value = {value} onChange={(event) => setValue(event.target.value)}></input></td>
        
    )
}


export default TableCell;