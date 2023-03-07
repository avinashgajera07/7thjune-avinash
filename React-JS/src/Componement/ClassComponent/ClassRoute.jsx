import React, { Component } from 'react';
import  { Route, Routes } from 'react-router-dom';
import ClassCompoMenu from './ClassCompoMenu.jsx'
import WelcomeToClassCompo from './01WelcomeToClassCompo.jsx'
import JSXClassCompo from './02JSXClassCompo.jsx'
import PropsinClassCompo from './03PropsinClassCompo.jsx'
import StateinClassCompo from './05StateinClassCompo.jsx'
import StatelifecycleinClassCompo from './06StatelifecycleinClassCompo.jsx'
import ConditionalRenderinginClassCompo from './07ConditionalRenderinginClassCompo.jsx'
import ListAndKeyInClassCompo from './08ListAndKeyInClassCompo.jsx'
import ControllInClassCompo from './09controllinclassCompo.jsx'
import UncontrollInClassCompo from './10uncontrollinclassCompo.jsx'
import APIExample from './11apiexample.jsx'
import SpreadvsRestCompo from './12SpreadvsRestCompo.jsx'
import CompositionvsInheritanceCompo from './13CompositionvsInheritanceCompo.jsx'
import CssExampleCompo from './14CssExampleCompo.jsx'
import StyleCompoExampleCompo from './15StyleCompoExampleCompo.jsx'


class ClassRoute extends Component {
  render() {
    return (
      <>
        <Routes>
          <Route path="/" element={<ClassCompoMenu />} />
          <Route path="classcompointro" element={<WelcomeToClassCompo />}></Route>
          <Route path="jsxclasscompo" element={<JSXClassCompo />}></Route>
          <Route path="propsinclasscompo" element={<PropsinClassCompo />}></Route>
          <Route path="stateinclasscompo" element={<StateinClassCompo />}></Route>
          <Route path="statelifecycleinclasscompo" element={<StatelifecycleinClassCompo />}></Route>
          <Route path="conditionalrenderinginclasscompo" element={<ConditionalRenderinginClassCompo />}></Route>
          <Route path="listandkeyinclasscompo" element={<ListAndKeyInClassCompo />}></Route>
          <Route path="controllinclasscompo" element={<ControllInClassCompo />}></Route>
          <Route path="uncontrollinclassCompo" element={<UncontrollInClassCompo />}></Route>
          <Route path="apiexample" element={<APIExample />}></Route>
          <Route path="spreadvsrest" element={<SpreadvsRestCompo />}></Route>
          <Route path="compositionvsinheritance" element={<CompositionvsInheritanceCompo />}></Route>
          <Route path="cssexample" element={<CssExampleCompo />}></Route>
          <Route path="stylecompoexample" element={<StyleCompoExampleCompo />}></Route>
        </Routes>
      </>
    );
  }
}

export default ClassRoute;
