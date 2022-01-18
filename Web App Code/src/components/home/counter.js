import React, { useState, useEffect } from "react";
import "../../css/style.css";
import { RiHospitalFill } from "react-icons/ri";
import { RiHotelLine, RiScissors2Line } from "react-icons/ri";
import { GiKnifeFork } from "react-icons/gi";
import CountUp from "react-countup";
import axios from "axios";
import cogoToast from "cogo-toast";

export default function Counter() {
  const [businessCounts, setBusinessCounts] = useState([]);
  React.useEffect(() => {
    axios
      .get("/api/businessCounts")
      .then(({ data }) => {
        setBusinessCounts(data);
      })
      .catch((err) => {
        cogoToast.error(err);
      });
  }, []);

  return (
    <section className=" counter bg-counter">
      <div>
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="counter-item text-center mb-5 mb-lg-0">
                <i className="color-one text-md-1">
                  <RiHotelLine />
                </i>
                <h3 className="mt-2 mb-0 text-white">
                  <span className="counter-stat font-weight-bold">
                    <CountUp
                      end={businessCounts && businessCounts?.hotels}
                      duration={5}
                    />
                  </span>{" "}
                  +
                </h3>
                <p className="text-white-50">Hotels</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="counter-item text-center mb-5 mb-lg-0">
                <i className="ti-flag color-one text-md-1">
                  <RiScissors2Line />
                </i>
                <h3 className="mt-2 mb-0 text-white">
                  <span className="counter-stat font-weight-bold">
                    {" "}
                    <CountUp
                      end={businessCounts && businessCounts?.barbers}
                      duration={5}
                    />
                  </span>
                  &nbsp; +
                </h3>
                <p className="text-white-50">Barbers</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="counter-item text-center mb-5 mb-lg-0">
                <i className="ti-layers color-one text-md-1">
                  <GiKnifeFork />
                </i>
                <h3 className="mt-2 mb-0 text-white">
                  <span className="counter-stat font-weight-bold">
                    {" "}
                    <CountUp
                      end={businessCounts && businessCounts?.resturants}
                      duration={5}
                    />
                  </span>
                  &nbsp;+
                </h3>
                <p className="text-white-50">Resturants</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="counter-item text-center">
                <i className="ti-medall color-one text-md-1">
                  <RiHospitalFill />
                </i>
                <h3 className="mt-2 mb-0 text-white">
                  <span className="counter-stat font-weight-bold">
                    {" "}
                    <CountUp
                      end={businessCounts && businessCounts?.hospitals}
                      duration={5}
                    />
                  </span>{" "}
                  +
                </h3>
                <p className="text-white-50">Hospitals</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
