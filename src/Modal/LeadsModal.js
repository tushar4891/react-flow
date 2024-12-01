import React, { useState } from "react";
import ReactDOM from "react-dom";
import { CiCirclePlus } from "react-icons/ci";
import Select from "react-select";
import "./LeadsModal.css";

const options = [
  { value: "test list", label: "Test List" },
  { value: "test list sample", label: "Test List Sample" },
  {
    value: "sales blink demo ( existing customer)",
    label: "Sales Blink Demo ( Existing Customer)",
  },
  { value: "sales blink demo", label: "Sales Blink Demo" },
  { value: "appseccon 2023", label: "AppSecCon 2023" },
  { value: "list test", label: "List Test" },
  { value: "introduction list", label: "Introduction List" },
];

export const LeadsModal = ({ onStringSelect }) => {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const handleChange = (selectedOptions) => {
    setSelectedOptions(selectedOptions);
  };

  const handleInsert = () => {
    if (selectedOptions.length > 0) {
      const newStrings = selectedOptions.map((str) => {
        return str.label;
      });
      onStringSelect(newStrings);
    }
  };

  return ReactDOM.createPortal(
    <div
      class="modal fade"
      id="leadsModal"
      tabindex="-1"
      aria-labelledby="leadsModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <div className="d-flex flex-column">
              <h5
                class="modal-title"
                id="leadsModalLabel"
                style={{ fontWeight: "900" }}
              >
                Leads from List(s)
              </h5>
              <p> Connect multiple list as source for this sequence</p>
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
                <p>Select your List(s)</p>
              </div>
              <div className="d-flex">
                <button className="listBtn  rounded-3 mb-3">
                  New List <CiCirclePlus className="circlePlus" />
                </button>
              </div>
            </div>
            {/* drop down feature starts */}
            <Select
              options={options}
              value={selectedOptions}
              onChange={handleChange}
              isMulti={true}
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
