import React from "react";
import { createBrowserRouter } from "react-router-dom";
import LoginPage from "./LoginPage.jsx";
import HomePage from "./HomePage.jsx";
import FeaturesPage from "./FeaturesPage.jsx";
import AboutUsPage from "./AboutUsPage.jsx";
import Examples from "./Examples.jsx";
import ContactPage from "./Contact.jsx";
// import ClassComponent from "./Componement/ClassComponent/ClassRoute.jsx";
import { Suspense } from "react";

const ClassComponent = React.lazy(() => import('./Componement/ClassComponent/ClassRoute'))
const FunctionalComponent = React.lazy(() => import('./Componement/FunctionComponent/FunctionalClassRoute'))
const MainRoutes = createBrowserRouter([
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/home",
    element: <HomePage />,
  },
  {
    path: "/features",
    element: <FeaturesPage />,
  },
  {
    path: "/about",
    element: <AboutUsPage />,
  },
  {
    path: "/contact",
    element: <ContactPage />,
  },
  {
    path: "/examples",
    element: <Examples />,
    children: [
      {
        path: "classcomponent/*",
        element: <Suspense fallback={<h2>Loading...</h2> }><ClassComponent /></Suspense>,
      },
      {
        path: "functionalcomponent/*",
        element: <Suspense fallback={<h2>Loading...</h2> }><FunctionalComponent /></Suspense>,
      },
    ],
  },
]);

export default MainRoutes;
