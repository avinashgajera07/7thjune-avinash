import React from "react";
import { useReducer } from "react";

function reducerfunction(state, action) {
  console.log("state", state);
  console.log("action", action);
  switch (action.type) {
    case "incremented_age": {
      return {
        name: state.name,
        age: state.age + 1,
      };
    }
  }
  throw Error("Unkown action:" + action.type);
}
const UseReducerFunctionCompoExample = () => {
  const [state, dispatch] = useReducer(reducerfunction, {
    name: "Taylor",
    age: 42,
  });
  function handleButtonClick() {
    dispatch({ type: "incremented_age" });
  }
  return (
    <>
      {/* {JSON.stringify(state)}
      {JSON.stringify(state.age)} */}
      <button onClick={handleButtonClick}>Click</button>
      <p>Hello,{state.name}.Your age is{state.age}.</p>
    </>
  );
};

export default UseReducerFunctionCompoExample;
