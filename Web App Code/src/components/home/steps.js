import React from "react";
import "../../css/style.css";
import { AiOutlineFileSearch, AiOutlineMergeCells } from "react-icons/ai";
import { VscServerProcess } from "react-icons/vsc";
import { SiZapier, SiFirebase } from "react-icons/si";
import { FaLaptopCode } from "react-icons/fa";

export default function Steps() {
  return (
    <section className="section service border-top border-bottom">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-7 text-center">
            <div className="section-title">
              <span className="h6 text-color">Project Milestones</span>
              <h2 className="mt-3 content-title">
                Steps Carried out to complete this Marathon
              </h2>
            </div>
          </div>
        </div>

        <div className="row justify-content-center">
          <div className="col-lg-4 col-md-6 col-sm-6">
            <div className="service-item mb-5">
              <i className="ti-desktop">
                <AiOutlineFileSearch />
              </i>
              <h4 className="mb-3">Data Scrapping.</h4>
              <p>
                Perfect Dataset will take you to near-perfect results as is the
                case with our Balanced Highly Quality Dataset
              </p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 col-sm-6">
            <div className="service-item mb-5">
              <i className="ti-layers">
                <VscServerProcess />
              </i>
              <h4 className="mb-3">Data Processing.</h4>
              <p>
                In the Next step, the dataset is processed and any sort of
                ambiguity is filtered out to make results efficient and
                predictable
              </p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 col-sm-6">
            <div className="service-item mb-5">
              <i className="ti-bar-chart">
                <SiZapier />
              </i>
              <h4 className="mb-3">BERT Fine Tuning.</h4>
              <p>
                Heart of the process you’ll say. THE MODEL. Fine-Tuned with best
                parameters to meet our criteria for system rating
              </p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 col-sm-6">
            <div className="service-item mb-5 mb-lg-0">
              <i className="ti-vector">
                <AiOutlineMergeCells />
              </i>
              <h4 className="mb-3">Flask API Creation</h4>
              <p>
                The trained model is saved later on and been exposed for
                consuming purposes in the form of flask API endpoints
              </p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 col-sm-6">
            <div className="service-item mb-5 mb-lg-0">
              <i className="ti-android">
                <SiFirebase />
              </i>
              <h4 className="mb-3">Firebase Hooking.</h4>
              <p>
                All the User side is maintained and refined with Google renowned
                services like firestore, firebase authentication, and firebase
                storage
              </p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 col-sm-6">
            <div className="service-item mb-5 mb-lg-0">
              <i className="ti-pencil-alt">
                <FaLaptopCode />
              </i>
              <h4 className="mb-3">Apps Development.</h4>
              <p>
                UI’s are then compiled in the last stage to make user
                interactions with perfect aesthetics and clean design
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
