const dotenv = require('dotenv').config()
const app = require("./app")
const  connectDB  = require('./config/db.js')
connectDB()

const port = process.env.port

app.listen(port, () => console.log("Server running on port: ", port))