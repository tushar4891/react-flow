// import "./App.css";
// import { CiEdit } from "react-icons/ci";
// import { IoMdClose } from "react-icons/io";
// import { useState, useCallback, createContext } from "react";
// import { SourceBlock } from "./Modal/SourceBlock";
// import { GoPersonAdd } from "react-icons/go";
// import { FiClock } from "react-icons/fi";
// import { HiOutlineMail } from "react-icons/hi";

// import {
//   ReactFlow,
//   Background,
//   Controls,
//   applyEdgeChanges,
//   applyNodeChanges,
//   Handle,
//   Position,
// } from "reactflow";

// import "reactflow/dist/style.css";
// import CustomLeadNode from "./CustomLeadNode ";
// import PlusModal from "./Modal/PlusModal";
// import { CustomColdNode } from "./CustomColdNode";
// import { TimerModal } from "./Modal/TimerModal";
// import { ReTimerModal } from "./Modal/ReTimerModal";
// import { CustomWaitNode } from "./CustomWaitNode";
// import { CustomReColdNode } from "./CustomReColdNode";

// // Define custom node components
// const AddLeadSourceNode = ({ data }) => {
//   return (
//     <>
//       <div
//         style={{
//           padding: "10px",
//           border: "1px solid #ddd",
//           borderRadius: "5px",
//           textAlign: "center",
//           backgroundColor: "#f9f9f9",
//         }}
//         data-bs-toggle="modal"
//         data-bs-target="#exampleModal"
//       >
//         <div
//           style={{ fontSize: "20px", marginBottom: "5px", cursor: "pointer" }}
//         >
//           +
//         </div>
//         <div>
//           <strong>Add Lead Source</strong>
//         </div>
//         <div style={{ fontSize: "12px", marginTop: "5px", color: "#888" }}>
//           (Click to add leads from list or CRM's)
//         </div>
//       </div>
//       <Handle
//         type="source"
//         position={Position.Bottom}
//         id="source"
//         isConnectable
//       />
//       <Handle type="target" position={Position.Top} id="target" isConnectable />
//     </>
//   );
// };

// const SequenceStartNode = ({ data, sourcePosition, targetPosition }) => (
//   <div
//     className="sequence-node"
//     style={{
//       padding: "10px",
//       border: "1px solid #ddd",
//       borderRadius: "5px",
//       textAlign: "center",
//       backgroundColor: "#f1f1f1",
//     }}
//   >
//     <div>{data.label}</div>
//     <Handle
//       type="source"
//       position={Position.Bottom}
//       id="source"
//       isConnectable
//     />
//     <Handle type="target" position={Position.Top} id="target" isConnectable />
//     <CiEdit className="editLabel mx-3" />
//     <IoMdClose className="closeLabel" onClick={data.onDelete} />
//   </div>
// );

// const PlusNode = ({ data, sourcePosition, targetPosition }) => {
//   // const modalId = data.shouldShowMinusModal ? "#TimerModal" : "#plusModal"; // Condition for modal
//   // const modalId = data.shouldShowMinusModal ? "#TimerModal" : "#ReTimerModal"; // Condition for modal

//   const [modalStep, setModalStep] = useState(0); // Track the modal sequence (0 = plusModal, 1 = TimerModal, 2 = ReTimerModal)

//   const handleNodeClick = () => {
//     if (modalStep < 2) {
//       setModalStep(modalStep + 1); // Move to the next modal step
//     }
//   };

//   // Determine the modal to show based on the step
//   const modalId =
//     modalStep === 0
//       ? "#plusModal"
//       : modalStep === 1
//       ? "#TimerModal"
//       : "#ReTimerModal";

//   return (
//     <div
//       style={{
//         width: "30px",
//         height: "20px",
//         border: "1px solid #000",
//         display: "flex",
//         alignItems: "center",
//         justifyContent: "center",
//         fontSize: "16px",
//         cursor: "pointer",
//         backgroundColor: "#fff",
//       }}
//       data-bs-toggle="modal"
//       data-bs-target={modalId} // Dynamically assign the modal ID
//       onClick={handleNodeClick} // just added
//     >
//       +
//       <Handle type="target" position={Position.Top} isConnectable />
//       <Handle type="source" position={Position.Bottom} isConnectable />
//     </div>
//   );
// };

// // const PlusNode = ({ data, sourcePosition, targetPosition }) => (
// //   <>
// //     <div
// //       style={{
// //         width: "30px",
// //         height: "20px",
// //         border: "1px solid #000",
// //         display: "flex",
// //         alignItems: "center",
// //         justifyContent: "center",
// //         fontSize: "16px",
// //         cursor: "pointer",
// //         backgroundColor: "#fff",
// //       }}
// //       // onClick={data.onClick}
// //       data-bs-toggle="modal"
// //       data-bs-target="#plusModal"
// //     >
// //       +
// //       <Handle type="target" position={Position.Top} isConnectable />
// //       <Handle type="source" position={Position.Bottom} isConnectable />
// //     </div>
// //   </>
// // );

