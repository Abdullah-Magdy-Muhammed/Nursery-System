const mongoose = require("mongoose");

// to create schema of class
const schema = new mongoose.Schema({
    _id: Number,
    name: { type: String, required: true },
    supervisor: { type: mongoose.Schema.Types.ObjectId, required: true },
    children: [{
        type: Number,
    }]
})

mongoose.model("class", schema)