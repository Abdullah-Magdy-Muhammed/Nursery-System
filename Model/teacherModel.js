const mongoose = require("mongoose");
const bcrypt = require('bcrypt')
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
});
schema.pre('save', async function (next) {
    const salt = await bcrypt.genSalt();
    this.password = await bcrypt.hash(this.password, salt)
    next();
})

mongoose.model("teachers", schema)