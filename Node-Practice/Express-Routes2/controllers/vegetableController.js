const Vegetable = require("../models/Vegetables");

// ROUTE     GET /Vegetables    (index)
const findAllVegetables = (req, res) => {
	// Find takes two arguments:
	//   1st: an object with our query (to filter our data and find exactly what we need)
	//   2nd: callback (with an error object and the found data)
	Vegetable.find({}, (err, foundVegetable) => {
		if (err) {
			res.status(400).json(err);
		} else {
			res.status(200).render("vegetables/Index", { vegetables: foundVegetable });
		}
	});
};

// ROUTE      GET /Vegetables/new    (new)
const showNewView = (req, res) => {
	// res.send('<form>Create Vegetable</form>')
	res.render("vegetables/New");
};

// ROUTE       DELETE /Vegetables/:id      (destroy)
const deleteOneVegetable = (req, res) => {
	// console.log('in delete route')
	// res.send('Deleting a Vegetable at index! (in DB)')

	Vegetable.findByIdAndDelete(req.params.id, (err, deletedVegetable) => {
		if (err) {
			res.status(400).json(err);
		} else {
			res.status(200).redirect("/vegetables");
		}
	});
};

// ROUTE     PUT /Vegetables/:id       (update)
const updateOneVegetable = (req, res) => {
	// findByIdAndUpdate takes 4 arguments:
	//    1st: the id
	//    2nd: new data we want to use to update the old document
	//    3rd (optional): an options object, which looks like this:  { new: true }
	//    4th: callback (with error object and foundVegetable or updatedVegetable)
	Vegetable.findByIdAndUpdate(req.params.id, req.body, (err, foundVegetable) => {
		if (err) {
			res.status(400).json(err);
		} else {
			res.status(200).redirect(`/vegetables/${req.params.id}`);
		}
	});
};

// ROUTE     POST /Vegetables     (create)
const createNewVegetable = (req, res) => {
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
};

// // ROUTE       GET /Vegetables/seed      (seed)
const seedStarterData = (req, res) => {
	// Delete all remaining documents (if there are any)
	Vegetable.deleteMany({}, (err, deletedVegetables) => {
		if (err) {
			res.status(400).json(err);
			console.log(deletedVegetables);
		} else {
			// Data has been successfully deleted
			// Now use seed data to repopulate the database
			Vegetable.create(seed.vegetables, (err, createdVegetable) => {
				if (err) {
					res.status(400).json(err);
				} else {
					res.status(200).redirect("/vegetables");
				}
			});
		}
	});
};

// ROUTE      GET /Vegetables/:id/edit     (edit)
const showEditView = (req, res) => {
	Vegetable.findById(req.params.id, (err, foundVegetable) => {
		if (err) {
			res.status(400).json(err);
		} else {
			res.status(200).render("vegetables/Edit", { vegetable: foundVegetable });
		}
	});
};

// ROUTE     GET /Vegetables/:id     (show)
const showOneVegetable = (req, res) => {
	// findById accepts two arguments:
	//   1st: the id of the document in our database
	//   2nd: callback (with error object and found document)
	Vegetable.findById(req.params.id, (err, foundVegetable) => {
		if (err) {
			res.status(400).json(err);
		} else {
			res.status(200).render("vegetables/Show", { vegetable: foundVegetable });
		}
	});
};

module.exports = {
	findAllVegetables,
	showNewView,
	createNewVegetable,
	seedStarterData,
	showOneVegetable,
	showEditView,
	updateOneVegetable,
	deleteOneVegetable,
};
