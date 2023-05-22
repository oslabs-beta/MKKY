"use client"

import React, { useState, useEffect } from "react";
import Chart from "chart.js";
import {Pool} from 'pg';
import "./style.css"


function TableCell (props) {
    
    const [value, setValue] = useState(`${props.data}`);

    useEffect(() => {
        
    })
    console.log("KEYNAME", props.keyName, "ROWID", props.rowID, "COLID", props.colID, "TABLE", props.tableName)
    return (
       
        <td><input value = {value} onChange={(event) => setValue(event.target.value)}></input></td>
        
    )
}


export default TableCell;