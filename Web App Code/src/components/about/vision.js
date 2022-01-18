import React from "react";
import "../../css/style.css";

export default function Vision() {
  return (
    <section className="about-info section pt-0">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6 col-md-6 col-sm-6">
            <div className="about-info-item mb-4 mb-lg-0">
              <h3 className="mb-3">
                <span className="text-color mr-2 text-md">01.</span>Our Mission
              </h3>
              <p>
                Our idea was to come up with a generic recommendation system
                that would be able to recommend different businesses on the
                basis of reviews content. Moreover, use of Reinforcement
                Learning so that this process becomes dynamic .
              </p>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-6">
            <div className="about-info-item mb-4 mb-lg-0">
              <h3 className="mb-3">
                <span className="text-color mx-2 text-md">02.</span>Our Vision
              </h3>
              <p>
                To develop such intelligent recommendation system that performs
                accurately and efficiently and help users to know about the
                authentic, best, affordable places like nearest doctor,
                restaurants, hotels etc, whom which they can trust or prefer.
              </p>
            </div>
          </div>
          <div className="col-lg-6 mt-sm-0 mt-md-5 col-md-6 col-sm-6">
            <div className="about-info-item mb-4 mb-lg-0">
              <h3 className="mb-3  ">
                <span className="text-color mr-2 text-md">03.</span>
                Our Goal
              </h3>
              <p className="">
                Overcome the drawbacks of traditional approaches for finding a
                place by developing such recommendation system that will uses
                natural language processing and machine earning techniques to
                produce a recommendation list.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
