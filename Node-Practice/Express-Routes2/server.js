const express = require("express");

// Bring in our fruitRoute package
const fruitRoutes = require("./routes/fruitRoute");

// Bring in our meatRoute package
const meatRoutes = require("./routes/meatRoute");

// Bring in our vegetableRoute package
const vegetableRoutes = require("./routes/vegetableRoute");

// Create our express app
const app = express();

// Identify our port
const port = 3000;

// Set up view engine
app.set("view engine", "jsx");
app.engine("jsx", require("express-react-views").createEngine());


// Middleware
app.use(express.urlencoded({ extended: false }));
// app.use(express.static("public"));

app.use("/fruits", fruitRoutes);
app.use("/meats", meatRoutes);
app.use("/vegetables", vegetableRoutes);



app.listen(port, () => {
	console.log("Listening on port", port);
});

