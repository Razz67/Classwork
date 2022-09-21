// Load Express
const express = require('express');

// create express app
const app = express();


// Configure the app (app.set)
const fs = require('fs') // this engine requires the fs module like we did Saturday
app.engine('madeline', (filePath, options, callback) => { // define the view engine called hypatia
  fs.readFile(filePath, (err, content) => {
    if (err) return callback(err)
    // this is an extremely simple view engine we'll be more complex later
    const rendered = content.toString()
      .replace('#title#', '<title>' + options.title + '</title>')
      .replace('#message#', '<h1>' + options.message + '</h1>')
      .replace('#content#','<div>'+ options.content + '</div>' )

    return callback(null, rendered)
  })
});

app.set('views', './views') // specify the views directory
app.set('view engine', 'madeline') // register the hypatia view engine


// Define a root route
// The first parameter ('/',) is the path, the second (req, res) is a callback function

app.get("/", (req, res) => {
	res.render("template", {
		title: "Hey",
		message: "Hello there!",
		content: "I am the Boss Ricky Ross",
	});
});

app.get("/about-me", (req, res) => {
	res.render("template", {
		title: "Hey",
		message: "Rick Ross!",
		content: "The most underated Rapper in the game",
	});
});

app.get("/another-one", (req, res) => {
	res.render("template", {
		title: "We The Best",
		message: "Who!",
		content:
			"We Taking Over, Major Key Alert, Yall know who it is, All I do is win",
	});
});


// Mount middleware (app.use)




// Define a root route
// The first parameter ('/',) is the path, the second (req, res) is a callback function
// app.get('/', (req, res) => {
//     res.send('<h1>Hello Razz!</h1>');
//     });

// app.get('/home', (req, res) => {
// res.send('<h1>Home Page</h1>');
// });

// Listen to port 3000
app.listen(3000, () => {
    console.log('Server is up on port 3000');
    });