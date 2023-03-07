import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const Stateexamplefunctionalcompoexample = () => {
    const [statedata,setData] = useState("something")
    const [count,setcount] = useState(0)
    let  data = "something"
    // useEffect(()=>{    
    //     console.log("useeffact called");    // By defualt call kari ne aape ane fari btn par click kari to biji vakhat call thay.
    // })

    // on mount method
    //  useEffect(()=>{
    //     console.log("useeffact called");
    //     return btnclick()          // jyare te page par thi leave thay tyare return kari ne aape.
    // })

    // useEffect(()=>{
    //     console.log("useeffact called");
    // },[])                   // btn click kari tyare ek j vakhat called kari ne aape.

    useEffect(()=>{
        console.log("useeffact called");
    },[statedata])
    
    let btnclick = () =>{
        console.log("btnclick called");
        data = "checking"
        console.log(data);
        setData("data")
    }
    let increment = ()=>{
        setcount(count+1)
    }
    let decrement = ()=>{
        setcount(count-1)
    }
    return (
        <>
             simple varible data: {data}
            <br />
            state data: {statedata}
            <br />
            <button onClick={btnclick}>Click</button>
            <br />
            <button onClick={increment}>increment</button> {count} <button onClick={decrement}>decrement</button>
           <br /> <br />
            <h2>What is React useEffect Hook? </h2>
            <p>useEffect hook is part of React's Hooks API. The core principle of this hook is to let you perform side effects in your functional components. The useEffect hook is a smooth combination of React's lifecycle methods like componentDidMount, componentDidUpdate and componentWillUnmount. According to React documentation, the useEffect hook was developed to overcome some challenges posed by the life cycle methods of ES6 class components.  </p>
            <p>
                Sometimes, we want to run some code after the DOM has been updated. It can be anything, showing pop-ups, sending API requests, logging users’ information etc. and such functions don’t require cleanup to be performed. They are just hit-once functions and then we forget about them. Such places are the best examples to use the useEffect hook.
            </p>
            <h3>Basic Usage of useEffect in React   </h3>
            <ul><li><span data-contrast="auto" lang="EN">Before using useEffect hook, you need to know exactly when the component will be (re)rendered, as effects are executed after each rendering cycle.</span><span data-ccp-props="{&quot;201341983&quot;:0,&quot;335551550&quot;:6,&quot;335551620&quot;:6,&quot;335559739&quot;:240,&quot;335559740&quot;:276}">&nbsp;</span></li><li><span data-contrast="auto" lang="EN">Effects are always run after rendering, but there is an option to opt&nbsp;out of this behavior.</span><span data-ccp-props="{&quot;201341983&quot;:0,&quot;335551550&quot;:6,&quot;335551620&quot;:6,&quot;335559739&quot;:240,&quot;335559740&quot;:276}">&nbsp;</span></li><li><span data-contrast="auto" lang="EN">Rejecting or skipping an effect requires understanding basic JavaScript concepts about values. The effect will only run again if at least one of the values specified in the effect's dependencies has changed since the last rendering cycle.</span><span data-ccp-props="{&quot;201341983&quot;:0,&quot;335551550&quot;:6,&quot;335551620&quot;:6,&quot;335559739&quot;:240,&quot;335559740&quot;:276}">&nbsp;</span></li><li><span data-contrast="auto" lang="EN">Components should not be re-rendered unnecessarily. This is another strategy for skipping unnecessary repetitions of effects.</span><span data-ccp-props="{&quot;201341983&quot;:0,&quot;335551550&quot;:6,&quot;335551620&quot;:6,&quot;335559739&quot;:240,&quot;335559740&quot;:276}">&nbsp;</span></li><li><span data-contrast="auto" lang="EN">It should be understood that functions&nbsp;defined in the body of a function component are rebuilt every render cycle. This has implications when used within effects. There is a strategy to deal with this (pull it up outside the component, define it inside the effect, use&nbsp;useCallback).</span><span data-ccp-props="{&quot;201341983&quot;:0,&quot;335551550&quot;:6,&quot;335551620&quot;:6,&quot;335559739&quot;:240,&quot;335559740&quot;:276}">&nbsp;</span></li><li><span data-contrast="auto" lang="EN">You should understand basic JavaScript concepts such as old closures. If you don't understand this, you can struggle to resolve issues with stale props and state values in your effects. I have a strategy to solve this. B. Using the Effect Dependency Array or&nbsp;useRef&nbsp;hooks.</span><span data-ccp-props="{&quot;201341983&quot;:0,&quot;335551550&quot;:6,&quot;335551620&quot;:6,&quot;335559739&quot;:240,&quot;335559740&quot;:276}">&nbsp;</span></li><li><span data-contrast="auto" lang="EN">Don't ignore suggestions from the React Hooks ESLint plugin. Don't blindly remove dependencies (ignoring ESLint warnings blindly) or carelessly use ESLint's disabled comments. An error has likely occurred.</span><span data-ccp-props="{&quot;201341983&quot;:0,&quot;335551550&quot;:6,&quot;335551620&quot;:6,&quot;335559739&quot;:240,&quot;335559740&quot;:276}">&nbsp;</span></li></ul>

            <h2>Cleaning up an effect</h2>
            <p>Often, effects create resources that need to be cleaned up before the component leaves the screen, such as a subscription or timer ID. To do this, the function passed to useEffect may return a clean-up function. For example, to create a subscription:</p>



            <h2>Conditionally firing an effect</h2>
            <p>
                The default behavior for effects is to fire the effect after every completed render. That way an effect is always recreated if one of its dependencies changes.
            </p>
            <p>

                However, this may be overkill in some cases, like the subscription example from the previous section. We don’t need to create a new subscription on every update, only if the source prop has changed.
            </p>
            <p>
                To implement this, pass a second argument to useEffect that is the array of values that the effect depends on. Our updated example now looks like this:

            </p>
        </>
    );
};

export default Stateexamplefunctionalcompoexample;