import React, { Component } from "react";

 class SpreadvsRestCompo extends Component {      // ek sathe multipal data print karava mate aa componet no use thay 6e.
  getData = (a, ...data) => {
    console.log("getData", data);
  };
  getDataSpread = (a,b,c,d)=>{
    console.log(a,b,c,d);
  }
  render() {
    let arr = [12,44];
    return <>
    {this.getData(10, 50, 60)}
    {this.getDataSpread(arr)}
    </>
  }
}

export default SpreadvsRestCompo;