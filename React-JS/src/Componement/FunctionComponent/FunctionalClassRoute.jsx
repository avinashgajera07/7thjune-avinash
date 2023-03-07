import React, { Component } from 'react';
import  { Route, Routes } from 'react-router-dom';
import FunctionalClassCompoMenu from './FunctionalClassCompoMenu'
import Clock from './01Clock.jsx'
import FunctionalCompoExample from './02FunctionalCompoExample.jsx'
import StateExampleFunctionalCompoExample from './03Stateexamplefunctionalcompoexample.jsx'
import UseEffactFunctionCompoExample from './04UseEffactFunctionCompoExample.jsx'
import UseLayoutEffactFunctionCompoExample from './05UseLayoutEffactFunctionCompoExample.jsx'
import UseContextFunctionCompoExample from './06UseContextFunctionCompoExample.jsx'
import UseReducerFunctionCompoExample from './07UseReducerFunctionCompoExample.jsx'
import UseRefFunctionCompoExample from './08UseRefFunctionCompoExample.jsx'
import UseMemoFunctionCompoExample from './09UseMemoFunctionCompoExample.jsx'
import UseCallbackFunctionCompoExample from './10UseCallbackFunctionCompoExample.jsx'

class FunctionalClassRoute extends Component {
  render() {
    return (
      <>
        <Routes>
          <Route path="/" element={<FunctionalClassCompoMenu/>}>
            <Route path='functionalclock' element={<Clock/>}></Route>
            <Route path='functionalcompoexample' element={<FunctionalCompoExample />}></Route>
            <Route path='stateexamplefunctionalcompoexample' element={<StateExampleFunctionalCompoExample />}></Route>
            <Route path='useeffactfunctioncompoexample' element={<UseEffactFunctionCompoExample />}></Route>
            <Route path='uselayouteffactfunctioncompoexample' element={<UseLayoutEffactFunctionCompoExample />}></Route>
            <Route path='usecontextfunctioncompoexample' element={<UseContextFunctionCompoExample />}></Route>
            <Route path='usereducerfunctioncompoexample' element={<UseReducerFunctionCompoExample />}></Route>
            <Route path='usereffunctioncompoexample' element={<UseRefFunctionCompoExample />}></Route>
            <Route path='usememofunctioncompoexample' element={<UseMemoFunctionCompoExample />}></Route>
            <Route path='usecallbackfunctioncompoexample' element={<UseCallbackFunctionCompoExample />}></Route>
          </Route>
          
        </Routes>
      </>
    );
  }
}

export default FunctionalClassRoute;
