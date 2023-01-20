const mongoose = require("mongoose");
const AutoIncrement = require('mongoose-sequence')(mongoose);

// to create schema of class
const schema = new mongoose.Schema({
    _id: Number,
    name: { type: String, required: true },
    supervisor: { type: mongoose.Schema.Types.ObjectId, required: true, ref: "teachers" },
    children: [{
        type: Number,
        ref: "child"
    }]
}, { _id: false })

schema.plugin(AutoIncrement, { id: 'class_id_counter', inc_field: '_id' });

mongoose.model("class", schema)