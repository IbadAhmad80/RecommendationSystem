import React, { useState } from "react";
import "./styles.css";
import { useAuthState } from "react-firebase-hooks/auth";
import { db } from "../../../../firebase";
import { auth } from "../../../../firebase";
import cogoToast from "cogo-toast";
import StarRatings from "react-star-ratings";
import { useHistory } from "react-router";
import axios from "axios";

const CreateComments = ({ place, reviews, location }) => {
  const [review, setReview] = useState("");
  const [rating, setRating] = useState(0);
  const history = useHistory();
  const [user, loading] = useAuthState(auth);
  const [currentUser, setCurrentUser] = useState(null);
  const [userImage, setUserImage] = useState(null);
  const [reviewCheck, setReviewCheck] = useState(true);

  const changeRating = (newRating, name) => {
    setRating(newRating);
  };

  const fetchUserName = async () => {
    try {
      const query = await db
        .collection("users")
        .where("uid", "==", user?.uid)
        .get();

      const data = await query.docs[0]?.data();
      setCurrentUser(data);
      setUserImage(data?.photoURL);
    } catch (err) {
      console.error(err);
      alert("An error occured while fetching user data");
    }
  };

  const handleSubmit = () => {
    if (!currentUser)
      history.replace({
        pathname: "/sign-in",
        state: {
          place,
        },
      });
    else {
      if (reviewCheck) {
        cogoToast.warn("Max one Review Allowed");
        return;
      }
      if (rating === 0) {
        cogoToast.error("Rating should be greater than 0");
        return;
      }
      if (review.length < 20) {
        cogoToast.error("Review length should be greater than 30");
        return;
      }

      axios
        .post("/api/addReview", {
          userID: currentUser?.email,
          longitude: place?.lng,
          latitude: place?.lat,
          category: place?.type,
          id: place?.id,
          review: {
            id: currentUser?.id,
            rating: rating,
            text: review,
            user: {
              name: currentUser?.name,
              image_url: currentUser?.photoURL || null,
              id: currentUser?.uid,
            },
          },
        })
        .then((res) => {
          if (res?.status === 205) {
            cogoToast.error("You have to give review in English language only");
            return;
          } else {
            const payload = {
              lat: place?.lat,
              lng: place?.lng,
              id: place?.id,
              business: place?.type,
            };
            if (res.status === 200) {
              axios.post("/api/updateRating", payload).then(({ data }) => {
                cogoToast.info("Review added successfully");
                window.location.reload();
              });
            }
            setReview("");
            setRating(0);
          }
        });
    }
  };

  React.useEffect(() => {
    if (loading) return;
    if (!user) {
      cogoToast.error("Please Log in / Sign Up First!");
    } else {
      cogoToast.success(`Welcome!`);
      fetchUserName();
    }
  }, [user, loading, history?.location?.key]);

  React.useEffect(() => {
    if (currentUser && reviews) {
      const isAlreadyReviewed = reviews.some((review) => {
        return review.user?.id === currentUser.uid;
      });

      if (!isAlreadyReviewed) {
        setReviewCheck(false);
      }
    }
  }, [currentUser, reviews, history?.location?.key]);

  return (
    <div>
      <div class="main_wrapper mt-5 pt-4">
        <h4>Add a Comment</h4>
        <div class="row mt-4">
          <div class="col-md-12 col-lg-1">
            {userImage ? (
              <img
                src={userImage}
                className="user_image ounded-circle mt-2"
                alt="user img"
              />
            ) : (
              <p className="user_image">
                {currentUser?.name.slice(0, 1) || "?"}{" "}
              </p>
            )}
          </div>
          <div class="col-md-12 col-lg-10 px-md-0 px-lg-4">
            <div class="comment-box px-3">
              <h6>
                {currentUser?.name.split(" ")[0]}
                {currentUser?.name.split[1]?.slice(0, 1)}&nbsp; .
              </h6>
              <div class="rating pt-1 pb-3">
                <StarRatings
                  rating={rating}
                  starRatedColor="red"
                  changeRating={changeRating}
                  numberOfStars={5}
                  starDimension="18px"
                  starSpacing="0px"
                  setHoverColor={"red"}
                  name="rating"
                />
              </div>
              <div class="comment-area pt-3">
                <textarea
                  class="w-100 p-2 px-3"
                  placeholder="what is your view?"
                  rows="4"
                  value={review}
                  onChange={(e) => setReview(e.target.value)}
                ></textarea>{" "}
              </div>
              <div class="comment-btns mt-4">
                <div class="row">
                  <div class="col-12 d-flex justify-content-center">
                    <div class="pull-left">
                      <button class="p-2 px-5" onClick={handleSubmit}>
                        Create
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateComments;
