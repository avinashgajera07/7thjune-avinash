import React from "react";
import { Link, Outlet } from "react-router-dom";
import Headerfile from "./02HeaderFile.jsx";

const Examples = () => {
  return (
    <>
      <Headerfile />
      <div className="container">
        <div className="row my-3">
          <div className="col-6">
            <Link to="Classcomponent">Class Component</Link>
          </div>
          <div className="col-6">
            <Link to="functionalcomponent">Functional Component</Link>
          </div>
        </div>
        <div className="row my-3">
          <div className="col">
            <Outlet></Outlet>
          </div>
        </div>
      </div>
    </>
  );
};

export default Examples;