// // Define custom node types
// const nodeTypes = {
//   addLeadSource: AddLeadSourceNode,
//   sequenceStart: SequenceStartNode, // original
//   // sequenceStart: CustomLeadNode,
//   newNode: CustomLeadNode,
//   plusNode: PlusNode,
//   coldNode: CustomColdNode,
//   waitNode: CustomWaitNode,
//   reColdNode: CustomReColdNode,
// };

// const initialNodes = [
//   {
//     id: "1",
//     type: "addLeadSource",
//     data: { label: "Add Lead Source", prevNode: null, nextNode: null },
//     position: { x: 0, y: 0 },
//   },
//   {
//     id: "2",
//     type: "sequenceStart",
//     data: { label: "Sequence Start Point", prevNode: null, nextNode: "3" },
//     position: { x: 25, y: 150 },
//   },
//   {
//     id: "3",
//     type: "plusNode",
//     data: {
//       prevNode: 3,
//       nextNode: null,
//       onClick: () => alert("Clicked +! Add a new node here!"),
//     },
//     position: { x: 96, y: 300 }, // Adjusted position to align with Node 2
//   },
// ];

// const initialEdges = [
//   {
//     id: "2-3",
//     source: "2",
//     target: "3",
//     type: "smoothstep",
//     // label: "+",
//     sourcePosition: "bottom", // Explicitly state the source position
//     targetPosition: "top",
//   }, // Explicit edge from Node 2 to Node 3
// ];

// function App() {
//   const [nodes, setNodes] = useState(initialNodes);
//   const [edges, setEdges] = useState(initialEdges);

//   const [leadModalString, setLeadModalString] = useState(""); // Add state for the string
//   const [coldModalString, setColdModalString] = useState("");
//   const [waitModalString, setWaitModalString] = useState("");
//   const [reColdModalString, setReColdModalString] = useState("");

//   const [showPlusModal, setShowPlusModal] = useState(false);
//   const [showTimerModal, setShowTimerModal] = useState(false);

//   const handleLeadModalString = (selectedString) => {
//     setLeadModalString(selectedString); // Update the selected string state
//     newLeadSourceNode(selectedString);
//   };

//   const handleColdModalString = (selectedString) => {
//     setColdModalString(selectedString);
//     coldNode(selectedString);
//   };

//   const handleWaitInputString = (selectedString) => {
//     setWaitModalString(selectedString);
//     waitNode(selectedString);
//   };

//   const handleReColdModalString = (selectedString) => {
//     setReColdModalString(selectedString);
//     reColdNode(selectedString);
//   };

//   const newLeadSourceNode = (text) => {
//     const newNodeId = `${nodes.length + 1}`;
//     const newNode = {
//       id: newNodeId,
//       // type: "sequenceStart",//original
//       type: "newNode",
//       // data: { label: text }, // Set the node label to the selected string
//       data: {
//         icon: <GoPersonAdd />,
//         label: "Leads from",
//         strings: text.join(", "), // Join strings with commas
//       },
//       position: { x: 0, y: 0 },
//     };
//     const newEdge = {
//       id: `edge-${nodes.length}`,
//       source: "4", // Assuming AddLeadSourceNode connects to the new node
//       // target: newNodeId,
//       target: "2",
//       type: "smoothstep",
//     };

//     setNodes((prev) => [...prev, newNode]);
//     setEdges((prev) => [...prev, newEdge]);
//     // Update position of node with id "1"
//     updateNodePosition("1", 150, 0); // Move right by 50px
//   };

//   const waitNode = (text) => {
//     const newNodeId = `${nodes.length + 1}`;

//     let clickedNode;
//     for (let i = 0; i < nodes.length; i++) {
//       if (nodes[i].id === "3") {
//         clickedNode = nodes[i];
//       }
//     }
//     const clickedNodeId = clickedNode.id;

//     // Find the edge where clickedNode is the target
//     const edgeToClickedNode = edges.find(
//       (edge) => edge.target === clickedNodeId
//     );

//     if (!edgeToClickedNode) return; // Ensure the edge exists

//     const newNodePosition = {
//       x: clickedNode.position.x,
//       y: clickedNode.position.y,
//     };

//     clickedNode.position.x += 100;
//     clickedNode.position.y += 150;

//     const prevNodeId = edgeToClickedNode.source;

