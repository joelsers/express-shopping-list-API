const express = require("express")
const ExpressError = require("./expressError")

const app = express()

app.use(express.json())

app.listen(3000, function () {
    console.log('App on port 3000')
})

