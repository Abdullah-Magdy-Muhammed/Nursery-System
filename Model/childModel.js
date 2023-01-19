const mongoose = require("mongoose");

// creating child Schema

const schema = new mongoose.Schema({
    _id: Number,
    name: { type: String, required: true },
    age: { type: Number, mix: 5, max: 15 },
    level: { type: String, enum: ['PreKG', 'KG1', 'KG2'] },
    address: [
        {
            city: { type: String, required: [true, "City is required"] },
            street: { type: String, required: [true, "Street is required"] },
            building: { type: Number, required: [true, "Building is required"] }
        }
    ]
})


mongoose.model("child", schema)