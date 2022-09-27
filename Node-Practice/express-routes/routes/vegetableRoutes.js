// Load express
const express = require("express");

// Create a special router object for our routes
const router = express.Router();

// Loading our Model of fruit
const Vegetable = require("../models/vegetable");

// I.N.D.U.C.E.S
// Index, New, Delete, Update, Create, Edit, Show

// Setup "index" route
router.get("/", (req, res) => {
	// Find takes two arguments:
	//   1st: an object with our query (to filter our data and find exactly what we need)
	//   2nd: callback (with an error object and the found data)

	Meat.find({}, (err, foundVegetable) => {
		if (err) {
			res.status(400).json(err);
		} else {
			res.status(200).render("vegetable/Index", { vegetable: foundVegetable });
		}
	});
});

// Setup "new" route
router.get("/new", (req, res) => {
	res.render("vegetables/New");
});

// Setup "create" route
router.post("/", (req, res) => {
	Meat.create(req.body, (err, createdVegetable) => {
		if (err) {
			res.status(400).json(err);
		} else {
			res.status(200).redirect("/vegetables");
		}

		// Create has two arguments:
		//   1st: the data we want to send
		//   2nd: callback function

		Vegetable.create(req.body, (err, createdVegetable) => {
			if (err) {
				res.status(400).json(err);
			} else {
				res.status(200).redirect("/vegetables");
			}
		});
	});
});

// Setup "show" route
router.get("/:id", (req, res) => {
	// findById requires two arguments
	// 1. the id of the document in our database
	// 2. callbak (with err object and found document)
	Vegetable.findById(req.params.id, (err, foundVegetable) => {
		if (err) {
			res.status(400).json(err);
		} else {
			res.status(200).render("meats/Show", { vegetable: foundVegetable });
		}
	});
});

// Setup "edit" route
router.get("/:index/edit", (req, res) => {
	res.send("<form>Edit vegetable</form>");
});

// Setup "update" route
router.put("/:index", (req, res) => {
	res.send("Updating a vegetable at index! (in DB)");
});

// Setup "destroy" route
router.delete("/:index", (req, res) => {
	res.send("Deleting a vegetable at index! (in DB)");
});

module.exports = router;
