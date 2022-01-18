import React from "react";
import "../../css/style.css";
import { Link } from "react-router-dom";
// import {
//   AiFillFacebook,
//   AiFillTwitterSquare,
//   AiFillLinkedin,
// } from "react-icons/ai";
import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer section">
      <div className="container">
        <div className="row">
          <div className="col-lg-2 col-md-6 col-sm-6">
            <div className="widget">
              <h4 className="text-capitalize mb-4 ">Quick Links</h4>

              <ul className="list-unstyled footer-menu lh-35">
                <li>
                  <Link to="/about" className="text-black">
                    About
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="text-black">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link to="/search" className="text-black">
                    Find Places
                  </Link>
                </li>
                <li>
                  <Link to="/" className="text-black">
                    Home
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-2 col-md-6 col-sm-6 mx-auto">
            <div className="widget">
              <h4 className="text-capitalize mb-4 ">Subscribe Us</h4>
              <p>Subscribe to get latest news article and resources </p>

              <form action="#" className="sub-form">
                <input
                  type="text"
                  className="form-control mb-3"
                  placeholder="Subscribe Now ..."
                />
                <button className="btn-main btn-small px-3 py-2 border-0 fs-6">
                  Subscribe
                </button>
              </form>
            </div>
          </div>

          <div className="col-lg-2 col-sm-6">
            <div className="widget">
              <div className="logo mb-4 ">
                <h3 className="">
                  Clever<span>Us.</span>
                </h3>
              </div>
              <h6>
                <a href="mailto:clever@gmail.com">clever@gmail.com</a>
              </h6>

              <span className="text-color h6">+92-3032182370</span>
            </div>
          </div>
        </div>

        <div className="footer-btm pt-4">
          <div className="row">
            <div className="col-lg-12 text-center">
              <div className="copyright">
                &copy; Copyright Reserved to{" "}
                <span className="text-color">CleverUs.</span>
              </div>
            </div>
            <div className="col-lg-6 text-left text-lg-right">
              {/* <ul className="list-inline footer-socials">
                <li className="list-inline-item">
                  <a href="#" className="text-black">
                    <i className="mx-2 fs-5  ">
                      <FaFacebook />
                    </i>
                    Facebook
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#" className="text-black">
                    <i className="mx-2 fs-5  ">
                      <FaTwitter />
                    </i>
                    Twitter
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#" className="text-black">
                    <i className="mx-2 fs-5  ">
                      <FaLinkedin />
                    </i>
                    Linkedin
                  </a>
                </li>
              </ul> */}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
