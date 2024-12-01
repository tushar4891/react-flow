import React from "react";
import ReactDOM from "react-dom";
import { HiOutlineQuestionMarkCircle } from "react-icons/hi";
import { BsFillPersonCheckFill } from "react-icons/bs";
import { GoPersonAdd } from "react-icons/go";
import { FaPeopleArrows } from "react-icons/fa6";
import { GrIntegration } from "react-icons/gr";
import { LeadsModal } from "./LeadsModal";
import { TiFlashOutline } from "react-icons/ti";
import "./SourceBlock.css";

export const SourceBlock = ({ onStringSelect }) => {
  // Render the modal using React Portal
  return ReactDOM.createPortal(
    <div
      className="modal fade"
      id="exampleModal"
      tabIndex="-1"
      aria-labelledby="exampleModalLabel"
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
                  Add a Source Block
                </h5>
                <HiOutlineQuestionMarkCircle
                  style={{ height: "20px", width: "20px", marginTop: "5px" }}
                />
              </div>
              <div>
                <p>
                  Pick a block & configure, any new leads that match rules will
                  be added to sequence automatically
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
            <div className="my-3" style={{ fontWeight: "800" }}>
              Sources
            </div>

            {/* 1st row */}
            <div className=" gap-5 d-flex flex-row justify-content-center align-items-center">
              {/* top left */}
              <div
                className="col-lg-5 shadow-4 pt-3 hover-square"
                data-bs-toggle="modal"
                data-bs-target="#leadsModal"
              >
                <div className="d-flex gap-3 px-3">
                  <div
                    className="px-2 "
                    style={{
                      height: "70px",
                      width: "90px",
                      border: "2px solid pink",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      borderRadius: "5px",
                      backgroundColor: "#fbd6e5",
                    }}
                  >
                    <GoPersonAdd
                      style={{
                        height: "50px",
                        width: "50px",
                        color: "#ed317f",
                      }}
                    />
                  </div>
                  <div>
                    <p style={{ fontWeight: "900" }}> Leades from List(s) </p>
                    <p>Connect multiple lists are source for this sequence</p>
                  </div>
                </div>
                {<LeadsModal onStringSelect={onStringSelect} />}
              </div>
              {/* top right */}
              <div className="col-lg-5 shadow-4 pt-3 hover-square">
                <div className="d-flex gap-3 px-3">
                  <div
                    className="px-2"
                    style={{
                      height: "70px",
                      width: "90px",
                      border: "2px solid pink",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      borderRadius: "5px",
                      backgroundColor: "#fbd6e5",
                    }}
                  >
                    <BsFillPersonCheckFill
                      style={{
                        height: "50px",
                        width: "50px",
                        color: "#ed317f",
                      }}
                    />
                  </div>
                  <div>
                    <p style={{ fontWeight: "900" }}> Leades from List(s) </p>
                    <p>Connect multiple lists are source for this sequence</p>
                  </div>
                </div>
              </div>
            </div>

            {/* 2nd row */}
            <div className="pt-5 pb-4 gap-5 d-flex flex-row justify-content-center align-items-center">
              {/* top left */}
              <div className="col-lg-5 shadow-4 pt-3 hover-square">
                <div className="d-flex gap-3 px-3">
                  <div
                    className="px-2"
                    style={{
                      height: "70px",
                      width: "90px",
                      border: "2px solid pink",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      borderRadius: "5px",
                      backgroundColor: "#fbd6e5",
                    }}
                  >
                    <FaPeopleArrows
                      style={{
                        height: "50px",
                        width: "50px",
                        color: "#ed317f",
                      }}
                    />
                  </div>
                  <div>
                    <p style={{ fontWeight: "900" }}> Leades from List(s) </p>
                    <p>Connect multiple lists are source for this sequence</p>
                  </div>
                </div>
              </div>
              {/* top right */}
              <div className="col-lg-5 shadow-4 pt-3 hover-square">
                <div className="d-flex gap-3 px-3">
                  <div
                    className="px-2"
                    style={{
                      height: "70px",
                      width: "90px",
                      border: "2px solid pink",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      borderRadius: "5px",
                      backgroundColor: "#fbd6e5",
                    }}
                  >
                    <TiFlashOutline
                      style={{
                        height: "50px",
                        width: "50px",
                        color: "#ed317f",
                      }}
                    />
                  </div>
                  <div>
                    <p style={{ fontWeight: "900" }}> Leades from List(s) </p>
                    <p>Connect multiple lists are source for this sequence</p>
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
