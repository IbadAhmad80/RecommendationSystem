import React from "react";
import "../../css/style.css";
import { Link } from "react-router-dom";

export default function HeroSection() {
  return (
    <div className="main-wrapper ">
      <section className="page-title bg-1">
        <div>
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="block text-center">
                  <span className="text-white">Contact Us</span>
                  <h1 className="text-capitalize mb-4 text-lg ">
                    Get in Touch
                  </h1>
                  <ul className="list-inline">
                    <li className="list-inline-item">
                      <Link to="/" className="text-white">
                        Home
                      </Link>
                    </li>
                    <li className="list-inline-item">
                      <span className="text-white">/</span>
                    </li>
                    <li className="list-inline-item">
                      <button className="text-white-50 border-0 bg-transparent text-dark">
                        Contact Us
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
