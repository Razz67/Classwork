// Load express
const express = require("express");

// Create a special router object for our routes
const router = express.Router();

// Load our vegetables data
const vegetables = require("../models/vegetables");

// set up Routes

// Setup "index" route 
router.get('/:index', (req, res) => {
    // res.send(vegetables[req.params.index])
    res.render("vegetables/Index", {vegetables: vegetables})
})

// Setup "new" route
router.get('vegetables/new', (req, res) => {     
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
    
    vegetables.push(req.body)
    res.redirect("/vegetables");
    // res.send('Creating a new fruit! (in DB)')
})

// Setup "edit" route
router.get('/:index/edit', (req, res) => {
    res.send('<form>Edit vegetables</form>')
})



// Set-up Show route
router.get("/", (req, res) => {
    res.send("Showing Vegetables");
})



module.exports = router;