import React from "react";
import { useState } from "react";
import styles from "./placeDetails.module.scss";
import Footer from "../../footer/index";
import PlaceHeroSection from "./HeroSection";
import ButtonWrapper from "./ButtonWrapper";
import LeftWrapper from "./LeftWrapper";
import RightWrapper from "./RightWrapper";
import NavBar from "../../navbar/index";
import { useHistory } from "react-router";
import axios from "axios";

function PlaceDetails({
  history: {
    location: { state },
  },
}) {
  const history = useHistory();
  const [singlePlace, setSinglePlace] = useState(null);

  React.useEffect(() => {
    window.scrollTo(0, 0);
    if (!state?.place) history.replace("/");

    // call api again

    axios
      .get(
        `/api/fetch?lat=${state?.place.lat}&lng=${state?.place.lng}&business=${state?.place.type}&id=${state?.place.id}`
      )
      .then(({ data }) => {
        setSinglePlace(data);
      });
  }, [history?.location?.key]);

  return (
    <>
      <div className={styles.main_wrapper}>
        <PlaceHeroSection place={state?.place} updatedPlace={singlePlace} />
        <ButtonWrapper place={state?.place} />
        <div className={styles.body_wrapper}>
          <LeftWrapper place={singlePlace} reviews={singlePlace?.reviews} />
          <RightWrapper place={state?.place} />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default PlaceDetails;
