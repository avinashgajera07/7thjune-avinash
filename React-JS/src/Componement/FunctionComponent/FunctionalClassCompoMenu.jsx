import React, { Component } from "react";
import { Link, Outlet } from "react-router-dom";

class FunctionalClassCompoMenu extends Component {
  render() {
    return (
      <>
        <div className="row">
          <div className="col-6 offset-6">
            <ul>
              <li><Link to="functionalclock">Clock</Link></li>
              <li><Link to="functionalcompoexample">Functional Intro</Link></li>
              <li><Link to="stateexamplefunctionalcompoexample">State Example Functional Compo</Link></li>
              <li><Link to="useeffactfunctioncompoexample">UseEffact Function Compo</Link></li>
              <li><Link to="uselayouteffactfunctioncompoexample">UseLayoutEffact Function Compo</Link></li>
              <li><Link to="usecontextfunctioncompoexample">UseContext Function Compo</Link></li>
              <li><Link to="usereducerfunctioncompoexample">UseReducer Function Compo</Link></li>
              <li><Link to="usereffunctioncompoexample">UseRef Function Compo</Link></li>
              <li><Link to="usememofunctioncompoexample">UseMemo Function Compo</Link></li>
              <li><Link to="usecallbackfunctioncompoexample">UseCallback Function Compo</Link></li>
            </ul>
          </div>
        </div>
        <Outlet></Outlet>
      </>
    );
  }
}

export default FunctionalClassCompoMenu;
