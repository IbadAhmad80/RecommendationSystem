import React from "react";
import ClipLoader from "react-spinners/ClipLoader";
import "./GoogleMaps.scss";

const Loader = () => {
  return (
    <div className="loader-wrapper">
      <div className="spinner">
        <ClipLoader color="white" loading size={105} />
      </div>
      <h4> Making Your Places Ready</h4>
    </div>
  );
};

export default Loader;
