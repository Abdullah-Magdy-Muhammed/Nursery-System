const { response } = require("express");
const mongoose = require("mongoose");
require("./../Model/classModel");

const ClassSchema = mongoose.model("class");

exports.getAllClass = (request, response, next) => {
    ClassSchema.find()
        .then((data) => {
            response.status(200).json(data);
        })
        .catch((error) => next(error))
}

exports.addClass = (request, response, next) => {
    let newClass = new ClassSchema({
        _id: request.body.id,
        name: request.body.name,
        supervisor: request.body.supervisor,
        children: request.body.children
    });
    newClass.save()
        .then(result => {
            response.status(201).json(result);
        })
        .catch(error => next(error))
}
exports.updateClass = (request, response, next) => {
    ClassSchema.updateOne({
        _id: request.body.id
    }, {
        $set: {
            name: request.body.name,
            supervisor: request.body.supervisor,
            children: request.body.children
        }
    }).then(result => {
        response.status(200).json({ "message": "Class is updated" })
    })
        .catch(error => next(error))
}

exports.getClassByID = (request, response, next) => {
    ClassSchema.findById(request.params.id)
        .then((data) => {
            response.status(200).json(data)
        })
        .catch(error => next(error))
}
exports.deleteClassByID = (request, response, next) => {
    ClassSchema.findByIdAndDelete(request.params.id)
        .then(() => {
            response.status(200).json({ "message": "This Class is deleted" })
        })
}

exports.getClassChildren = (request, response, next) => {

    response.status(200).json({ data: request.params.children })

}
exports.getClassTeacher = (request, response, next) => {

    response.status(200).json({ data: request.params.supervisor })

}