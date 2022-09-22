// Load express
const express = require('express')

// Identify our port
const port = 3000

// Creates our express app (object)
const app = express()

// Bring in our packaged routes
const fruitRoutes = require('./routes/fruitRoute')
const meatRoutes = require('./routes/meatRoute')
const vegetableRoutes = require('./routes/vegetableRoute')



// Middleware
app.use('/api/fruits', fruitRoutes)
app.use('/api/meats', meatRoutes)
app.use('/api/vegetables', vegetableRoutes)

// Listen to port
app.listen(port, () => {
    console.log('Listening on port: ', port)
})

