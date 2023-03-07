import React, { Component } from 'react';
import { Link, Outlet } from "react-router-dom";

class ClassCompoMenu extends Component {
  render() {
    return (
      <>
        <ul>
          <li><Link to="classcompointro">Class Compo Intro</Link></li>
          <li><Link to="jsxclasscompo">JSX Class Compo</Link></li>
          <li><Link to="propsinclasscompo">Props Class Compo</Link></li>
          <li><Link to="stateinclasscompo">State Class Compo</Link></li>
          <li><Link to="statelifecycleinclasscompo">Statelifecycle Class Compo</Link></li>
          <li><Link to="ConditionalRenderinginClassCompo">ConditionalRendering Class Compo</Link></li>
          <li><Link to="listandkeyinclasscompo">List and Key Class Compo </Link></li>
          <li><Link to="controllinclasscompo">Controll Class Compo </Link></li>
          <li><Link to="uncontrollinclasscompo">Uncontroll Class Compo </Link></li>
          <li><Link to="apiexample">APIExample</Link></li>
          <li><Link to="spreadvsrest">Spread vs Rest Compo </Link></li>
          <li><Link to="compositionvsinheritance">Composition vs. Inheritance </Link></li>
          <li><Link to="cssexample">CssExample </Link></li>
          <li><Link to="stylecompoexample">StyleCopmoExample </Link></li>
        </ul>
        <Outlet></Outlet>
      </>
    )
  }
}

export default ClassCompoMenu;
