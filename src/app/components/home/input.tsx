'use client'
import React, { useState } from 'react'
import Display from "./display"

const Input = () => {
  const [value, setValue] = useState('')
  const [showComponent, setShowComponent] = useState(false);
  const handleURI = async(value, e) => {
    e.preventDefault();
    await fetch('/api/', {
      method: 'POST',
      body: JSON.stringify({
        URI: value
      })
    })
    .then(response => response.json())
    .then(data => {
      if(data){
        setShowComponent(true)
      }
    })
    
  }
  if (!showComponent){
    return (
      <div>
      <div id='extension'>
         <h1>URI :</h1>
        <input type="text" placeholder='postgres:// your-endpoint' value={value} onChange={(event)=>setValue(event.target.value)}>
        </input>
  
          <button className="btn btn-accent" onClick={(e)=> handleURI(value, e)}>SUBMIT</button>
      </div>
      
      </div>
    )
  } else{
    return(

    // router.push("/components/display")
    <div>
      <div id='btnDiv'>
      <button className="btn btn-error" id='errorBtn' onClick={() => window.location.reload()}>Disconnect</button>
      </div>
      <Display uri={value} />
    </div>

    )
  }
}

export default Input