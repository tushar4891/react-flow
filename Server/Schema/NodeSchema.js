const mongoose = require("mongoose");

const NodeSchema = new mongoose.Schema({
  id: { type: String, required: true },
  type: { type: String, default: "default" },
  position: {
    x: { type: Number, required: true },
    y: { type: Number, required: true },
  },
  data: { type: mongoose.Schema.Types.Mixed }, // Flexible field to store any node-specific data
});

const EdgeSchema = new mongoose.Schema({
  id: { type: String, required: true },
  source: { type: String, required: true },
  target: { type: String, required: true },
  type: { type: String, default: "smoothstep" },
});

const GraphSchema = new mongoose.Schema({
  userId: { type: String, required: true }, // To associate graphs with users if needed
  nodes: [NodeSchema],
  edges: [EdgeSchema],
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

const Graph = mongoose.model("Graph", GraphSchema);

module.exports = Graph;
