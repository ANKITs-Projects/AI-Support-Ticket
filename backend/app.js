const express = require('express');
const connectDB = require("./config/db.js");
connectDB();
const cors = require('cors');
const ticketRoutes = require('./routes/ticketRoutes.js');

const app = express();

app.use(cors());
app.use(express.json());

app.use("/tickets", ticketRoutes);

app.get("/", (req, res) => {
    res.status(200).send("Welcome to backend....")
})

module.exports = app;