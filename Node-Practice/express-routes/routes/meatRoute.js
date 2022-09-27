// Load express
const express = require("express");

// Create a special router object for our routes
const router = express.Router();

// Load our meat data
const meats = require("../models/meats");


// Setup "index" route
router.get("/:index", (req, res) => {
	res.render('meats/Index', {meats: meats})
});

// Setup "new" route
router.get('/new', (req, res) => {     
    // res.send('<form>Create fruit</form>')
	res.render('New')
})

// Setup "create" route
router.post('/', (req, res) => {
    console.log(req.body)
    meats.push(req.body)
    res.redirect("/meats");
    // res.send('Creating a new meat! (in DB)')
})

// Setup "edit" route
router.get('/:index/edit', (req, res) => {
    res.send('<form>Edit meat</form>')
})


// Create Show route
router.get("/:index", (req, res) => {
	// res.send("Showing meats");
	res.render("./meats/Show", {meats: meats[req.params.index]})
});



module.exports = router;
