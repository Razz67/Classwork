// Load express
const express = require("express");

// Load oour fruits data
const fruits = require("../models/fruits");


// Create a special router object for our routes
const router = express.Router();



// Bring in seed data
// const seed = require("../models/seed");

// Bring in controller functions (destructure methods)
// const {
// 	findAllFruits,
// 	showNewView,
// 	createNewFruit,
// 	seedStarterData,
// 	showOneFruit,
// 	showEditView,
// 	updateOneFruit,
// 	deleteOneFruit,
// } = require("../controllers/fruitController");

// Bring in controller object (with methods attached)
// const fruitController = require('../controllers/fruitController')
// Example: router.get('/', fruitController.findAllFruits)

// I.N.D.U.C.E.S
// Index, New, Delete, Update, Create, Edit, Show


// Index route
router.get("/", (req, res) => {
	res.render("fruits/Index", { fruits: fruits });
});

// // New route
router.get("/new", (req, res) => {
	// res.send("<form>New Fruit</form>");
	res.render("fruits/New");
});

// Delete route
router.delete("/:index", (req, res) => {
	res.send("Deleting a fruit at index! (in DB)");
	// fruits.splice(req.params.index);
	// res.redirect("/fruits");
});

// // Update route
router.put("/:index", (req, res) => {
	res.send("Update Fruit at index! (in DB)");
});

// Create route
router.post("/", (req, res) => {
	// res.send("Creating a fruit");
	if (req.body.readyToEat === "on" || req.body.readyToEat === "true") {
		req.body.readyToEat = true;
	} else {
		req.body.readyToEat = false;
	}
	fruits.push(req.body);
	console.log(fruits);
	res.redirect("/fruits");  // send the user to the index page
});


	// // Edit route
router.get("/:index/edit", (req, res) => {
	res.send("<form>Edit Fruit</form>");
});

// Show route
router.get("/:index", (req, res) => {
	res.render('fruits/Show', {fruit: fruits[req.params.index]});
	// {fruit: fruits[req.params.index] 
	});




// Setup "index" route
// router.get("/", findAllFruits);

// // Setup "new" route
// router.get("/new", showNewView);

// // Setup "destroy" route
// router.delete("/:id", deleteOneFruit);

// // Setup "update" route
// router.put("/:id", updateOneFruit);

// // Setup "create" route
// router.post("/", createNewFruit);

// // Setup "edit" route
// router.get("/:id/edit", showEditView);

// // Setup "seed" route
// router.get("/seed", seedStarterData);

// // Setup "show" route
// router.get("/:id", showOneFruit);

module.exports = router;
