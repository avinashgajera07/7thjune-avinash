import React from "react";
import { useMemo } from "react";
import { useState } from "react";

const UseMemoFunctionCompoExample = () => {
  const [counterOne, setcounterOne] = useState(0);
  const [counterTwo, setcounterTwo] = useState(0);

  const IncrementOne = () => {
    setcounterOne(counterOne + 1);
  };
  const IncrementTwo = () => {
    setcounterTwo(counterTwo + 1);
  };

  const isEven = useMemo(() => {
    // jyare koi ek functinallty slow chalati hoy ane tena liddhe biju function slow na thay tena mate usememo no use thay 6e
    console.log("called");
    let i = 0;
    while (i < 2000000000) i++;
    return counterOne % 2 === 0;
  }, [counterOne]);

  // const isEven=()=>{
  //     let i=0;
  //     while(i<2000000000) i++;
  //     return counterOne%2===0
  // }
  return (
    <>
      <button onClick={IncrementOne}>CounterOne-{counterOne}</button>
      <span>{isEven ? "Even" : "Odd"}</span>
      <br />
      <button onClick={IncrementTwo}>CounterTwo-{counterTwo}</button>
      <br /> <br />
        <h2>Use Memo</h2>
        <p>The React useMemo Hook returns a memoized value.</p>
        <p>The useMemo Hook only runs when one of its dependencies update.</p>
    </>
  );
};

export default UseMemoFunctionCompoExample;
