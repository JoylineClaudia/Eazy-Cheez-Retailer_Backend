const express = require('express')
const app = express()
const dotenv = require('dotenv').config()
const connectDB = require('./config/db.js')
const {errorHandler} = require('./middlewares/errorMiddleware')



//Set the connection to the database
connectDB()

//Used to wrap the req.body to json object
app.use( express.json() )
app.use( express.urlencoded({ extended: false }) )


//Route the  /api/profile/:id requests to routes
app.use('/api/profile', checkAuth, require('./routes/profileRoutes'))



//Overwrites the default Express Error Handler
app.use(errorHandler)

//Set the Port from .env file
const port = process.env.PORT || 5000

//Listens to the port
app.listen( port, () => console.log(`Server started at port ${port}`) )
