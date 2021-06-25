import React from "react";

function Card(props) {
  return (
    <div>
      <div className="card mx-2">
        <img
          className="card-img-top"
          src={props.web}
          style={{ height: "15rem" }}
          alt="Card image cap"
        />
        <div className="card-body">
          <h5 className="card-title  ">{props.title}</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="#" className="btn home__btn">
            Check Now
          </a>
        </div>
      </div>
    </div>
  );
}

export default Card;
