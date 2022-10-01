// Load Express
const express = require('express');
// assign port number to variable
const port = 3000;
// Create the Express app
const app = express();


const plants = ["Monstera Deliciosa", "Pothos", "Philodendron",
"Witches Butter", "Fiddle Leaf Fig"];




// ********** Define the routes ********** 
// Define a root route
// app.get('/', (req, res) => {
// 	  res.send('Hello World!, This is my root route');
// });

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

// ********** Respond to requests with multiple params **********
// app.get("/hello/:firstname/:lastname", (req, res) => {
// 	console.log(req.params);
// 	res.send("Hello " + req.params.firstname + " " + req.params.lastname);
// });


// ********** Sending multiple statements in one response **********
// app.get("/fixed/:indexOfPlantsArray", (req, res) => {
// 	if (plants[req.params.index]) {
// 		res.send(plants[req.params.indexOfPlantsArray]);
// 	}else {
// 	res.send("cannot find anything at that index: "+ req.params.indexOfPlantsArray);
// 	}
// });


// ********** Example of  routes in the wrong order **********
// app.get('/:indexOfPlantsArray', (req, res) => {  // :idexOfPlantsArray can be anything
// 	res.send(plants[req.params.indexOfPlantsArray]);
// });

// app.get('/awesome', (req, res) => {    // this route will never be reached
// 	res.send(`<h1>Plants are awesome!</h1>
// 	<img src="https://static.boredpanda.com/blog/wp-content/uploads/2019/01/most-beautiful-flowers-photography-5c3f3c3b5f9b9__700.jpg" alt="flowers">`);
// });

// ********** Sample with req.query with multiple params ********** 
// app.get('/howdy/:firstName/:lastName/', (req, res) => {
//     console.log(req.params);
//     console.log(req.query);
//     res.send("Howdy " + req.query.firstName + " " + req.query.lastName);
// });


//Listen on port 3000
app.listen(port, () => {
    console.log('Listening on port', port);
});