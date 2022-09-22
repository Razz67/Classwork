const express = require('express');
const app = express();
const port = 3000;

app.get("/greeting/hello/:name", (req, res) => {
	res.send("Hello " + req.params.name);
});


app.get("/tip/:amount/:percentage", (req, res) => {
    const { amount, percentage } = req.params;
    const tip = amount * (percentage / 100);
    res.send(`Your tip should be: $${tip}`);

});

const myArray = ["It is certain", "It is decidedly so", "Hell Naw", "Without a doubt", "Yes definitely", "You may rely on it", "As I see it, yes", "Most likely", "Outlook good", "Yes", "Signs point to yes", "Reply hazy try again"];

app.get("/magic/:question", (req, res) => {
    const randomQoute = [Math.floor(Math.random() * myArray.length)];
    res.send(`<h2>${req.params.question}<h2> <h1>${myArray[randomQoute]}</h1>`);
});



app.listen(port, () => console.log(`Example app listening on port ${port}!`));