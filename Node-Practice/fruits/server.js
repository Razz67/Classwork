const express = require("express");
const app = express();
const fruits = require("./models/fruits.js");

// Set up view engine
app.set("view engine", "jsx");
app.engine("jsx", require("express-react-views").createEngine());

// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.static("public"));


// ********** INDUCES (Index, New, Delete, Update, Create, Edit, Show **********
// Root route
app.get("/", (req, res) => {
	res.send('This is the root route');
});

// Index route
app.get("/fruits", (req, res) => {
	res.render("Index", {fruits: fruits});
});

// Create New route
app.get("/fruits/new", (req, res) => {
	res.render("New");
});

// Create route
app.post("/fruits", (req, res) => {
	
	if (req.body.readyToEat === "on" || req.body.readyToEat === "true") {
		req.body.readyToEat = true;
	} else {
		req.body.readyToEat = false;
	}
	fruits.push(req.body);
	console.log(req.body);
	res.redirect("/fruits");  // send the user to the index page
});



// Show route
app.get("/fruits/:indexOfFruitsArray", (req, res) => {
	res.render('Show', {fruit: fruits[req.params.indexOfFruitsArray]  // look inside the views folder for Show.jsx and pass in the html
	});
});





app.listen(3000, () => {
	console.log("Listening on port 3000");
});
