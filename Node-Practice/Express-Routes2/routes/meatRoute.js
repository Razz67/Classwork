// Load express
const express = require("express");

// Load oour meats data
const meats = require("../models/meats");

// Create a special router object for our routes
const router = express.Router();




// Bring in seed data
// const seed = require("../models/seed");

// Bring in controller functions (destructure methods)
// const {
// 	findAllMeats,
// 	showNewView,
// 	createNewMeat,
// 	seedStarterData,
// 	showOneMeat,
// 	showEditView,
// 	updateOneMeat,
// 	deleteOneMeat,
// } = require("../controllers/fruitController");

// Bring in controller object (with methods attached)
// const meatController = require('../controllers/meatController')
// Example: router.get('/', fruitController.findAllMeats)

// I.N.D.U.C.E.S
// Index, New, Delete, Update, Create, Edit, Show


// Index route
router.get("/", (req, res) => {
	res.render("meats/Index", { meats: meats });
});

// New route
router.get("/new", (req, res) => {
	res.render("meats/New");
});

// Delete route
router.delete("/:index", (req, res) => {
	res.send("Deleting a Meat at index! (in DB)");
	// meats.splice(req.params.index);
	// res.redirect("/meats");
});

// Update route
router.put("/:index", (req, res) => {
	res.send("Update Meat at index! (in DB)");
});

// Create route
router.post("/", (req, res) => {
	// res.send("Creating a meat");
	meats.push(req.body);
	res.redirect("/meats");  // send the user to the index page
});

// Edit route
router.get("/:index/edit", (req, res) => {
	res.send("<form>Edit Meat</form>");
});

// Show route
router.get("/:index", (req, res) => {
	res.render("meats/Show", {meat: meats[req.params.index]}) // look inside the views folder for Show.jsx and pass in the html
});

// Setup "index" route
// router.get("/", findAllMeats);

// // Setup "new" route
// router.get("/new", showNewView);

// // Setup "destroy" route
// router.delete("/:id", deleteOneMeat);

// // Setup "update" route
// router.put("/:id", updateOneMeat);

// // Setup "create" route
// router.post("/", createNewMeat);

// // Setup "edit" route
// router.get("/:id/edit", showEditView);

// // Setup "seed" route
// router.get("/seed", seedStarterData);

// // Setup "show" route
// router.get("/:id", showOneMeat);

module.exports = router;
