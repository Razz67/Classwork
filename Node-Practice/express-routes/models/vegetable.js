// Load Mongoose
const mongoose = require("mongoose");

// Add shortcut to Schema
const Schema = mongoose.Schema;

// Create Schema
const vegetableSchema = new Schema({
	name: { type: String, required: true },
	color: { type: String, required: true },
});

// Create a Model from our Schema
const Vegetable = mongoose.model("Vegetable", vegetableSchema);

// Export our Model
module.exports = Vegetable;
