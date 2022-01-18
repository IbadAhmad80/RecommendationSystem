import React, { useState, useEffect } from "react";
import { BsBoxArrowUpRight } from "react-icons/bs";
import { FiPhoneCall } from "react-icons/fi";
import { GoLocation } from "react-icons/go";
import styles from "./placeDetails.module.scss";

const Info = ({ place }) => {
  const [tel, _] = useState(`tel:${place?.display_phone}`);
  return (
    <div className={styles.info_wrapper}>
      <div className={styles.single_info}>
        <p>Visit Website</p>
        <i>
          <a href={place?.url} target="_blank" style={{ color: "inherit" }}>
            <BsBoxArrowUpRight />
          </a>
        </i>
      </div>
      <div className={styles.single_info}>
        <p>{place?.display_phone}</p>

        <i>
          <FiPhoneCall />
        </i>
      </div>
      <div className={styles.single_info}>
        <p>
          {place?.location?.display_address[2] ||
            place?.location?.display_address[1]}
        </p>
        <i>
          <GoLocation />
        </i>
      </div>
    </div>
  );
};

export default Info;
