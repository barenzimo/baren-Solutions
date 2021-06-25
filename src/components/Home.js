import React from "react";
import "../index.css";
import "../css/Home.css";
import web1 from "../images/grape/img (1).svg";
import Common from "./Common";

function Home() {
  return (
    <Common
      web1={web1}
      heading="Grow business with"
      button="Get Started"
      sendTo="/services"
    />
  );
}

export default Home;
