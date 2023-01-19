const mongoose = require("mongoose");

// to create schema of techer
const schema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    fullName: { type: String, required: true },
    password: { type: String, required: true },
    email: {
        type: String, required: true, trim: true, lowercase: true, unquie: true,
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },
    image: { type: String }
})

mongoose.model("teachers", schema)