import React from "react";
import "../css/style.css";
import { FiMapPin } from "react-icons/fi";

import { useHistory } from "react-router";
import StarRatings from "react-star-ratings";
import axios from "axios";

const SimilarPlaces = ({ lat, lng, business }) => {
  const history = useHistory();
  const [places, setPlaces] = React.useState(null);
  React.useEffect(() => {
    const getFamousPlaces = async () => {
      const { data } = await axios.get(
        `/api/similarBuisness?lat=${lat}&lng=${lng}&business=${business}`
      );
      setPlaces(data);
    };
    getFamousPlaces();
  }, []);

  return (
    <div>
      <section>
        <div class="container">
          <div class="row">
            {places &&
              places.map((place) => {
                return (
                  <div class="col-12 mb-5" index={place?.id}>
                    <div class="hotel-card bg-white rounded-lg shadow overflow-hidden d-block d-lg-flex">
                      <div class="hotel-card_images">
                        <div>
                          <img
                            src={
                              place?.image_url ||
                              "https://eventective-media.azureedge.net/1892263_md.jpg"
                            }
                            className="similar-place-img"
                            alt="Hotel Image"
                          />
                        </div>
                      </div>
                    </div>
                    <div class="hotel-card_info  pt-3 pb-4 px-2">
                      <div class="d-flex align-items-center mb-0">
                        <h6
                          class="mb-0 location-name"
                          onClick={() =>
                            history.push({
                              pathname: "/places-details",
                              state: { place },
                            })
                          }
                        >
                          {place?.name}
                        </h6>
                      </div>
                      <div class=" my-1 mx-2">
                        <StarRatings
                          rating={place?.rating}
                          starDimension="18px"
                          starSpacing="0px"
                          starRatedColor={"red"}
                          emptyRatedColor={"white"}
                        />
                      </div>
                      <div class="d-flex justify-content-between align-items-end">
                        <div class="hotel-card_details">
                          <div class="text-black mb-2">
                            <i class="fas fa-map-marker-alt">
                              <FiMapPin />
                            </i>
                            <span className="small-text mx-2">
                              {place?.location.address1}, {place?.location.city}
                            </span>
                          </div>
                          {/*here goes that section*/}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default SimilarPlaces;

// <div className="mt-0 mb-0">
// <i className="quote-icon">
//   <FaQuoteRight />
// </i>
// <span className=" mx-2 review text-muted">
//   <span>
//     " {place?.reviews[0]?.text.slice(0, 70)} ....
//   </span>
// </span>
// </div>
