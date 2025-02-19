const mongoose = require("mongoose");
const fs = require("fs");
const csv = require("csv-parser");

mongoose.connect("mongodb://localhost:27017/CancerData")
  .then(() => console.log(" Connected to MongoDB"))
  .catch(err => {
    console.error(" MongoDB Connection Error:", err);
    process.exit(1);
  });

const cancerSchema = new mongoose.Schema({
  id: Number,
  diagnosis: String,
  radius_mean: Number,
  texture_mean: Number,
  perimeter_mean: Number,
  area_mean: Number,
  smoothness_mean: Number,
  compactness_mean: Number,
  concavity_mean: Number,
  concave_points_mean: Number,
  symmetry_mean: Number,
  fractal_dimension_mean: Number,
  radius_se: Number,
  texture_se: Number,
  perimeter_se: Number,
  area_se: Number,
  smoothness_se: Number,
  compactness_se: Number,
  concavity_se: Number,
  concave_points_se: Number,
  symmetry_se: Number,
  fractal_dimension_se: Number,
  radius_worst: Number,
  texture_worst: Number,
  perimeter_worst: Number,
  area_worst: Number,
  smoothness_worst: Number,
  compactness_worst: Number,
  concavity_worst: Number,
  concave_points_worst: Number,
  symmetry_worst: Number,
  fractal_dimension_worst: Number
});

const Cancer = mongoose.model("Cancer", cancerSchema);

const filePath = __dirname + "/Cancer_Data (1).csv";

if (!fs.existsSync(filePath)) {
  console.error(`CSV file not found: ${filePath}`);
  process.exit(1);
}

const records = [];
fs.createReadStream(filePath)
  .pipe(csv())
  .on("data", (row) => {
    try {
      Object.keys(row).forEach(key => {
        if (key !== "diagnosis") {
          row[key] = Number(row[key]);
        }
      });

      records.push(row);
    } catch (err) {
      console.error(" Error processing row:", row, err);
    }
  })
  .on("end", async () => {
    try {
      await Promise.all(records.map(async (row) => {
        await Cancer.findOneAndUpdate({ id: row.id }, row, { upsert: true, new: true });
      }));
      console.log(`Uploaded ${records.length} records successfully.`);

    } catch (err) {
      console.error(" Error inserting records into MongoDB:", err);
    }

    await mongoose.disconnect();
    console.log(" MongoDB connection closed.");
  })
  .on("error", (err) => {
    console.error(" Error reading CSV file:", err);
  });
