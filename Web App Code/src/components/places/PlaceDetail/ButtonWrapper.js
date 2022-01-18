import React, { useState } from "react";
import { BsStar, BsHeart } from "react-icons/bs";
import styles from "./placeDetails.module.scss";
import { useHistory } from "react-router";
import cogoToast from "cogo-toast";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "../../../firebase";
import axios from "axios";

const ButtonWrapper = ({ place }) => {
  const history = useHistory();
  const [user, loading] = useAuthState(auth);
  const [currentUser, setCurrentUser] = useState(null);
  const [isAlreadyFavourite, setAlreadyFavourite] = useState(false);

  React.useEffect(() => {}, []);

  const fetchUserName = async () => {
    try {
      const query = await db
        .collection("users")
        .where("uid", "==", user?.uid)
        .get();

      const data = await query.docs[0]?.data();
      axios
        .post("/api/favPlaceExist", {
          userID: data?.email,
          favPlaces: [place],
        })
        .then((res) => {
          if (res.status === 201) {
            setAlreadyFavourite(true);
          } else setAlreadyFavourite(false);
        });
      setCurrentUser(data);
    } catch (err) {
      console.error(err);
      cogoToast.error("An error occured while fetching user data");
    }
  };

  React.useEffect(() => {
    if (loading) return;
    if (!user) {
    } else {
      fetchUserName();
    }
  }, [user, loading, history?.location?.key]);

  const handleSubmit = () => {
    if (!currentUser)
      history.replace({
        pathname: "/sign-in",
        state: {
          place,
        },
      });
    else {
      axios
        .post("/api/addFavPlace", {
          userID: currentUser?.email,
          favPlaces: [place],
        })
        .then(({ status, data }) => {
          if (status === 200) {
            cogoToast.info("Place added to Favourites");
            setAlreadyFavourite(true);
          } else if (status === 201) {
            cogoToast.warn("Place already exist in your Favourite List");
          }
        });
    }
  };

  return (
    <div className={styles.button_wrapper}>
      <div
        className={styles.review_btn}
        style={{
          backgroundColor: isAlreadyFavourite && "red",
          color: isAlreadyFavourite && "white",
          border: isAlreadyFavourite && "none",
        }}
      >
        <button
          onClick={handleSubmit}
          style={{
            color: isAlreadyFavourite && "white",

            outline: isAlreadyFavourite && "none",
          }}
        >
          Add to Favourites
        </button>
        <i
          className={styles.icon}
          style={{
            color: isAlreadyFavourite && "white",
          }}
        >
          <BsHeart />
        </i>
      </div>
    </div>
  );
};

export default ButtonWrapper;
