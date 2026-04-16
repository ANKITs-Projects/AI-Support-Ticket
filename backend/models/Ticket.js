const mongoose = require('mongoose') 

const ticketSchema = new mongoose.Schema(
  {
    name: String,
    email: String,
    description: String,
    category: String,
    aiReply: String,
    confidence: Number,
    status: {
      type: String,
      default: "OPEN"
    }
  },
  { timestamps: true }
)

module.exports = mongoose.model("Ticket", ticketSchema);