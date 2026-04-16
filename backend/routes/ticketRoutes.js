const express = require('express');
const { createTicket, getTickets, getTicket, updateStatus, updateReply } = require('../controllers/ticketController.js');

const router = express.Router();

router.post("/", createTicket);
router.get("/", getTickets);
router.get("/:id", getTicket);
router.post("/:id/status", updateStatus);
router.post("/:id/reply", updateReply);

module.exports = router;