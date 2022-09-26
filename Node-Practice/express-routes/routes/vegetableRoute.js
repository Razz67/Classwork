// Load express
const express = require("express");

// Create a special router object for our routes
const router = express.Router();

// Load our vegetables data
const vegetables = require("../models/vegetables");

// set up Routes
// Set-up Show route
router.get("/", (req, res) => {
    res.send("Showing Vegetables");
})


// Setup "index" route 
router.get('/:index', (req, res) => {
    res.send(vegetables[req.params.index])
})


module.exports = router;