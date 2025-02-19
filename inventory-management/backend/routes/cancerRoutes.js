const express = require("express");
const Cancer = require("../models/Cancer");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const cancerData = await Cancer.find();
    if (!cancerData || cancerData.length === 0) {
      return res.status(404).json({ message: "No data found in database" });
    }
    res.json(cancerData);
  } catch (error) {
    res.status(500).json({ message: "Error fetching cancer data", error });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const record = await Cancer.findOne({ id: Number(req.params.id) }); 
    if (!record) return res.status(404).json({ message: "Record not found" });
    res.json(record);
  } catch (error) {
    res.status(500).json({ message: "Error fetching record", error });
  }
});

module.exports = router;
