const mongoose = require('mongoose');

const ticketSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      require: true
    },
    email: {
      type: String,
      require: true
    },
    description: {
      type: String,
      require: true
    },
    category: {
      type: String,
      require: true
    },
    aiReply: {
      type: String,
      require: true
    },
    status: {
      type: String,
      enum: ["OPEN", "RESOLVED"],
      default: "OPEN"
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Ticket", ticketSchema);