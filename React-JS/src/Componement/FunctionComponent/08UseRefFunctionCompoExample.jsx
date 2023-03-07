import React, { useRef } from "react";

const UseRefFunctionCompoExample = () => {
  const inputElement = useRef();
  const focusInput = () => {
    inputElement.current.focus();
  };
  return (
    <>
      <input type="text" ref={inputElement} />
      <button onClick={focusInput}>Focus Input</button>
    </>
  );
};

export default UseRefFunctionCompoExample;
