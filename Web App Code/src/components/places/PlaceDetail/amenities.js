import React from "react";
import styles from "./placeDetails.module.scss";
import { AiTwotoneCalendar } from "react-icons/ai";
import { RiEBike2Fill, RiSurgicalMaskFill } from "react-icons/ri";
import { BiCoffeeTogo } from "react-icons/bi";
import { BiBed } from "react-icons/bi";
import { MdLocalPharmacy } from "react-icons/md";
import { RiHandSanitizerLine } from "react-icons/ri";
import { BiDrink } from "react-icons/bi";

const Amenities = ({ place }) => {
  return (
    <div className={styles.amenities_wrapper}>
      <h4>Amenities and More</h4>
      <div className={styles.flex_wrap}>
        {(place?.type === "restaurants" || place?.type === "hotels") && (
          <div>
            <i>
              <AiTwotoneCalendar />
            </i>
            <p>Takes Reservations</p>
          </div>
        )}
        {(place?.type === "hospitals" || place?.type === "barbers") && (
          <div>
            <i>
              <RiHandSanitizerLine />
            </i>
            <p>Hand Sanitizers</p>
          </div>
        )}
        {place?.type === "hospitals" && (
          <div>
            <i>
              <BiBed />
            </i>
            <p>Bedding Facility</p>
          </div>
        )}
        {place?.type === "barbers" && (
          <div>
            <i>
              <BiDrink />
            </i>
            <p>Free Beverages</p>
          </div>
        )}

        {place?.type === "hospitals" && (
          <div>
            <i>
              <MdLocalPharmacy />
            </i>
            <p>Own Pharmacy</p>
          </div>
        )}
        {place?.type === "restaurants" && (
          <div>
            <i>
              <RiEBike2Fill />
            </i>
            <p>Offers Delivery</p>
          </div>
        )}
        {(place?.type === "restaurants" || place?.type === "hotels") && (
          <div>
            <i>
              <BiCoffeeTogo />
            </i>
            <p>Offers Takeout</p>
          </div>
        )}
        <div>
          <i>
            <RiSurgicalMaskFill />
          </i>
          <p>Masks required</p>
        </div>
      </div>
    </div>
  );
};

export default Amenities;
