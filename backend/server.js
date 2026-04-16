require("dotenv").config();

const app = require("./app");
const connectDB = require("./config/db.js");

const startServer = async () => {
  try {
    await connectDB(); // ✅ WAIT for DB

    const port = process.env.PORT || 5000;

    app.listen(port, () =>
      console.log("Server running on port:", port)
    );
  } catch (error) {
    console.error("Server failed to start ❌", error);
  }
};

startServer();