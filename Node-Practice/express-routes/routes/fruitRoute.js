// Load express
const express = require('express')

// Create a special router object for our routes
const router = express.Router()


// INDUCES
// index, New, Delete, Update, Create, Edit, Show

// Load our fruits data
const fruits = require('../models/fruits')

// Setup "index" route
router.get("/", (req, res) => {
	// res.send("fruits")
	res.render('fruits/Index', {fruits: fruits})
});



// Use queries to filter data
// router.get("/", (req, res) => {
// 	// Get the query string
// 	const query = req.query;
// 	// Filter the data
// 	const filteredFruits = fruits.filter((fruit) => {
// 		let matchesQuery = true;
// 		// Loop through the query object
// 		for (const key in query) {
// 			// Check if the fruit has the property
// 			if (fruit[key]) {
// 				// Check if the fruit property matches the query
// 				if (fruit[key] === query[key]) {
// 					matchesQuery = true;
// 				}
// 			} else {
// 				matchesQuery = false;
// 			}
// 		}
// 		// Return the fruit if it matches the query
// 		return matchesQuery;
// 	});
// 	// Send the filtered data back to the client
// 	res.send(filteredFruits);
// });


// Setup "new" route
router.get('fruits/new', (req, res) => {     
    // res.send('<form>Create fruit</form>')
	res.render('New')
})

// Setup "delete" route
router.delete('/:index/delete', (req, res) => {
    res.send('Deleting a fruit at index! (in DB)')
})

// Setup "update" route
router.put('/:index', (req, res) => {
    res.send('Updating a fruit at index! (in DB)')
})


// Setup "create" route
router.post('/', (req, res) => {
    console.log(req.body)
    if (req.body.readyToEat === "on") {
        req.body.readyToEat = true
    } else {
        req.body.readyToEat = false
    }
    fruits.push(req.body)
    res.redirect("/fruits");
    // res.send('Creating a new fruit! (in DB)')
})

// Setup "edit" route
router.get('/:index/edit', (req, res) => {
    res.send('<form>Edit fruit</form>')
})

// Setup "show" route  
router.get('/:index', (req, res) => {
	// res.send(fruit[req.params.index]);
    res.render("Show", {fruits: fruits[req.params.index]});
})

// Export the router
module.exports = router;
