import React, { Component } from "react";

class StateinClassCompo extends Component {
    dataMember = "Something Data Member...";
    constructor(props){
        super(props);
        this.state={
            stateData:"init",
            valueforIncrement:0,
            trunoff:true
        }
}
        // this.clickHandleSomething = this.clickHandleSomething.bind(this)
    // clickHandleSomething(){
    //         console.log("called");
    //         this.dataMember = "Change..."
    //         this.setState({stateData:"other data"})
    //     }
        clickHandleSomething=()=>{
            console.log("called");
            this.dataMember = "Change...";
            this.setState({stateData:"other data"})
        }
        increment= ()=>{
            this.setState({valueforIncrement:this.state.valueforIncrement+1})

        }
  render() {
    let data = "Something...";
    return (
      <div>
        {data}  <br /> 
        {this.dataMember} <br />
        {this.state.stateData}
        {/* <button onClick={this.clickHandleSomething()}>Click</button> */}
        <button onClick={this.clickHandleSomething}>Click</button>
        <br />
        <button onClick={this.increment}>Increment</button>
        {this.state.valueforIncrement}
        <button onClick={()=>{this.setState({valueforIncrement:this.state.valueforIncrement-1})}}>Decrement</button>
        <br />
        <br />
        <br />
        <button onClick={()=>{this.setState({trunonoff:!this.state.trunonoff})}}>
        {this.state.trunonoff? "On":"Off"}</button>
        
      </div>
    );
  }
}
export default StateinClassCompo;
