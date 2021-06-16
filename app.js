const express = require("express")
const ExpressError = require("./expressError")

const userRoutes = require("./userRoutes")
const items = require("./fakeDb.js")

const app = express()

app.use(express.json())

app.use('/items', userRoutes)
app.use(express.json())


app.listen(3000, function () {
    console.log('App on port 3000')
})
