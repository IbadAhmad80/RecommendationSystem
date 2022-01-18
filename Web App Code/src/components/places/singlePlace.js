import React from "react";
import "./css/style.css";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { FiMapPin } from "react-icons/fi";
import { FaQuoteRight } from "react-icons/fa";
import { BsArrowUpRight } from "react-icons/bs";
import { useHistory } from "react-router";
import StarRatings from "react-star-ratings";

function SinglePlace({ place }) {
  const history = useHistory();
  return (
    <section class="main-content">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div class="hotel-card bg-white rounded-lg shadow overflow-hidden d-block d-lg-flex">
              <div class="hotel-card_images">
                <div>
                  <div>
                    <div>
                      <img
                        src={
                          place?.image_url ||
                          "https://eventective-media.azureedge.net/1892263_md.jpg"
                        }
                        className="place-img"
                        alt="Hotel Image"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div class="hotel-card_info p-4">
                <div class="d-flex align-items-center mb-2">
                  <h5
                    class="m-0 location-name"
                    onClick={() =>
                      history.push({
                        pathname: "/places-details",
                        state: { place },
                      })
                    }
                  >
                    {place?.name}
                  </h5>
                  <div class="mx-4" style={{ margin: "-5px 0 0 0" }}>
                    <StarRatings
                      rating={place?.system_rating || place?.rating}
                      starDimension="18px"
                      starSpacing="0px"
                      starRatedColor={"red"}
                      emptyRatedColor={"white"}
                    />
                  </div>
                  <a href="#!" class="text-dark ml-auto">
                    <i class="far fa-heart fa-lg"></i>
                  </a>
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
                    <div class="mb-2">
                      <span class="badge badge-primary">
                        {place?.system_rating || place?.rating}
                      </span>{" "}
                      <span className="small-text text-muted">
                        ( {place?.review_count} reviews )
                      </span>
                    </div>
                    <div class="amnities d-flex my-3 text-black small-text">
                      <span className="category mx-2 text-capitalize">
                        {place.categories[0]?.alias} .
                      </span>
                      <span className="price-range mx-1">
                        {place?.price || "££"} - {place?.price || "££"}
                        {place?.price?.slice(0, 1) || "£"} .
                      </span>
                      <a
                        href={place?.url}
                        className="website mx-1"
                        style={{ cursor: "pointer" }}
                      >
                        Website
                      </a>
                    </div>
                    <div className="mt-3 mb-0 d-flex">
                      <i className="quote-icon">
                        <FaQuoteRight />
                      </i>
                      <span className=" mx-2 review text-muted">
                        <span>
                          " {place?.reviews[0]?.text.slice(0, 90)} ....
                        </span>
                      </span>
                    </div>
                    <div className="mt-1 mb-3 d-flex">
                      <i className="quote-icon">
                        <FaQuoteRight />
                      </i>
                      <span className=" mx-2 review text-muted">
                        <span>
                          {" "}
                          " {place?.reviews[1]?.text.slice(0, 90)} ....
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SinglePlace;
