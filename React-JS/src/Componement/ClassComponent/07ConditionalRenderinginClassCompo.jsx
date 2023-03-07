import React, { Component } from "react";

class ConditionalRenderinginClassCompo extends Component {
    constructor(props) {
        super(props);
        this.state={
            status:true
        }
    }
  loginchange = () => {
    this.setState({ status:!this.state.status});
  };
  render() {
    // //   let status = true
    // let loginbtn = ""
    // if (this.state.status) {
    //   loginbtn = <button onClick={this.loginchange}>Logout</button>;
    // } else {
    //   loginbtn = <button onClick={this.loginchange}>Login</button>;
    // }
    const count = 1;
    return (
        <>
        {count && <h1>Messages:{count}</h1>}
        <br /><br />
       {/* {loginbtn} */}
       <button className="btn btn-primary" onClick={()=>{this.setState({status:!this.state.status})}}>
           {(this.state.status)? "logout":"login"}
        </button>
        <br />
        <br />
       <button className="btn btn-info" onClick={()=>{this.setState({status:!this.state.status})}}>
         {(this.state.status)? "login":"logout"}
        </button>
    </>
    );
  }
}
export default ConditionalRenderinginClassCompo;

// class ConditionalRenderinginClassCompo extends Component {
//   render() {
//     let status = True;
//     if (status) {
//       return (
//         <>
//            True
//          </>
//       );
//     } else {
//       return (
//         <>
//           False
//         </>
//       );
//     }
//   }
// }

// export default ConditionalRenderinginClassCompo;
