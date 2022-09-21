// Load Express
const express = require('express');
const port = 3000;

const plants = ["Monstera", "Pothos", "Philodendron",
"Witches Butter", "Fiddle Leaf Fig"];


// Create the Express app
const app = express();


// Define the routes
// app.get("/plants", (req, res) => {
//     res.send('<h1>Plants are awesome!</h1>');
// });

// app.get('/:index', (req, res) => {
//     if (plants[req.params.index]) {
//     res.send(plants[req.params.index]);
// } else {
//     res.send("Sorry, that plant doesn't exist!");
// }
// });

// // Respond to requests with multiple params
// app.get("/hello/:firstname/:lastname", (req, res) => {
// 	console.log(req.params);
// 	res.send("Hello " + req.params.firstname + " " + req.params.lastname);
// });


// Sample with req.query
app.get('/howdy/:firstName/:lastName/', (req, res) => {
    console.log(req.params);
    console.log(req.query);
    res.send("Howdy " + req.query.firstName + " " + req.query.lastName);
});



//Listen on port 3000
app.listen(port, () => {
    console.log('Listening on port', port);
});