const express = require("express");

const app = express();

const PORT = 3000;

app.use(express.json());

const apiRoutes = require("./routes/apiRoutes");

//mongodb connecction
const connectDB = require("./config/db");
connectDB();

app.use("/api", apiRoutes);
app.get("/", (req, res) => {
  res.send("hello");
});

app.listen(PORT, () => {
  console.log(`listing on port ${PORT}`);
});

app.use((error, req, res, next) => {
  res.status(500).json({
    message: error.message,
    stack: error.stack,
  });
});
