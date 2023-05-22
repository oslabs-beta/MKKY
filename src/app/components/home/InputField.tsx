'use client'
import React, { useState, useRef } from 'react';
import Display from './display'

const InputField = ( props ) => {
    let [stringURI, setURI] = useState<string>("");
    const [showComponent, setShowComponent] = useState(false);
    const inputURIRef = useRef<HTMLInputElement>(null!)
    const submitHandler = (e: React.FormEvent) => {
        e.preventDefault();
        setURI(e.target.value);
        // stringURI = inputURIRef.current.value;
        // setShowComponent(true);
    }
    console.log("stringURI: ", stringURI);
    return (
        <form
        className='forminput'
        >
            <input type='input'
            // value={stringURI}
            ref={inputURIRef}
                onChange={(e) => setURI(e.target.value)}
                placeholder='Enter URI here' className='input_box'/>
                <button className='input_submit' type='submit' onSubmit={submitHandler}>Enter</button>
               {/* {showComponent && 
                    <Display stringURI={stringURI}/>
                    } */}
        </form>
    )
}

export default InputField;