// Load express & mongoosDB
const express = require('express')
const mongoose = require("mongoose");


// Bring in our packaged routes
const fruitRoutes = require('./routes/fruitRoutes')
const meatRoutes = require('./routes/meatRoutes')
const vegetableRoutes = require('./routes/vegetableRoutes')

// .env config
require("dotenv").config();

// Creates our express app (object)
const app = express();

// Identify our PORT
const port = process.env.PORT;

// set up our view engine
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());




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

// Listen to PORT
app.listen(port, () => {
    console.log('Listening on PORT: ', port)
})

