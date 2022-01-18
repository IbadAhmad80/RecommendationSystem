import React from "react";
import { Link } from "react-router-dom";
import "../../css/style.css";

export default function CallToContact() {
  return (
    <section className="mt-70 position-relative">
      <div className="container">
        <div className="cta-block-2 bg-gray p-5 rounded border-1">
          <div className="row justify-content-center align-items-center ">
            <div className="col-lg-7">
              <span className="text-color">For Every type Query</span>
              <h2 className="mt-2 mb-4 mb-lg-0">
                Entrust Your Message to Our Best Team of Professionals
              </h2>
            </div>
            <div className="col-lg-4">
              <Link to="/contact">
                <button className=" px-5 py-3 btn-main btn-round-full float-lg-right border-0 ">
                  Contact Us
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
