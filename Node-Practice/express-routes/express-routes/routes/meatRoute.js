// Load express
const express = require("express");

// Create a special router object for our routes
const router = express.Router();

// Load our meat data
const meats = require("../models/meats");

// Create Show route
router.get("/", (req, res) => {
	res.send("Showing meats");
});

// Setup "index" route
router.get("/:index", (req, res) => {
	res.send(meats[req.params.index]);
});

module.exports = router;
