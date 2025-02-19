const mongoose = require("mongoose");

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

module.exports = Cancer;
