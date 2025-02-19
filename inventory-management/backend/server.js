const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const cancerRoutes = require("./routes/cancerRoutes");


dotenv.config();
connectDB(); 

const app = express();
app.use(express.json());
app.use(cors());

app.use("/api/cancer", cancerRoutes);

app.get("/", (req, res) => {
  res.send("Welcome to Cancer Data API");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(` Server running on port ${PORT}`));
