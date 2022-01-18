import React from "react";
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import SinglePlace from "./singlePlace";

const PlacesModal = ({ setOpen, open, places, category }) => {
  places &&
    places?.data?.map((place) => {
      return (place.type = category);
    });

  const styles = {
    modal: {
      minWidth: "80%",
    },
  };

  return (
    <>
      {places?.data?.length > 0 && (
        <Modal
          open={open}
          onClose={() => setOpen(false)}
          styles={styles}
          closeOnEsc={false}
          closeOnOverlayClick={false}
        >
          {places.data
            .sort(
              (a, b) =>
                parseFloat(b?.system_rating || b?.rating) -
                parseFloat(a?.system_rating || a?.rating)
            )
            .map((place) => {
              return <SinglePlace place={place} key={place.id} />;
            })}
        </Modal>
      )}
    </>
  );
};

export default PlacesModal;
