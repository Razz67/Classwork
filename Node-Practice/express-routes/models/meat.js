// Load Mongoose
const mongoose = require("mongoose");

// Add shortcut to Schema
const Schema = mongoose.Schema;

// Create Schema
const meatSchema = new Schema({
	name: { type: String, required: true },
	type: { type: String, required: true },
});

// Create a Model from our Schema
const Meat = mongoose.model("Meat", meatSchema);

// Export our Model
module.exports = Meat;
