import React from "react";
import "../../css/style.css";
import { Link } from "react-router-dom";

export default function HeroSection() {
  return (
    <div className="main-wrapper ">
      <section className="slider">
        <div>
          <div className="container">
            <div className="row">
              <div className="col-lg-9 col-md-10">
                <div className="block">
                  <span className="d-block mb-3 text-white text-capitalize fw-medium">
                    Got Some Real Confusions?
                  </span>
                  <h1 className=" mb-4">
                    We Will Find a perfect Place Just for you
                  </h1>
                  <Link to="/search">
                    <button className="text-white fs-5 px-5 py-3 btn-main btn-round-full border-0 cursor-pointer ">
                      Let's Begin
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
