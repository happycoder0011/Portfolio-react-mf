import React from "react";
import Name from "./component/Name";
import Navbar from "./component/Navbar";
import Stars from "./component/Star";

function LandingPage() {
  return (
    <div className="star__body">
      <Navbar />
      <Stars>
        <Name />
      </Stars>
    </div>
  );
}

export default LandingPage;
