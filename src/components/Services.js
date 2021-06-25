import React from "react";
import webDev from "../images/webDev.jpg";
import Sdata from "./Sdata";
import Card from "./Card";

function Services() {
  return (
    <div className="container" id="services">
      <div className="row">
        <div className="col-10 mx-auto">
          {/* page starts here */}
          <h1 className="contact__h1 my-3">Services</h1>
          <div className="row my-3 ">
            {/* card */}
            {Sdata.map((element, i) => {
              return (
                <div className="col-md-6 col-lg-4 col-sm-6 col-xs-6 gy-4 ">
                  <Card web={element.web} title={element.title} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
