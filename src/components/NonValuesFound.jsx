import React from "react";
import { Link } from "react-router-dom";
const NonValuesFound = () => {
  return (
    <>
      {" "}
      <div id="messageNotFound">
        <h2>No values found for this search</h2>
      </div>
      <Link to="/" className="nonValuesFound">
        Go to Home Page
      </Link>
    </>
  );
};

export default NonValuesFound;
