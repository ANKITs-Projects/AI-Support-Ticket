require("dotenv").config();

const app = require("./app");

const startServer = async () => {
  try {

    const port = process.env.PORT || 5000;

    app.listen(port, () =>
      console.log("Server running on port:", port)
    );
  } catch (error) {
    console.error("Server failed to start ❌", error);
  }
};

startServer();