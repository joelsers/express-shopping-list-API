const express = require("express")
const ExpressError = require("./expressError")

const userRoutes = require("./userRoutes")

const app = express()

app.use(express.json())

app.use('/users', userRoutes)

app.listen(3000, function () {
    console.log('App on port 3000')
})

