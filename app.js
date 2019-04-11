// Imports of main libraries.
const express = require('express')
const mysql = require('mysql')
const bodyParser = require('body-parser')
const morgan = require("morgan")

const app = express()

// app.use(express.static('./public'))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

// Enable CORS.
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "POST, GET, PUT, DELETE, OPTIONS");
    next();
});


// Router for users endpoints.
const users = require('./routes/src')
app.use(users)

// Default endpoint
app.get("/", (req, res) => {
    console.log("Responding to root route")
    res.send("Hello from ROOT")
})


// Server port 
app.listen(3000, () => {
    console.log("Server is listening in port 3005...")
});