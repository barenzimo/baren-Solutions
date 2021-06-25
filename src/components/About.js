import React from "react";
import Common from "./Common";
import web from "../images/grape/img (2).svg";
function About() {
  return (
    <div>
      <Common
        button="Contact now"
        heading="Welcome to about page"
        web1={web}
        sendTo="/contacts"
      />
    </div>
  );
}

export default About;
