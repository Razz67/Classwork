const express = require("express");
const app = express();
const fruits = require("./models/fruits.js");


// Root route
app.get("/fruits", (req, res) => {
	res.send(fruits);
});

// Show route
app.get("/fruits/:indexOfFruitsArray", (req, res) => {
	res.send(fruits[req.params.indexOfFruitsArray]);
});

app.listen(3000, () => {
	console.log("Listening on port 3000");
});
