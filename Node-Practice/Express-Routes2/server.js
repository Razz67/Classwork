const express = require("express");

// Bring in our fruitRoute package
const fruitRoutes = require("./routes/fruitRoute");

// Create our express app
const app = express();

// Identify our port
const port = 3000;

// Middleware
app.use("/api/fruits", fruitRoutes);
// app.use(meatRoutes);
// app.use(vegetableRoutes);

app.use(express.urlencoded({ extended: false }));
app.use(express.static("public"));


// Set up view engine
// app.set("view engine", "jsx");
// app.engine("jsx", require("express-react-views").createEngine());



app.listen(port, () => {
	console.log("Listening on port", port);
});
