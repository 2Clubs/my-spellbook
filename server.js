// Dependencies
const express = require('express')
const mongoose = require('mongoose')
const methodOverride = require('method-override')
require('dotenv').config()
const app = express()

// Database connection
mongoose.connect(process.env.DATABASE_URL)

const db = mongoose.connection
db.on("error", (err) => console.log(err.message + " is mongod not running?"));
db.on("connected", () => console.log("mongo connected"));
db.on("disconnected", () => console.log("mongo disconnected"));

// Middleware
app.use(express.urlencoded({extended: true}))
app.use(methodOverride('_method'))

// Routes / Controllers

app.get('/', (req, res) => {
    res.redirect('/spells')
})

const spellsController = require('./controllers/spells')
app.use('/spells', spellsController)

// Listener
const PORT = process.env.PORT
app.listen(PORT,() =>console.log(`listening on port ${PORT}`))