//     const newNode = {
//       id: newNodeId,
//       type: "waitNode", // Can be a different type if needed
//       data: {
//         icon: <FiClock />,
//         label: "Delay",
//         strings: text,
//       },
//       position: newNodePosition,
//     };

//     // Update edges: remove Node 2 → Node 3 and add new edges
//     const newEdges = edges
//       .filter((edge) => edge.id !== edgeToClickedNode.id) // Remove old edge
//       .concat([
//         {
//           id: `${prevNodeId}-${newNodeId}`,
//           source: prevNodeId,
//           target: newNodeId,
//           type: "smoothstep",
//         },
//         {
//           id: `${newNodeId}-${clickedNodeId}`,
//           source: newNodeId,
//           target: clickedNodeId,
//           type: "smoothstep",
//         },
//       ]);

//     // Update nodes and edges state
//     setNodes((nds) => [...nds, newNode]);
//     setEdges(newEdges);
//   };
//   const coldNode = (text) => {
//     const newNodeId = `${nodes.length + 1}`;

//     let clickedNode;
//     for (let i = 0; i < nodes.length; i++) {
//       if (nodes[i].id === "3") {
//         clickedNode = nodes[i];
//       }
//     }
//     const clickedNodeId = clickedNode.id;

//     // Find the edge where clickedNode is the target
//     const edgeToClickedNode = edges.find(
//       (edge) => edge.target === clickedNodeId
//     );

//     if (!edgeToClickedNode) return; // Ensure the edge exists

//     const newNodePosition = {
//       x: clickedNode.position.x,
//       y: clickedNode.position.y,
//     };

//     clickedNode.position.x += 100;
//     clickedNode.position.y += 150;

//     const prevNodeId = edgeToClickedNode.source;

//     const newNode = {
//       id: newNodeId,
//       type: "coldNode", // Can be a different type if needed
//       data: {
//         icon: <GoPersonAdd />,
//         label: "Email",
//         strings: text,
//       },
//       position: newNodePosition,
//     };

//     // Update edges: remove Node 2 → Node 3 and add new edges
//     const newEdges = edges
//       .filter((edge) => edge.id !== edgeToClickedNode.id) // Remove old edge
//       .concat([
//         {
//           id: `${prevNodeId}-${newNodeId}`,
//           source: prevNodeId,
//           target: newNodeId,
//           type: "smoothstep",
//         },
//         {
//           id: `${newNodeId}-${clickedNodeId}`,
//           source: newNodeId,
//           target: clickedNodeId,
//           type: "smoothstep",
//         },
//       ]);

//     // Update nodes and edges state
//     setNodes((nds) => [...nds, newNode]);
//     setEdges(newEdges);
//   };

//   const reColdNode = (text) => {
//     const newNodeId = `${nodes.length + 1}`;

//     let clickedNode;
//     for (let i = 0; i < nodes.length; i++) {
//       if (nodes[i].id === "3") {
//         clickedNode = nodes[i];
//       }
//     }
//     const clickedNodeId = clickedNode.id;

//     // Find the edge where clickedNode is the target
//     const edgeToClickedNode = edges.find(
//       (edge) => edge.target === clickedNodeId
//     );

//     if (!edgeToClickedNode) return; // Ensure the edge exists

//     const newNodePosition = {
//       x: clickedNode.position.x,
//       y: clickedNode.position.y,
//     };

//     clickedNode.position.x += 100;
//     clickedNode.position.y += 150;

//     const prevNodeId = edgeToClickedNode.source;

//     const newNode = {
//       id: newNodeId,
//       type: "reColdNode", // Can be a different type if needed
//       data: {
//         icon: <HiOutlineMail />,
//         label: "Email",
//         strings: text,
//       },
//       position: newNodePosition,
//     };

//     // Update edges: remove Node 2 → Node 3 and add new edges
//     const newEdges = edges
//       .filter((edge) => edge.id !== edgeToClickedNode.id) // Remove old edge
//       .concat([
//         {
//           id: `${prevNodeId}-${newNodeId}`,
//           source: prevNodeId,
//           target: newNodeId,
//           type: "smoothstep",
//         },
//         {
//           id: `${newNodeId}-${clickedNodeId}`,
//           source: newNodeId,
//           target: clickedNodeId,
//           type: "smoothstep",
//         },
//       ]);

//     // Update nodes and edges state
//     setNodes((nds) => [...nds, newNode]);
//     setEdges(newEdges);
//   };

//   const updateNodePosition = (nodeId, deltaX, deltaY) => {
//     setNodes((prevNodes) =>
//       prevNodes.map((node) =>
//         node.id === nodeId
//           ? {
//               ...node,
//               position: {
//                 x: node.position.x + deltaX,
//                 y: node.position.y + deltaY,
//               },
//             }
//           : node
//       )
//     );
//   };

