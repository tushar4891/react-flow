import React, { useState } from "react";
import ReactDOM from "react-dom";
import Select from "react-select";

const options = [
  { value: "year", label: "Year" },
  { value: "month", label: "Month" },
  { value: "days", label: "Days" },
  { value: "hours", label: "Hours" },
];

export const WaitModal = ({ onWaitInputSelect }) => {
  const [selectedNumber, setSelectedNumber] = useState();
  const [selectedType, setSelectedType] = useState();

  const handleChange = (type) => {
    setSelectedType(type);
  };

  const handleNumberChange = (event) => {
    setSelectedNumber(event.target.value);
  };
  const handleInsert = () => {
    const numAndType = {
      number: selectedNumber,
      type: selectedType,
    };
    onWaitInputSelect(numAndType);
  };

  return ReactDOM.createPortal(
    <div
      class="modal fade"
      id="waitModal"
      tabindex="-1"
      aria-labelledby="waitModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <div className="d-flex flex-column">
              <h5
                class="modal-title"
                id="coldModalLabel"
                style={{ fontWeight: "900" }}
              >
                Wait
              </h5>
              <p>Add a delay between blocks </p>
            </div>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body ">
            <p>Wait For</p>
            <input
              type="number"
              onChange={handleNumberChange}
              style={{ width: "100%" }}
            />
            <div className="pt-3">
              <p> Wait Type</p>
              <Select
                options={options}
                value={selectedType}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="d-flex justify-content-end">
            <button
              className="insertBtn mt-3 mb-3 mx-3"
              data-bs-dismiss="modal"
              onClick={handleInsert}
            >
              Insert
            </button>
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
};
