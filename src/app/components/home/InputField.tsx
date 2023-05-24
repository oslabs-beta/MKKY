'use client'
import React, { useState } from 'react';
import Display from './display'

const InputField = () => {
    let [stringURI, setURI] = useState<string>("");
    const [showComponent, setShowComponent] = useState(false);
    // const inputURIRef = useRef<HTMLInputElement>(null!)
    const submitHandler = (e) => {
        e.preventDefault();
        setURI(stringURI);
        // stringURI = inputURIRef.current.value;
        setShowComponent(true);
    }
    
    return (
        <div>
        <form
        className='forminput'
        onSubmit={submitHandler}
        >
            <input 
            type='input'
            // value={stringURI}
            // ref={inputURIRef}
                onChange={(e) => setURI(e.target.value)}
                placeholder='Enter URI here' className='input_box'/>
                <button className='input_submit' type='submit'>Enter</button>
        </form>
        {showComponent && <Display uri={stringURI}/>} 
        </div>
    )
}

export default InputField;