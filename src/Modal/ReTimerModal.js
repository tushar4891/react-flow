import React from "react";
import ReactDOM from "react-dom";

import { HiOutlineQuestionMarkCircle } from "react-icons/hi";
import { BsFillPersonCheckFill } from "react-icons/bs";
import { GoPersonAdd } from "react-icons/go";
import { FaPeopleArrows } from "react-icons/fa6";
import { GrIntegration } from "react-icons/gr";
import { MdOutlineMail } from "react-icons/md";
import { FaRegCircleCheck } from "react-icons/fa6";
import { GiSandsOfTime } from "react-icons/gi";
import { FiFilter } from "react-icons/fi";
import { GiCubeforce } from "react-icons/gi";
import { WaitModal } from "./WaitModal";
import { ReColdModal } from "./ReColdModal";

export const ReTimerModal = ({ onReColdStringSelect }) => {
  return ReactDOM.createPortal(
    <div
      className="modal fade"
      id="ReTimerModal"
      tabIndex="-1"
      aria-labelledby="ReTimerModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-lg">
        <div className="modal-content">
          <div className="modal-header">
            <div className="d-flex flex-column">
              <div className="d-flex gap-2">
                <h5
                  className="modal-title"
                  id="exampleModalLabel"
                  style={{ fontWeight: "900" }}
                >
                  Add a Block
                </h5>
                <HiOutlineQuestionMarkCircle
                  style={{ height: "20px", width: "20px", marginTop: "5px" }}
                />
              </div>
              <div>
                <p className="mt-3">
                  Click on a blog to configure and add it in sequence{" "}
                </p>
              </div>
            </div>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <div className="my-3" style={{ fontWeight: "900" }}>
              Outreach
            </div>

            {/* 1st row */}
            <div className=" gap-5 d-flex flex-row justify-content-center align-items-center">
              {/* top left */}
              <div
                className="col-lg-5 shadow-4 pt-3 hover-square"
                data-bs-toggle="modal"
                data-bs-target="#reColdModal"
              >
                <div className="d-flex gap-3 px-3">
                  <div
                    className="px-2 "
                    style={{
                      height: "70px",
                      width: "90px",
                      border: "2px solid  #d2b8f2",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      borderRadius: "5px",
                      backgroundColor: "#ddc4f5",
                    }}
                  >
                    <MdOutlineMail
                      style={{
                        height: "50px",
                        width: "50px",
                        color: "#9d77d1",
                      }}
                    />
                  </div>
                  <div>
                    <p style={{ fontWeight: "900" }}> Cold Email </p>
                    <p>Send an email to a lead</p>
                  </div>
                </div>
                <ReColdModal onReColdStringSelect={onReColdStringSelect} />
              </div>
              {/* top right */}
              <div className="col-lg-5 shadow-4 pt-3 hover-square">
                <div className="d-flex gap-3 px-3">
                  <div
                    className="px-2"
                    style={{
                      height: "70px",
                      width: "90px",
                      border: "2px solid #d2b8f2",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      borderRadius: "5px",
                      backgroundColor: "#ddc4f5",
                    }}
                  >
                    <FaRegCircleCheck
                      style={{
                        height: "50px",
                        width: "50px",
                        color: "#9d77d1",
                      }}
                    />
                  </div>
                  <div>
                    <p style={{ fontWeight: "900" }}>Task </p>
                    <p>Schedule a manual task </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-4" style={{ fontWeight: "900" }}>
              Conditions
            </div>

            {/* 2nd row */}
            <div className=" gap-5 mt-4 mb-4 d-flex flex-row justify-content-center align-items-center">
              {/* top left */}
              <div className="col-lg-5 shadow-4 pt-3 hover-square">
                <div className="d-flex gap-3 px-3">
                  <div
                    className="px-2"
                    style={{
                      height: "70px",
                      width: "90px",
                      border: "2px solid #d0e6f5",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      borderRadius: "5px",
                      backgroundColor: "#eaf1f7",
                    }}
                  >
                    <FiFilter
                      style={{
                        height: "50px",
                        width: "50px",
                        color: "#03a6ff",
                      }}
                    />
                  </div>
                  <div>
                    <p style={{ fontWeight: "900" }}>If/Else Rules </p>
                    <p>Route leads through the sequence based on events </p>
                  </div>
                </div>
              </div>
              {/* top right */}
              <div className="col-lg-6 shadow-4 pt-3 hover-square">
                <div className="d-flex gap-3 px-3">
                  <div
                    className="px-2"
                    style={{
                      height: "70px",
                      width: "90px",
                      border: "2px solid #d0e6f5",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      borderRadius: "5px",
                      backgroundColor: "#eaf1f7",
                    }}
                  >
                    <GiCubeforce
                      style={{
                        height: "50px",
                        width: "50px",
                        color: "#03a6ff",
                      }}
                    />
                  </div>
                  <div>
                    <p style={{ fontWeight: "900" }}> A/B Split </p>
                    <p>Equality split contacts into two separate flows</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>,
    document.body // Append modal to the body
  );
};
