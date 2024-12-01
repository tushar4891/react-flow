const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");
const Graph = require("./Schema/NodeSchema"); // Import the Graph model
const Agenda = require("agenda");

const cors = require("cors");
require("dotenv").config();
const mongoose = require("mongoose");
const app = express();

// Connect Agenda to MongoDB
const agenda = new Agenda({
  db: { address: "mongodb://localhost:27017/emailScheduler" },
});

app.use(
  cors({
    origin: "http://localhost:3000", // Allow only this origin
  })
);

//middleware is used to parse the incoming JSON
// payload so that the data in req.body is
//available for validation.
app.use(express.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

// Define a job for sending emails
agenda.define("sendEmail", async (job) => {
  const { to, subject, body } = job.attrs.data;

  // Use Nodemailer to send the email
  const nodemailer = require("nodemailer");
  const transporter = nodemailer.createTransport({
    service: "gmail", // Or another email provider
    auth: {
      user: "your-email@gmail.com",
      pass: "your-email-password",
    },
  });

  await transporter.sendMail({
    from: "your-email@gmail.com",
    to,
    subject,
    text: body,
  });

  console.log(`Email sent to ${to}`);
});

(async function () {
  await agenda.start();
})();

// POST API to schedule emails
app.post("/scheduleEmails", async (req, res) => {
  const { flowchartData } = req.body; // Flowchart data sent from the frontend

  try {
    // Extract email recipients from the "Lead Source" node
    const leadSourceNode = flowchartData.nodes.find(
      (node) => node.type === "leadSource"
    );
    const recipients = leadSourceNode.data.emails; // Array of email addresses

    // Extract email content from "Cold Email" nodes
    const coldEmailNodes = flowchartData.nodes.filter(
      (node) => node.type === "coldEmail"
    );

    // Extract delays from "Wait/Delay" nodes
    const waitNodes = flowchartData.nodes.filter(
      (node) => node.type === "wait"
    );

    // Schedule emails using Agenda
    for (let i = 0; i < recipients.length; i++) {
      let delay = 0;

      for (let j = 0; j < coldEmailNodes.length; j++) {
        const emailNode = coldEmailNodes[j];
        const emailBody = emailNode.data.body;
        const emailSubject = emailNode.data.subject;

        if (j < waitNodes.length) {
          // Add delay from Wait/Delay node
          delay += waitNodes[j].data.delayInMilliseconds;
        }

        // Schedule the email
        await agenda.schedule(new Date(Date.now() + delay), "sendEmail", {
          to: recipients[i],
          subject: emailSubject,
          body: emailBody,
        });
      }
    }

    res.status(200).send("Emails scheduled successfully.");
  } catch (error) {
    console.error(error);
    res.status(500).send("An error occurred while scheduling emails.");
  }
});

// Save or update a graph
app.post("/api/saveGraph", async (req, res) => {
  const { userId, nodes, edges } = req.body;

  try {
    // Check if a graph for the user already exists
    let graph = await Graph.findOne({ userId });

    if (graph) {
      // Update the existing graph
      graph.nodes = nodes;
      graph.edges = edges;
      graph.updatedAt = new Date();
      await graph.save();
    } else {
      // Create a new graph
      graph = new Graph({ userId, nodes, edges });
      await graph.save();
    }

    res.status(200).json({ message: "Graph saved successfully!" });
  } catch (error) {
    console.error("Error saving graph:", error);
    res.status(500).json({ message: "Failed to save graph." });
  }
});

// Get the saved graph for a user
app.get("/api/getGraph/:userId", async (req, res) => {
  const { userId } = req.params;

  try {
    const graph = await Graph.findOne({ userId });
    if (!graph) {
      console.log(`No graph found for userId: ${userId}`);
      return res.status(404).json({ message: "No graph found for this user." });
    }

    res.status(200).json(graph);
  } catch (error) {
    console.error("Error retrieving graph:", error);
    res.status(500).json({ message: "Failed to retrieve graph." });
  }
});

const port = process.env.PORT || 4000;
const start = async () => {
  try {
    const mongoUri = process.env.MONGO_URI;
    await mongoose.connect(mongoUri);
    console.log("Connected to MongoDb");
  } catch (err) {
    console.error(err);
  }

  app.listen(port, () => {
    console.log(`Listening on port ${port} !`);
  });
};

start();
