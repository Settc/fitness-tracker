
const express = require("express")
const mongoose = require("mongoose")
const logger = require("morgan")

const path = require("path")

const app = express()

const db = require("./models/workout")


const PORT = process.env.PORT || 3000

app.use(express.urlencoded( {extended: true} ))
app.use(express.json())
app.use(express.static("public"))
app.use(logger("dev"));

console.log(process.env.MONGODB_URI)

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", { 
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
  
})

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname + "/public/index.html"))
  })
  
  app.get("/exercise", (req, res) => {
    res.sendFile(path.join(__dirname + "/public/exercise.html"));
  });
  
  app.get("/stats", (req, res) => {
    res.sendFile(path.join(__dirname + "/public/stats.html"))
  })



app.get("/api/workouts", (req, res) => {
    db.find({})
    .then((results) => {
        res.json(results)
    })
    .catch((err) => {
        res.status(400).json(err)
    })
})

app.post("/api/workouts", (req, res) => {
    db.create( {} )
        .then((results) => {
            res.json(results)
        })
        .catch((err) => {
            res.status(400).json(err)
        })
})

app.put("/api/workouts/:id", (req, res) => {
  console.log(req.body)
    db.findOneAndUpdate(
      req.params.id,
    {
      $push: {
        exercises: req.body
      }
    },
      { new: true, runValidators: true }
    )
    .then((results) => {
      console.log(JSON.stringify(results))
      res.json(results)
    })
    .catch((err) => {
      res.status(400).json(err)
    })
})

app.get("/api/workouts/range", (req, res) => {
  db.find({})
    .then((results) => {
      res.json(results)
    })
    .catch((err) => {
      res.status(400).json(err)
    })
})



  app.listen(PORT, () => {
    console.log(`App listening on PORT: ${PORT}`)
})


