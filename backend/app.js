const express = require('express')

const cors = require('cors')
const ticketRoutes = require('./routes/ticketRoutes.js')

const app = express()

app.use(cors())
app.use(express.json())

app.use("/tickets", ticketRoutes)


module.exports = app