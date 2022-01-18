import React from "react";
import "./intro";
import Lottie from "react-lottie";
import animationData from "../../images/intro.json";
import { Link } from "react-router-dom";

export default function Intro({ size }) {
  const [dimensions, setDimensions] = React.useState({
    height: 500,
    width: 450,
    execution: false,
  });

  if (size[0] < 500 && dimensions.height !== 290) {
    setDimensions({ height: 290, width: 300 });
  } else if (size[0] >= 500 && dimensions.height !== 500) {
    setDimensions({ height: 500, width: 450, execution: false });
  }

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div>
      <section className="section about-2 position-relative">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="about-item pr-3 mb-5 mb-lg-0">
                <span className="h6 text-color ">What we are</span>
                <h2 className="mt-3 mb-4 position-relative content-title">
                  We are dynamic team of creative people
                </h2>
                <p className="mb-5">
                  We are amazing group of 3 people who are willing to learn and
                  understand new technologies which the goal of never being to
                  stop. This project is also among of those efforts.
                </p>

                <Link to="/search">
                  {" "}
                  <button className="btn-main btn-round-full px-5 py-3 border-0">
                    Get started
                  </button>
                </Link>
              </div>
            </div>
            <div className=" col-lg-6">
              <div className="about-item-img">
                <Lottie
                  options={defaultOptions}
                  height={dimensions.height}
                  width={dimensions.width}
                  // height={290}
                  // width={300}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
