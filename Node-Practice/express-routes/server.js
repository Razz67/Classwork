// Load express
const express = require('express')

// Identify our port
const port = process.env.PORT || 3000;
require("dotenv").config()

// Creates our express app (object)
const app = express()

// set up our view engine
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());


// Middleware
app.use(express.urlencoded({extended:false}))
app.use(express.static("public"))
app.use("/fruits", fruitRoutes);
app.use("/meats", meatRoutes);
app.use("/vegetables", vegetableRoutes);

// Bring in our packaged routes
const fruitRoutes = require('./routes/fruitRoute')
const meatRoutes = require('./routes/meatRoute')
const vegetableRoutes = require('./routes/vegetableRoute')



// Listen to port
app.listen(port, () => {
    console.log('Listening on port: ', port)
})

