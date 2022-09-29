// Load express
const express = require("express");

// Create a special router object for our routes
const router = express.Router();

// Loading our Model of fruit
const Fruit = require("../models/meat");

// Bring in seed data
const seed = require("../models/seed");

// Bring in controller functions (destructure methods)
const {
	findAllMeats,
	showNewView,
	createdMeat,
	seedStarterData,
	showMeat,
	showEditView,
	updateMeat,
	deleteMeat,
} = require("../controllers/meatController");

// Bring in controller object (with methods attached)
// const meatController = require('../controllers/meatController')
// Example: router.get('/', meatController.findAllMeats)

// I.N.D.U.C.E.S
// Index, New, Delete, Update, Create, Edit, Show

// Setup "index" route
router.get("/", findAllMeats);

// Setup "new" route
router.get("/new", showNewView);

// Setup "destroy" route
router.delete("/:id", deleteMeat);

// Setup "update" route
router.put("/:id", updateMeat);

// Setup "create" route
router.post("/", createdMeat);

// Setup "edit" route
router.get("/:id/edit", showEditView);

// Setup "seed" route
router.get("/seed", seedStarterData);

// Setup "show" route
router.get("/:id", showMeat);


module.exports = router;
