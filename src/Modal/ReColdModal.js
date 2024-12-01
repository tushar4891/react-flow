import React, { useState } from "react";
import ReactDOM from "react-dom";
import { CiCirclePlus } from "react-icons/ci";
import Select from "react-select";
import { LuPencil } from "react-icons/lu";
import "./ColdModal.css";

const options = [
  { value: "ai assisted 3", label: "AI Assisted - Follow Up 3" },
  { value: "ai assisted 1", label: "AI Assisted - Follow Up 1" },
  { value: "ai assisted", label: "AI Assisted" },
  { value: "ai assisted 2", label: "AI Assisted - Follow Up 2" },
  {
    value: "sales blink demo",
    label: "SalesBlink Demo ( Existing Customer) #1",
  },
  {
    value: "sales blink demo",
    label: "SalesBlink Demo #1",
  },
  { value: "web application", label: "Web Application - Follow Up 1" },
];

const emailOptions = [
  { value: "re followup", label: "Re Follow Up" },
  { value: " new email", label: "New Email" },
];

export const ReColdModal = ({ onReColdStringSelect }) => {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [selectedEmailOptions, setSelectedEmailOptions] = useState([]);

  const handleChange = (selectedOptions) => {
    setSelectedOptions(selectedOptions);
  };

  const handleEmailChange = (selectedEmailOptions) => {
    setSelectedEmailOptions(selectedEmailOptions);
  };

  const handleInsert = () => {
    const newObj = {
      template: selectedOptions,
      emailOptions: selectedEmailOptions,
    };
    onReColdStringSelect(newObj);
  };

  return ReactDOM.createPortal(
    <div
      class="modal fade"
      id="reColdModal"
      tabindex="-1"
      aria-labelledby="reColdModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <div class="modal-header">
            <div className="d-flex flex-column">
              <h5
                class="modal-title"
                id="coldModalLabel"
                style={{ fontWeight: "900" }}
              >
                Cold Email
              </h5>
              <p>Send an email to a Lead </p>
            </div>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body ">
            <div className="d-flex justify-content-between">
              <div className="">
                <p style={{ fontWeight: "600" }}>Email Template</p>
              </div>
              <div className="d-flex">
                <button className="listBtn  rounded-3 mb-3">
                  New Template <CiCirclePlus className="circlePlus" />
                </button>
              </div>
            </div>
            {/* drop down feature starts */}
            <Select
              options={options}
              value={selectedOptions}
              onChange={handleChange}
            />

            <div className="d-flex justify-content-between mt-4">
              <div className="">
                <p style={{ fontWeight: "600" }}>Send Email As</p>
              </div>
            </div>
            {/* drop down feature starts */}
            <Select
              options={emailOptions}
              value={selectedEmailOptions}
              onChange={handleEmailChange}
            />

            <div className="d-flex justify-content-end">
              <button
                className="insertBtn mt-3"
                data-bs-dismiss="modal"
                onClick={handleInsert}
              >
                Insert
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
};
