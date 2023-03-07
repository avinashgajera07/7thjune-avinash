import React, { Component } from "react";
import PropTypes from "prop-types";

class StatelifecycleinClassCompo extends Component {
    constructor(props){
        super(props);
        this.state={
            trunoff:true
        }
  }

  // componentWillMount() {
  //     console.log("componentWillMount")

  // }

  componentDidMount() {
    console.log("componentDidMount");
  }

  // componentWillReceiveProps(nextProps) {
  //     console.log("componentWillReceiveProps")

  // }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldComponentUpdate");
    return true
  }

  // componentWillUpdate(nextProps, nextState) {
  //     console.log("componentWillUpdate")

  // }

  componentDidUpdate(prevProps, prevState) {
    console.log("componentDidUpdate");
  }

  componentWillUnmount() {
    console.log("componentWillUnmount");
  }

  render() {
    console.log("render");
    return (
      <div>
        <button
          onClick={() => {
            this.setState({ trunonoff: !this.state.trunonoff });
          }}
        >
          {this.state.trunonoff ? "On" : "Off"}
        </button>
      </div>
    );
  }
}
StatelifecycleinClassCompo.propTypes = {};

export default StatelifecycleinClassCompo;
