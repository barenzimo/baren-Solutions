import React from "react";
import "../index.css";
import "../css/Home.css";
import web from "../images/grape/img (1).svg";
import { NavLink } from "react-router-dom";

function Common(props) {
  return (
    <div className="home container-fluid ">
      <div className="row">
        <div className="col-10 mx-auto home">
          {/* main content and images----------------------------------------------------------------
          Use always mt-4 for spacing between elements */}
          <div className="row">
            <div className=" col-lg-6 col-md-12 order-2 order-lg-1   d-flex flex-column justify-content-center home__content">
              <h1 className="mb- home__h1 mt-3 ">
                {props.heading} <br></br>{" "}
                <span className="fw-bold h1__span ">Baren Soulutions</span>
              </h1>
              <p className="mb-2 home__p mediaHome__p mt-4">
                I'm a freelance Web Developer proficent in making good UI
                websites and and high optimized web Apps
              </p>
              {/* button */}
              <div className="buttonStarted mt-4">
                <NavLink
                  className="btn btn-outline-danger btn-lg home__btn "
                  to={props.sendTo}
                >
                  {props.button}
                </NavLink>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 order-1 order-lg-2  h-50 ">
              <img
                className="home__img  "
                src={props.web1}
                alt="designer-image"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Common;
