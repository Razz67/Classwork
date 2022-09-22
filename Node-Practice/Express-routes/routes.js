
// Load Express
const express = require('express');

//Creates express app {object}
const app = express();

// Identify the port
const port = 3000;

// Set up Data Array
const fruits = [
	{
		name: "apple",
		color: "red",
		readyToEat: true,
	},
	{
		name: "pear",
		color: "green",
		readyToEat: false,
	},
	{
		name: "banana",
		color: "yellow",
		readyToEat: true,
	},
	{
		name: "lemon",
		color: "yellow",
		readyToEat: false,
	},
	{
		name: "lime",
		color: "green",
		readyToEat: false,
	},
];

// Use queries to filter data
app.get('/fruits', (req, res) => {
    // Get the query string
    const query = req.query;
    // Filter the data
    const filteredFruits = fruits.filter(fruit => {
        let matchesQuery = true;
        // Loop through the query object
        for (const key in query) {
            // Check if the fruit has the property
            if (fruit[key]) {
                // Check if the fruit property matches the query
                if (fruit[key] === query[key]) {
                    matchesQuery = true;
                }

            } else {
                matchesQuery = false;
            }
        }
        // Return the fruit if it matches the query
        return matchesQuery;
    });
    // Send the filtered data back to the client
    res.send(filteredFruits);
});





// Listen to the port
app.listen(port, () => {
    console.log(`listening at port ${port}`);
    });