const Ticket = require('../models/Ticket.js')
const  processWithAI  = require('../services/aiService.js')

const createTicket = async (req, res) => {
  const { name, email, description } = req.body

  try {
    const aiData = await processWithAI(description)

  const ticket = await Ticket.create({
    name,
    email,
    description,
    category: aiData.category,
    aiReply: aiData.reply,
    confidence: aiData.confidence
  })

  res.status(201).json({ 
    ticketId: ticket._id, 
    status: ticket.status 
  })
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    })
  }
}

const getTickets = async (req, res) => {
  try {
    const tickets = await Ticket.find().select({ _id: 1, description: 1, status: 1, category: 1, createdAt:1 }).sort({ createdAt: -1 })
  res.status(200).json(tickets)
  } catch (error) {
    res.status(500).json({
      error : error.message
    })
  }
}

const getTicket = async (req, res) => {
  try {
    const ticket = await Ticket.findById(req.params.id).select({ _id: 1, name:1, email:1, description: 1, category:1, aiReply:1, status: 1, createdAt:1 })
  res.status(200).json(ticket)
  } catch (error) {
    res.status(500).json({
      error : error.message
    })
  }
}

const updateStatus = async (req, res) => {
  try {
    await Ticket.findByIdAndUpdate(req.params.id, {
    status: req.body.status
  })
  res.status(200).json({ success: true })
  } catch (error) {
    res.status(500).json({
      error : error.message
    })
  }
}

const updateReply = async (req, res) => {
  try {
    await Ticket.findByIdAndUpdate(req.params.id, {
    aiReply: req.body.reply
  })
  res.status(200).json({ success: true })
  } catch (error) {
    res.status(500).json({
      error : error.message
    })
  }
}

module.exports = {createTicket, getTickets, getTicket, updateStatus, updateReply}