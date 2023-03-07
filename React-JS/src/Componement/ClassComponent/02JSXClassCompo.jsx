import React, { Component } from 'react'

export default class JSXClassCompo extends Component {
  render() {
    const user ={
        firstName: 'Avinash',
        LastName: 'Gajera'
    };
    // const heading = "<h1>something</h1>"  // ' ' ke " " karava ni jarur nahi
    // const heading = <h1>something</h1>
    let somthing =   "My Site Title";
    // const heading = "<h1>"+somthing+"</h1>"
    // const heading = `<h1>${somthing}</h1>`
    const heading = <h1>{somthing}</h1>
    return (
      <div>
        {heading} <br />
        2+2 ={2+2}
        <p>Data : {user.firstName} {user.LastName}</p>
        <p>FullName : {user.firstName} {user.LastName}</p>
      </div>
    );
  }
}
