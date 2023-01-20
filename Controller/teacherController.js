const mongoose = require("mongoose");
require("./../Model/teacherModel");

const TeacherSchema = mongoose.model("teachers");



exports.getAllTeachers = (request, response, next) => {
    TeacherSchema.find()
        .then((data) => {
            response.status(200).json(data);
        })
        .catch((error) => next(error))
}

exports.addTeacher = (request, response, next) => {
    let newTeacher = new TeacherSchema({
        _id: mongoose.Types.ObjectId(),
        fullName: request.body.fullName,
        password: request.body.password,
        email: request.body.email,
        image: request.body.image

    });
    newTeacher.save()
        .then(result => {
            response.status(201).json(result);
        })
        .catch(error => next(error))
}

exports.updateTeacher = (request, response, next) => {
    TeacherSchema.updateOne({
        _id: request.body.id
    }, {
        $set: {
            fullName: request.body.fullName,
            password: request.body.password,
            email: request.body.email,
            image: request.body.image
        }
    }).then(result => {
        response.status(200).json({ "message": "Teacher is updated" })
    })
        .catch(error => next(error))
}

exports.getTeacherByID = (request, response, next) => {
    TeacherSchema.findById(request.params.id)
        .then((data) => {
            response.status(200).json(data)
        })
        .catch(error => next(error))

}
exports.deleteTeacherByID = (request, response, next) => {
    TeacherSchema.findByIdAndDelete(request.params.id)
        .then(() => {
            response.status(200).json({ "message": "This Teacher is deleted" })
        })
        .catch(error => next(error))
    // response.status(200).json({ deletedTeacherData: request.params.id })

}