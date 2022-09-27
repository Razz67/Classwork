// Load express
const express = require('express')
const mongoose = require("mongoose")

// Identify our port
const port = process.env.PORT || 3000;

// .env config
require("dotenv").config();

// Creates our express app (object)
const app = express()

// set up our view engine
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());



// Bring in our packaged routes
const fruitRoutes = require('./routes/fruitRoute')
const meatRoutes = require('./routes/meatRoute')
const vegetableRoutes = require('./routes/vegetableRoute')

// Middleware
app.use(express.urlencoded({extended:false}))
app.use(express.static("public"))
app.use("/fruits", fruitRoutes);
app.use("/meats", meatRoutes);
app.use("/vegetables", vegetableRoutes);


mongoose.connect(process.env.MONGO_DB);
mongoose.connection.once("open", () => {
    console.log("Connected to MongoDb");
})

// Listen to port
app.listen(port, () => {
    console.log('Listening on port: ', port)
})

