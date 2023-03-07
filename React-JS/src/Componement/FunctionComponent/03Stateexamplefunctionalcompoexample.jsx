import React from 'react';
import { useState } from 'react';

const Stateexamplefunctionalcompoexample = () => {
    const [statedata,setData] = useState("something")
    const [count,setcount] = useState(0)
    let  data = "something"
    let btnclick = () =>{
        console.log("called");
        data = "checking"
        console.log(data);
        setData("data")
    }
    let increment = ()=>{
        setcount(count+1)
    }
    let decrement = ()=>{
        setcount(count-1)
    }
    return (
        <>
             simple varible data: {data}
            <br />
            state data: {statedata}
            <br />
            <button onClick={btnclick}>Click</button>
            <br />
            <button onClick={increment}>increment</button> {count} <button onClick={decrement}>decrement</button>
        </>
    );
};

export default Stateexamplefunctionalcompoexample;