// Load Mongoose
const mongoose = require("mongoose");

// Add shortcut to Schema
const Schema = mongoose.Schema;

// Create Schema
const fruitSchema = new Schema({
    name: {type: String, required: true},
    color: {type: String, required: true},
    readyToEat: Boolean
});

// Create a Model from our Schema
const Fruit = mongoose.model("Fruit", fruitSchema);

// Export our Model
module.exports = Fruit;