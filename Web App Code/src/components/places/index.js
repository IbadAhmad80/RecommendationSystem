import React from "react";
import NavBar from "../navbar";
import Footer from "../footer/index";
import axios from "axios";
import PlacesModal from "./pop-up";
import SinglePlace from "./singlePlace";
import GoogleMaps from "./GoogleMaps";

axios.defaults.headers.common = {
  Authorization: `BEARER ${process.env.REACT_APP_API_KEY}`,
};

const Places = () => {
  const [places, setPlaces] = React.useState([]);
  const [category, setCategory] = React.useState(null);

  const [open, setOpen] = React.useState(false);

  return (
    <div>
      <PlacesModal
        open={open}
        setOpen={setOpen}
        places={places}
        category={category}
      />
      {/* <NavBar /> */}
      <div style={{ marginTop: "0px" }}>
        <GoogleMaps
          setOpen={setOpen}
          setPlaces={setPlaces}
          setCategory={setCategory}
        />
      </div>
    </div>
  );
};

export default Places;
