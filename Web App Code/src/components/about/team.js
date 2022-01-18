import React from "react";
import "../../css/style.css";
import { FiFacebook, FiTwitter, FiLinkedin } from "react-icons/fi";

export default function Team() {
  return (
    <section className="section team border-top border-bottom">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-7 text-center">
            <div className="section-title">
              <span className="h6 text-color">Our Team</span>
              <h2 className="mt-3 content-title">
                Expert Team member to get best service
              </h2>
            </div>
          </div>
        </div>

        <div className="row justify-content-center">
          <div className="col-lg-4 col-md-6 col-sm-6">
            <div className="team-item-wrap mb-5">
              <div className="team-item position-relative">
                <img src="/ibad.jpg" alt="" className="img-fluid w-100" />
                <div className="team-img-hover">
                  <ul className="team-social list-inline">
                    <li className="list-inline-item">
                      <a
                        href="https://www.facebook.com/"
                        target="_blank"
                        rel="noreferrer"
                        className="facebook"
                      >
                        <i className="fab fa-facebook-f" aria-hidden="true">
                          <FiFacebook />
                        </i>
                      </a>
                    </li>
                    <li className="list-inline-item"></li>

                    <li className="list-inline-item ">
                      <a
                        href="https://www.linkedin.com/"
                        className="linkedin"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <i className="fab fa-linkedin-in" aria-hidden="true">
                          <FiLinkedin />
                        </i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="team-item-content">
                <h4 className="mt-3 mb-0 text-capitalize">Ibad Ahmad</h4>
                <p>Full Stack Developer</p>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 col-sm-6">
            <div className="team-item-wrap mb-5">
              <div className="team-item position-relative w-100">
                <img
                  src="/haseeb.jpeg.jpeg"
                  alt=""
                  className="img-fluid w-100"
                />
                <div className="team-img-hover">
                  <ul className="team-social list-inline">
                    <li className="list-inline-item">
                      <a
                        href="https://www.facebook.com/"
                        target="_blank"
                        rel="noreferrer"
                        className="facebook"
                      >
                        <i className="fab fa-facebook-f" aria-hidden="true">
                          <FiFacebook />
                        </i>
                      </a>
                    </li>
                    <li className="list-inline-item"></li>

                    <li className="list-inline-item">
                      <a
                        href="https://www.linkedin.com/"
                        className="linkedin"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <i className="fab fa-linkedin-in" aria-hidden="true">
                          <FiLinkedin />
                        </i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="team-item-content">
                <h4 className="mt-3 mb-0 text-capitalize">Haseeb Yaseen</h4>
                <p>Backend Developer</p>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 col-sm-6">
            <div className="team-item-wrap mb-5">
              <div className="team-item position-relative">
                <img src="/wahaj.jpeg" alt="" className="img-fluid w-100" />
                <div className="team-img-hover">
                  <ul className="team-social list-inline">
                    <li className="list-inline-item">
                      <a
                        href="https://www.facebook.com/"
                        target="_blank"
                        rel="noreferrer"
                        className="facebook"
                      >
                        <i className="fab fa-facebook-f" aria-hidden="true">
                          <FiFacebook />
                        </i>
                      </a>
                    </li>
                    <li className="list-inline-item"></li>

                    <li className="list-inline-item">
                      <a
                        href="https://www.linkedin.com/"
                        className="linkedin"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <i className="fab fa-linkedin-in" aria-hidden="true">
                          <FiLinkedin />
                        </i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="team-item-content">
                <h4 className="mt-3 mb-0 text-capitalize">Wahaj Hafeez</h4>
                <p>Data Scientist</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
