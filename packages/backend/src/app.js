require("dotenv").config();

const express = require("express");

const leadsRoutes = require("./routes/leads");
const statsRoutes = require("./routes/stats");

const app = express();

app.use(express.json());

app.use("/api/leads", leadsRoutes);
app.use("/api/stats", statsRoutes);

app.use((err, req, res, next) => {
  console.error(err);

  if (err.statusCode) {
    return res.status(err.statusCode).json({
      error: err.message,
    });
  }

  res.status(500).json({
    error: "Internal server error",
  });
});

module.exports = app;