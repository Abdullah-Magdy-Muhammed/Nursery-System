const { request, response, next } = require("express");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
require("./../Model/teacherModel");

const TeacherSchema = mongoose.model("teachers");



exports.login = (request, response, next) => {
    let token;
    // admin 
    if (request.body.username == "abdullah" && request.body.password == 222000) {
        token = jwt.sign({ role: "admin", username: "abullah" }, "privateKeyForMe", { expiresIn: "1h" })
        response.status(200).json({ message: "Log In", token })

    } else {
        TeacherSchema.findOne({ email: request.body.email, password: request.body.password })
            .then(data => {
                if (data == null) {
                    next(new Error("Not Authenticated!"))
                }
                else {
                    token = jwt.sign({ role: "teacher", email: data.email, id: data._id }, "privateKeyForMe", { expiresIn: "1h" })
                    response.status(200).json({ message: "Log In", token })

                }

            })
            .catch(error => next(error))

    }

}
