import React from "react";
import styles from "./placeDetails.module.scss";
import StarRatings from "react-star-ratings";

const Reviews = ({ place }) => {
  return (
    <>
      <h4 style={{ marginTop: "1rem" }}>What People Say</h4>
      {place?.reviews?.map(
        ({ id, text, rating, user: { name, image_url } }) => {
          return (
            <div className={styles.author_section} key={id}>
              <div className={styles.top_flex}>
                <div>
                  {image_url ? (
                    <img src={image_url} className={styles.review_img} />
                  ) : (
                    <p className={styles.review_generated_img}>
                      {name?.slice(0, 1)}
                    </p>
                  )}{" "}
                </div>

                <div className={styles.review_content}>
                  <h6>{name || "Anonymus"}</h6>
                  <div>
                    <StarRatings
                      rating={rating}
                      starRatedColor="red"
                      numberOfStars={5}
                      starDimension="18px"
                      starSpacing="0px"
                      setHoverColor={"red"}
                      name="rating"
                    />
                  </div>
                  <p style={{ margin: "1em 0 0 0" }}>{text?.slice(0, 1000)}</p>
                </div>
              </div>
            </div>
          );
        }
      )}
    </>
  );
};

export default Reviews;
