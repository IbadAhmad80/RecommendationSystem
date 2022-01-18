import * as React from "react";
import "./map-styles.css";

export default function Map({ locations }) {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="mapBox ">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3405.4138098080793!2d74.21044541465398!3d31.4027230600849!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3918ffd0bc7c5f71%3A0x879e9b82857bcd94!2sCOMSATS%20University%2C%20Lahore%20Campus!5e0!3m2!1sen!2s!4v1632636769167!5m2!1sen!2s"
        allowFullScreen=""
        loading="lazy"
        title="comsats university"
      ></iframe>
    </div>
  );
}
