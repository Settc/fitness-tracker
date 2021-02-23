const mongoose = require("mongoose")

const Schema = mongoose.Schema
const WorkoutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now
    },

    exercise: {
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
    }
})

const Workout = mongoose.model("Workout", WorkoutSchema)

module.exports = Workout