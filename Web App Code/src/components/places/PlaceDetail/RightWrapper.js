import React from "react";
import styles from "./placeDetails.module.scss";
import Info from "./info";
import SimilarPlaces from "./similarPlaces";

const RightWrapper = ({ place }) => {
  return (
    <div className={styles.right_wrapper}>
      <Info place={place} />
      <h5 className="my-5 pt-5">You Might Also Consider</h5>
      <div className="mt-5">
        <SimilarPlaces
          lat={place?.lat}
          lng={place?.lng}
          business={place?.type}
        />
      </div>
    </div>
  );
};

export default RightWrapper;
