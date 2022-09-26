// Load express
const express = require('express')

// Identify our port
const port = 3000

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
app.use('/fruits', fruitRoutes)
app.use('/meats', meatRoutes)
app.use('/vegetables', vegetableRoutes)



// Listen to port
app.listen(port, () => {
    console.log('Listening on port: ', port)
})

