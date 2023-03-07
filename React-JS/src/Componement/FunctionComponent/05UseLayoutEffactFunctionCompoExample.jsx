import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useLayoutEffect } from 'react';

const UseLayoutEffactFunctionCompoExample = () => {
    const [statedata,setData] = useState("something")
    const [count,setcount] = useState(0)
    useEffect(()=>{
        console.log("useeffact called");
    },[statedata])


    //constructor and unmount
    useLayoutEffect(()=>{
        console.log("useLayoutEffeact called");    // uselayout effect pahela call thase.
        return useEffReturn
    },[])

    let useEffReturn = () =>{
        console.log("useEffReturn");
    }

    let btnclick = () =>{
        console.log("btnClick called");
        setData("data")
    }
    let increment = ()=>{
        setcount(count+1)
    }
    let decrement = ()=>{
        setcount(count-1)
    }
    return (
        <div>
             <button onClick={btnclick}>Click</button>
             <br />
            <button onClick={increment}>increment</button> {count} <button onClick={decrement}>decrement</button>
        </div>
    );
};

export default UseLayoutEffactFunctionCompoExample;