// Load express
const express = require("express");

// Create a special router object for our routes
const router = express.Router();

// Loading our Model of fruit
const Fruit = require("../models/fruit");

// I.N.D.U.C.E.S
// Index, New, Delete, Update, Create, Edit, Show

// Setup "index" route
router.get("/", (req, res) => {
	// Find takes two arguments:
	//   1st: an object with our query (to filter our data and find exactly what we need)
	//   2nd: callback (with an error object and the found data)
	Fruit.find({}, (err, foundFruit) => {
		if (err) {
			res.status(400).json(err);
		} else {
			res.status(200).render("fruits/Index", { fruit: foundFruit });
		}
	});
});

// Setup "new" route
router.get("/new", (req, res) => {
	res.render("fruits/New");
});

// Setup "create" route
router.post("/", (req, res) => {
	if (req.body.readyToEat === "on") {
		req.body.readyToEat = true;
	} else {
		req.body.readyToEat = false;
	}

	// Create has two arguments:
	//   1st: the data we want to send
	//   2nd: callback function
	Fruit.create(req.body, (err, createdFruit) => {
		if (err) {
			res.status(400).json(err);
		} else {
			res.status(200).redirect("fruits/Show", {fruit: createdFruit});
		}
	});

});

// Setup "show" route
router.get("/:id", (req, res) => {
    // findById requires two arguments
    // 1. the id of the document in our database
    // 2. callbak (with err object and found document)
    Fruit.findById(req.params.id, (err, foundFruit) => {
        if (err) {
            res.status(400).json(err)
        } else {
            res.status(200).render("Fruits/Show", {fruit: foundFruit})
        }
    })
});

// Setup "edit" route
router.get("/:index/edit", (req, res) => {
	res.send("<form>Edit fruit</form>");
});

// Setup "update" route
router.put("/:index", (req, res) => {
	res.send("Updating a fruit at index! (in DB)");
});

// Setup "destroy" route
router.delete("/:index", (req, res) => {
	res.send("Deleting a fruit at index! (in DB)");
});

module.exports = router;
