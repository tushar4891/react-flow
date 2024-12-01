import React from "react";
import { Handle, Position } from "reactflow";
import { CiEdit } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";

export const CustomWaitNode = ({ data }) => {
  return (
    <div
      className="sequence-node"
      style={{
        padding: "10px",
        border: "1px solid #ccc",
        borderRadius: "8px",
        backgroundColor: "#f9f9f9",
        textAlign: "center",
        width: "250px",
      }}
      onClick={data.onNodeClick}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{
            height: "70px",
            width: "90px",
            border: "2px solid #5e9fdd",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "5px",
            backgroundColor: "#dae4ea",
          }}
        >
          <span
            style={{
              fontSize: "30px",
              height: "50px",
              width: "50px",
              color: "#5e9fdd",
            }}
          >
            {data.icon}
          </span>
        </div>
        <div>
          <span>{data.label}</span>
          <div
            style={{ marginTop: "10px", fontSize: "0.9rem", color: "#5e9fdd" }}
          >
            {"Wait " + data.strings.number + data.strings.type.label}
          </div>
        </div>
      </div>

      <Handle
        type="source"
        position={Position.Bottom} // Position where the edge connects
        id="source"
        isConnectable
      />
      <Handle
        type="target"
        position={Position.Top} // Position where the edge connects
        id="target"
        isConnectable
      />
      <CiEdit
        className="editLabel mx-3"
        data-bs-toggle="modal"
        data-bs-target="#waitModal"
      />
      <IoMdClose className="closeLabel" onClick={data.onDelete} />
    </div>
  );
};
