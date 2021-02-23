const mongoose = require("mongoose")

const Schema = mongoose.Schema
const WorkoutSchema = new Schema({
    type: {
        type: String
    },

    name: {
        type: String,
        unique: true,
        required: true
    },

    weight: {
        type: Number,
        required: true
    },

    sets: {
        type: Number,
        required: true,
    },

    reps: {
        type: Number,
        require: true
    },

    duration: {
        type: Number
    },

    distance: {
        type: Number
    }
})

const Workout = model("Workout", WorkoutSchema)

module.exports = Workout