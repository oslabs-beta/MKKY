'use client'
import React, { useState } from 'react';
import Display from './display'

const InputField = ({ stringURI, setURI, Display }): any => {
    const submitHandler = (e: React.FormEvent) => {
        e.preventDefault();
        setURI(e.target.value);
    }
    console.log(stringURI)
    return (
        <form
        className='forminput'
        >
            <input type='input'
            value={stringURI}
                onChange={(e) => setURI(e.target.value)}
                placeholder='Enter URI here' className='input_box'/>
                <button className='input_submit' type='submit' onSubmit={submitHandler}{ ...Display }>Enter</button>
        </form>
    )
}

export default InputField;