//   const deleteNode = (nodeToDelete) => {
//     setNodes((nds) => nds.filter((node) => node.id !== nodeToDelete.id)); // Remove node

//     const incomingEdge = edges.find((edge) => edge.target === nodeToDelete.id);
//     const outgoingEdge = edges.find((edge) => edge.source === nodeToDelete.id);

//     setEdges((eds) => {
//       const updatedEdges = eds.filter(
//         (edge) =>
//           edge.source !== nodeToDelete.id && edge.target !== nodeToDelete.id
//       );

//       if (incomingEdge && outgoingEdge) {
//         updatedEdges.push({
//           id: `${incomingEdge.source}-${outgoingEdge.target}`, // New edge ID
//           source: incomingEdge.source, // Connect the source of the incoming edge
//           target: outgoingEdge.target, // Connect the target of the outgoing edge
//           type: "smoothstep", // Edge type
//         });
//       }
//       return updatedEdges;
//     });
//   };

//   const addNode = (clickedNode) => {
//     const newNodeId = `${nodes.length + 1}`;
//     const clickedNodeId = clickedNode.id;

//     // Find the edge where clickedNode is the target
//     const edgeToClickedNode = edges.find(
//       (edge) => edge.target === clickedNodeId
//     );

//     if (!edgeToClickedNode) return; // Ensure the edge exists

//     const newNodePosition = {
//       x: clickedNode.position.x,
//       y: clickedNode.position.y,
//     };

//     clickedNode.position.x += 100;
//     clickedNode.position.y += 150;

//     const prevNodeId = edgeToClickedNode.source;

//     const newNode = {
//       id: newNodeId,
//       type: "sequenceStart", // Can be a different type if needed
//       data: {
//         label: `Node ${newNodeId}`,
//       },
//       position: newNodePosition,
//     };

//     // Update edges: remove Node 2 → Node 3 and add new edges
//     const newEdges = edges
//       .filter((edge) => edge.id !== edgeToClickedNode.id) // Remove old edge
//       .concat([
//         {
//           id: `${prevNodeId}-${newNodeId}`,
//           source: prevNodeId,
//           target: newNodeId,
//           type: "smoothstep",
//         },
//         {
//           id: `${newNodeId}-${clickedNodeId}`,
//           source: newNodeId,
//           target: clickedNodeId,
//           type: "smoothstep",
//         },
//       ]);

//     // Update nodes and edges state
//     setNodes((nds) => [...nds, newNode]);
//     setEdges(newEdges);
//   };

//   const onNodesChange = useCallback(
//     (changes) => setNodes((nds) => applyNodeChanges(changes, nds)),
//     []
//   );

//   const onEdgesChange = useCallback(
//     (changes) => setEdges((eds) => applyEdgeChanges(changes, eds)),
//     []
//   );

//   const handlePlusNodeClick = () => {
//     console.log("length ;; ", nodes.length);
//     if (nodes.length > 3) {
//       console.log("setting false");
//       setShowTimerModal(true);
//     } else {
//       console.log("setting true");
//       setShowPlusModal(true);
//     }
//   };

//   return (
//     <div style={{ width: "100vw", height: "100vh" }}>
//       <ReactFlow
//         nodes={nodes.map((node) =>
//           node.id === "3"
//             ? {
//                 ...node,
//                 data: {
//                   ...node.data,
//                   shouldShowMinusModal: nodes.length > 3,
//                   // onClick: () => handlePlusNodeClick(), // Use the new click handler
//                   // onClick: () => addNode(node),//original
//                 },
//               }
//             : {
//                 ...node,
//                 data: {
//                   ...node.data,
//                   onDelete: () => deleteNode(node), // Enable deleting all other nodes
//                 },
//               }
//         )}
//         onNodesChange={onNodesChange}
//         edges={edges}
//         onEdgesChange={onEdgesChange}
//         fitView
//         nodeTypes={nodeTypes}
//       >
//         <Background />
//         <Controls />
//       </ReactFlow>
//       <SourceBlock onStringSelect={handleLeadModalString} />
//       <PlusModal onColdStringSelect={handleColdModalString} />
//       <TimerModal onWaitInputSelect={handleWaitInputString} />
//       <ReTimerModal onReColdStringSelect={handleReColdModalString} />
//     </div>
//   );
// }

// export default App;
import React from "react";
import ReactRendererFlow from "./Renderer/ReactRendererFlow.js";

export const App = () => {
  return (
    <div>
      <ReactRendererFlow />
    </div>
  );
};
