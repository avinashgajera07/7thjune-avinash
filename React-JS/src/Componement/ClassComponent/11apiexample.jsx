import React, { Component } from "react";

export default class apiexample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      FetchData: {},
    };
    // fetch("https://jsonplaceholder.typicode.com/todos").then(resp =>{console.log(resp);}).then()
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((resp) => resp.json())
      .then((result) => {
        console.log(result);
        this.setState({ FetchData: result });
      });
  }
  render() {
    console.log("this.state.FetchData", this.state.FetchData);
    return <>{JSON.stringify(this.state.FetchData)}</>;
  }
}
