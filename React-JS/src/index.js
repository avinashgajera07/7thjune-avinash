import React from "react";
import ReactDOM from "react-dom/client";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
// import ComponentExample from "./01ComponentExample";
import Headerfile from "./02HeaderFile";
import MainRoutes from "./MainRoutes";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <RouterProvider router={MainRoutes} />
    {/* <MainRoutes></MainRoutes>  */}
    {/* <Headerfile/> */}
    {/* <HeaderCompo />
    <ComponentExample /> */}
  </>
);
