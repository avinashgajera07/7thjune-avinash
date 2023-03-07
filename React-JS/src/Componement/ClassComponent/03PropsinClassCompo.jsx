import React from "react";
import CustomCard from "./04CompoForCard"

const PropsinClassCompo = () => {
  return (
    <>
  <div className="container">
    <div className="row">
      <div className="col-lg-3 col-md-4 col-sm-6">
        <CustomCard></CustomCard>
      </div>
      <div className="col-lg-3 col-md-4 col-sm-6">
        <CustomCard></CustomCard>
      </div>
      <div className="col-lg-3 col-md-4 col-sm-6">
        <CustomCard></CustomCard>
      </div>
      <div className="col-lg-3 col-md-4 col-sm-6">
        <CustomCard></CustomCard>
      </div>
    </div>
  </div>

    
    </>
  );
};

export default PropsinClassCompo;
