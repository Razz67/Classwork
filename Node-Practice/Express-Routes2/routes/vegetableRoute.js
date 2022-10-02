// Load express
const express = require("express");

// Create a special router object for our routes
const router = express.Router();

// Load oour vegetables data
const vegetables = require("../models/vegetables");

// Bring in seed data
// const seed = require("../models/seed");

// Bring in controller functions (destructure methods)
// const {
// 	findAllVegetables,
// 	showNewView,
// 	createNewVegetable,
// 	seedStarterData,
// 	showOneVegetable,
// 	showEditView,
// 	updateOneVegetable,
// 	deleteOneVegetable,
// } = require("../controllers/vegetableController");

// Bring in controller object (with methods attached)
// const vegetableController = require('../controllers/vegetableController')
// Example: router.get('/', vegetableController.findAllVegetables)

// I.N.D.U.C.E.S
// Index, New, Delete, Update, Create, Edit, Show

// Root route
router.get("/", (req, res) => {
	res.send(vegetables);
});

// Index route
router.get("/", (req, res) => {
	res.send(vegetables);
});

// New route
router.get("/new", (req, res) => {
	res.send("<form>New Vegetable</form>");
});

// Delete route
router.delete("/:index", (req, res) => {
	res.send("Deleting a Vegetable at index! (in DB)");
	// vegetables.splice(req.params.index);
	// res.redirect("/vegetables");
});

// Update route
router.put("/:index", (req, res) => {
	res.send("Update Vegetable at index! (in DB)");
});

// Create route
router.post("/", (req, res) => {
	res.send("Creating a vegetable");
	// res.redirect("/vegetables");  // send the user to the index page
});

// Edit route
router.get("/vegetables/:index/edit", (req, res) => {
	res.send("<form>Edit Vegetable</form>");
});

// Show route
router.get("/vegetables/:index", (req, res) => {
	res.send({
		fruit: vegetables[req.params.index], // look inside the views folder for Show.jsx and pass in the html
	});
});

// Setup "index" route
// router.get("/", findAllVegetables);

// // Setup "new" route
// router.get("/new", showNewView);

// // Setup "destroy" route
// router.delete("/:id", deleteOneVegetable);

// // Setup "update" route
// router.put("/:id", updateOneVegetable);

// // Setup "create" route
// router.post("/", createNewVegetable);

// // Setup "edit" route
// router.get("/:id/edit", showEditView);

// // Setup "seed" route
// router.get("/seed", seedStarterData);

// // Setup "show" route
// router.get("/:id", showOneVegetable);

module.exports = router;
