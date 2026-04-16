const Ticket = require('../models/Ticket.js')
const  processWithAI  = require('../services/aiService.js')

const createTicket = async (req, res) => {
  const { name, email, description } = req.body

  const aiData = await processWithAI(description)

  const ticket = await Ticket.create({
    name,
    email,
    description,
    category: aiData.category,
    aiReply: aiData.reply,
    confidence: aiData.confidence
  })

  res.json({ ticketId: ticket._id, status: ticket.status })
}

const getTickets = async (req, res) => {
  const tickets = await Ticket.find().select({ _id: 1, description: 1, status: 1, category: 1, createdAt:1 }).sort({ createdAt: -1 })
  res.json(tickets)
}

const getTicket = async (req, res) => {
  const ticket = await Ticket.findById(req.params.id).select({ _id: 1, name:1, email:1, description: 1, category:1, aiReply:1, status: 1, createdAt:1 })
  res.json(ticket)
}

const updateStatus = async (req, res) => {
  await Ticket.findByIdAndUpdate(req.params.id, {
    status: req.body.status
  })
  res.json({ success: true })
}

const updateReply = async (req, res) => {
  await Ticket.findByIdAndUpdate(req.params.id, {
    aiReply: req.body.reply
  })
  res.json({ success: true })
}

module.exports = {createTicket, getTickets, getTicket, updateStatus, updateReply}