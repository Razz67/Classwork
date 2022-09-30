// Load Express
const express = require('express');
const fs = require('fs');

// Create an instance of Express
const app = express();

app.engine("madeline", (filePath, options, callback) => {
	fs.readFile(filePath, (err, content) => {
		if (err) return callback(err);

		// This is an extremely simple template engine
		const rendered = content
			.toString()
			.replace('#title#', '<title>' + options.title + '</title>')
			.replace('#message#', '<h1>' +options.title + '</h1>').replace('#content#', '<div>' + options.content + '</div>')
        return callback(null, rendered);
	});
});

app.set("views", "./views"); // specify the views directory
app.set("view engine", "madeline"); // register the template engine

// Configure the app (app.set)

// Mount middleware (app.use)

// Mount routes
app.get('/',  (req, res) => {
    res.render('template', { title: 'Hey', message: 'Hello there!', content: 'I am the Boss Ricky Ross'});
});

app.get('/about-me',  (req, res) => {
    res.render('template', { title: 'Hey', message: 'Rick Ross', content: 'The most underrated rapper of all time'});
});

app.get('/another-one',  (req, res) => {
    res.render('template', { title: 'We The Best', message: 'Who', content: 'We taking over, Major Key Alert, Yall know who it is, All I do is win'});
});

// Listen on port 3000
app.listen(3000, () => {
    console.log('Listening on port 3000');
});