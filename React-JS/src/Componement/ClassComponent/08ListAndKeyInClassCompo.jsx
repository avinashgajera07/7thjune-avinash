import React, { Component } from 'react';

class ListAndKeyInClassCompo extends Component {
    render() {
        // list component example
        const arr= [1,2,3,4,5,6]
        // arr.map((number)=>console.log(number))    

        // let dataOfArr = arr.map((Number)=><li>{Number}</li>)    // map function data ne return karava mate use thay chee

        // let dataOfArr = arr.map((res)=>{return<li key={key}>{value}</li>})    // this is syntaxt

        // let dataOfArr = arr.map((value,key)=>
        // {console.log(key); 
        //     return<li key={key}>{value}</li>})        // key function data ne  unique banava mate use thay chee

        // let dataOfArrEach = arr.forEach(arr=>{
        //     console.log(arr);
        // });                                           //ForEach function data ne tya ne tya retun karava mate use thay chee
             

        // key component example

        const posts= [
            {id:1,title:'Hello World',content:'Welcome to Learning React!'},
            {id:2,title:'Installation',content:'You can install React from npm.'}
        ];
        let content = posts.map((data,key)=>{
            console.log(data);
            console.log(data.id);
            console.log(data.title);
            console.log(data.content);
            return <tr key={key}>
                      <td>{data.id}</td>
                      <td>{data.title}</td>
                      <td>{data.content}</td>
                    </tr>
        })
        return (
            <>
                {/* {dataOfArr} */}
                {/* {dataOfArrEach} */}
                {/* {arr.forEach(arr=>{
                 console.log(arr);
                })
            }                  */}
            <table className='table table-bordared'>
                <tbody>
                  {content}            
                </tbody>
            </table>
            </>
        );
    }
}

export default ListAndKeyInClassCompo;