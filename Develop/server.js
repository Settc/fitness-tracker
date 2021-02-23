require("dotenv").config()
const express = require("express")
const mongoose = require("mongoose")

const path = require("path")

const app = express()

const PORT = process.env.PORT || 3000

app.use(express.urlencoded( {extended: true} ))
app.use(express.json())
app.use(express.static("public"))

mongoose.connect(process.env.MONGO_URI)

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname + "/public/index.html"))
  })
  
  app.get("/exercise", (req, res) => {
    res.sendFile(path.join(__dirname + "/public/exercise.html"));
  });
  
  app.get("/stats", (req, res) => {
    res.sendFile(path.join(__dirname + "/public/stats.html"))
  })

  app.listen(PORT, () => {
    console.log(`App listening on PORT: ${PORT}`)
})
